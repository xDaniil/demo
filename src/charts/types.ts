export interface Styles {
  initialWidth?: number;
  initialHeight?: number;
  scaleFactor?: number;
  height?: number;
  width?: number;
}

export interface Transition {
  callback: (d: number) => void;
}
