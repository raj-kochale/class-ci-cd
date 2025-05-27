declare module 'react-confetti' {
  import { Component } from 'react';

  interface ConfettiProps {
    width?: number;
    height?: number;
    numberOfPieces?: number;
    recycle?: boolean;
    colors?: string[];
    drawShape?: (ctx: CanvasRenderingContext2D) => void;
    gravity?: number;
    initialVelocityX?: number;
    initialVelocityY?: number;
    opacity?: number;
    run?: boolean;
    tweenDuration?: number;
    tweenFunction?: (t: number) => number;
    wind?: number;
  }

  export default class Confetti extends Component<ConfettiProps> {}
} 