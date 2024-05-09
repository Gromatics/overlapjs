import {OverlapConfig, OverlapPosition} from "./decs";

export class Overlap {

    elementsInViewport = false;
    config: OverlapConfig;
    containerElement: HTMLElement | null = null;
    topElement: HTMLElement | null = null;
    bottomElement: HTMLElement | null = null;
    overlayDiv: HTMLElement | null = null;
    overlayDivInitialised = false;

    elementListenerInterval: any = null;

    topElementPostion: OverlapPosition = {
        offsetTop: 0,
        offsetLeft: 0,
        offsetHeight: 0,
        offsetWidth: 0,
        transform: ""
    }

    bottomElementPostion: OverlapPosition = {
        offsetTop: 0,
        offsetLeft: 0,
        offsetHeight: 0,
        offsetWidth: 0,
        transform: ""
    }

    constructor(config: OverlapConfig) {
        this.config = config;
        this.init();
        this.elementListners();
        this.windowListeners();
        this.render();
    }

    divOverlap = (a: Element, b: Element) => {
        const rect1 = a.getBoundingClientRect();
        const rect2 = b.getBoundingClientRect();
        const isInHoriztonalBounds = rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
        const isInVerticalBounds = rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
        return isInHoriztonalBounds && isInVerticalBounds;
    }

    windowListeners() {
        addEventListener("resize", () => this.render());
        addEventListener("scroll", () => {
            if (this.topElement && this.bottomElement) {
                const elementsInViewport = this.elementIsVisibleInViewport(this.topElement, true) || this.elementIsVisibleInViewport(this.bottomElement, true)
                if (elementsInViewport !== this.elementsInViewport) {
                    this.elementsInViewport = elementsInViewport;
                    this.elementListners();
                }
            }
        });
    }

    elementListners() {
        if (this.elementsInViewport && this.topElement && this.bottomElement && this.overlayDiv) {
            this.elementListenerInterval = setInterval(() => {
                this.checkPosition(this.bottomElement as HTMLElement, this.bottomElementPostion);
                this.checkPosition(this.topElement as HTMLElement, this.topElementPostion);
            }, 10);
        } else {
            if(this.elementListenerInterval) {
                clearInterval(this.elementListenerInterval);
            }
        }
    }

    checkPosition(element: HTMLElement, position: OverlapPosition) {
        if (
            element.offsetTop !== position.offsetTop ||
            element.offsetLeft !== position.offsetLeft ||
            element.offsetWidth !== position.offsetWidth ||
            element.offsetHeight !== position.offsetHeight ||
            element.style.transform !== position.transform
        ) {
            position.offsetTop = element.offsetTop;
            position.offsetLeft = element.offsetLeft;
            position.offsetWidth = element.offsetWidth;
            position.offsetHeight = element.offsetHeight
            position.transform = element.style.transform
            this.render();
        }
    }

    elementIsVisibleInViewport = (el: Element, partiallyVisible = false) => {
        const {top, left, bottom, right} = el.getBoundingClientRect();
        const {innerHeight, innerWidth} = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) ||
                (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };

    init() {
        this.containerElement = document.querySelector(this.config.container);
        if (this.containerElement) {
            this.topElement = this.containerElement.querySelector(this.config.topElement) as HTMLElement;
            this.bottomElement = this.containerElement.querySelector(this.config.bottomElement) as HTMLElement;
            if (this.topElement && this.bottomElement) {
                this.topElement.style.overflow = 'hidden'
                this.overlayDiv = this.overlayDiv ? this.overlayDiv : this.bottomElement.cloneNode(true) as HTMLElement;
                this.overlayDiv.innerHTML = "";
                this.overlayDiv.style.backgroundColor = '';
                this.overlayDiv.style.backgroundImage = '';
            } else {
                console.error(`${this.topElement} or ${this.bottomElement} was not found in the container (${this.config.container})`);
            }
        } else {
            console.error(`Container element ${this.config.container} was not found`);
        }
    }

    public render() {
        if (this.topElement && this.bottomElement && this.overlayDiv) {
            if (this.divOverlap(this.topElement, this.bottomElement)) {

                //Add styles of parent
                const cssArr = this.bottomElement.style.cssText.split(";");
                cssArr.forEach((rule) => {
                    const keyVal = rule.split(":");
                    if (this.overlayDiv && keyVal.length == 2) {
                        this.overlayDiv.style[keyVal[0].trim() as keyof object] = keyVal[1].trim();
                    }
                })

                if (this.config.overlapStyle) {
                    Object.keys(this.config.overlapStyle).forEach((key: any) => {
                        if (this.overlayDiv && this.config.overlapStyle) {
                            // @ts-ignore
                            this.overlayDiv.style[key as keyof object] = this.config.overlapStyle[key as keyof object];
                        }
                    });
                }

                if (this.config.overlapClass) {
                    this.overlayDiv.className += " " + this.config.overlapClass;
                }

                this.overlayDiv.style.display = 'block';
                this.overlayDiv.style.position = 'absolute';
                this.overlayDiv.style.top = `${this.bottomElement.offsetTop - this.topElement.offsetTop}px`;
                this.overlayDiv.style.left = `${this.bottomElement.offsetLeft - this.topElement.offsetLeft}px`;

                if (!this.overlayDivInitialised) {
                    this.overlayDivInitialised = true;
                    this.topElement.appendChild(this.overlayDiv);
                }
            } else {
                this.overlayDiv.style.display = 'none';
            }
        }
    }
}

