export interface OverlapConfig {
    container: string;
    topElement: string;
    bottomElement: string;
    overlapStyle?: Partial<CSSStyleDeclaration>;
    overlapClass?: string;
}

export interface OverlapPosition {
    offsetTop: number,
    offsetLeft: number,
    offsetHeight:number,
    offsetWidth: number,
    transform: string
}
