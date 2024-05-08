interface OverlapConfig {
    container: string;
    topElement: string;
    bottomElement: string;
    overlapStyle?: object;
    overlapClass?: string;
}

// selector: string, overlapTopSelector: string, overlapBottomSelector: string, overlapStyle: object

export function overlapjs(config: OverlapConfig) {

    let overlayDiv: HTMLElement | null = null;
    let overlayDivInitialised = false;

    const divOverlap = (a: Element, b: Element) => {
        const rect1 = a.getBoundingClientRect();
        const rect2 = b.getBoundingClientRect();
        const isInHoriztonalBounds = rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
        const isInVerticalBounds = rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
        return isInHoriztonalBounds && isInVerticalBounds;
    }

    const run = () => {
        Array.from(document.querySelectorAll(config.container) as NodeListOf<HTMLElement>).forEach((element) => {
            const topDiv = element.querySelector(config.topElement) as HTMLElement;
            const bottomDiv = element.querySelector(config.bottomElement) as HTMLElement;

            if (topDiv && bottomDiv && divOverlap(topDiv, bottomDiv)) {
                topDiv.style.overflow = 'hidden'
                overlayDiv = overlayDiv ? overlayDiv : bottomDiv.cloneNode(true) as HTMLElement;
                overlayDiv.innerHTML = "";

                //Add styling and classes before overriding the position
                if (!overlayDivInitialised) {
                    if (config.overlapStyle) {
                        overlayDiv.style.backgroundColor = '';
                        overlayDiv.style.backgroundImage = '';

                        Object.keys(config.overlapStyle).forEach((key: any) => {
                            if (overlayDiv && config.overlapStyle) {
                                overlayDiv.style[key as keyof object] = config.overlapStyle[key as keyof object];
                            }
                        });
                    }

                    if (config.overlapClass) {
                        overlayDiv.className += " " + config.overlapClass;
                    }
                }

                overlayDiv.style.position = 'absolute';
                overlayDiv.style.top = `${bottomDiv.offsetTop - topDiv.offsetTop}px`;
                overlayDiv.style.left = `${bottomDiv.offsetLeft - topDiv.offsetLeft}px`;

                if (!overlayDivInitialised) {
                    overlayDivInitialised = true;
                    topDiv.appendChild(overlayDiv);
                }
            }
        });
    }

    run();

    addEventListener("resize", () => run());
}
