import { Flower } from '../models/flower';
import { Point } from '../models/point';
import { FlowerCenter } from '../models/flower-center';
import { Petal } from '../models/petal';

export class FlowerRandomizationService {
  private readonly colors = [
    '#cc1f1a',
    '#e3342f',
    '#ef5753',
    '#f9acaa',
    '#fcebea',
    '#de751f',
    '#f6993f',
    '#faad63',
    '#fcd9b6',
    '#fff5eb',
    '#f2d024',
    '#ffed4a',
    '#fff382',
    '#fff9c2',
    '#fcfbeb',
    '#1f9d55',
    '#38c172',
    '#51d88a',
    '#a2f5bf',
    '#e3fcec',
    '#38a89d',
    '#4dc0b5',
    '#64d5ca',
    '#a0f0ed',
    '#e8fffe',
    '#2779bd',
    '#3490dc',
    '#6cb2eb',
    '#bcdefa',
    '#eff8ff',
    '#5661b3',
    '#6574cd',
    '#7886d7',
    '#b2b7ff',
    '#e6e8ff',
    '#794acf',
    '#9561e2',
    '#a779e9',
    '#d6bbfc',
    '#f3ebff',
    '#eb5286',
    '#f66d9b',
    '#fa7ea8',
    '#ffbbca',
    '#ffebef',
  ];

  constructor() {}

  getFlowerAt(point: Point): Flower {
    const flowerCenter = new FlowerCenter(
      point,
      this.randomIntFromInterval(5, 16),
      this.randomColor()
    );
    const numberOfPetals = this.randomIntFromInterval(4, 8);
    const petalAngleSpacing = this.randomIntFromInterval(5, 25);
    const petalAngleSpan = 360 / numberOfPetals - petalAngleSpacing;
    const petal = new Petal(
      point,
      this.randomIntFromInterval(20, 50),
      this.randomIntFromInterval(9, 14) / 10,
      petalAngleSpan,
      this.randomColor()
    );
    return new Flower(flowerCenter, numberOfPetals, petal);
  }

  getFlowerOnCanvas(canvasWidth: number, canvasHeight: number): Flower {
    return this.getFlowerAt(
      new Point(this.randomIntLessThan(canvasWidth), this.randomIntLessThan(canvasHeight))
    );
  }

  private randomIntFromInterval(min: number, max: number): number {
    // min: inclusive; max: exclusive
    return Math.floor(Math.random() * (max - min) + min);
  }

  private randomIntLessThan(n: number): number {
    return this.randomIntFromInterval(0, n);
  }

  private randomColor(): string {
    return this.colors[this.randomIntLessThan(this.colors.length)];
  }
}
