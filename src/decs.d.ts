export interface OverlapConfig {
    container: string;
    topElement: string;
    bottomElement: string;
    overlapStyle?: object;
    overlapClass?: string;
}

export interface OverlapPosition {
    offsetTop: number,
    offsetLeft: number,
    offsetHeight:number,
    offsetWidth: number,
    transform: string
}
