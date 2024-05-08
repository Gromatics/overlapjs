export function overlapJs(selector: string, overlapTopSelector: string, overlapBottomSelector: string, overlapStyle: object) {

    let overlayDiv: HTMLElement|null = null;
    let overlayDivAdded = false;

    const divOverlap = (a: Element, b: Element) => {
        const rect1 = a.getBoundingClientRect();
        const rect2 = b.getBoundingClientRect();
        const isInHoriztonalBounds = rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
        const isInVerticalBounds = rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
        return isInHoriztonalBounds && isInVerticalBounds;
    }

    const run = () => {
        Array.from(document.querySelectorAll(selector) as NodeListOf<HTMLElement>).forEach((element) => {
            const topDiv = element.querySelector(overlapTopSelector) as HTMLElement;
            const bottomDiv = element.querySelector(overlapBottomSelector) as HTMLElement;

            if (topDiv && bottomDiv && divOverlap(topDiv, bottomDiv)) {
                topDiv.style.overflow = 'hidden'
                overlayDiv = overlayDiv ? overlayDiv : bottomDiv.cloneNode(true) as HTMLElement;
                overlayDiv.innerHTML = "";

                Object.keys(overlapStyle).forEach((key: any) => {
                    if(overlayDiv) {
                        overlayDiv.style[key as keyof object] = overlapStyle[key as keyof object];
                    }
                });

                overlayDiv.style.position = 'absolute';
                overlayDiv.style.top = `${bottomDiv.offsetTop - topDiv.offsetTop}px`;
                overlayDiv.style.left = `${bottomDiv.offsetLeft - topDiv.offsetLeft}px`;

                if(!overlayDivAdded) {
                    overlayDivAdded = true;
                    topDiv.appendChild(overlayDiv);
                }
            }
        });
    }

    run();

    addEventListener("resize", () => run());
}
