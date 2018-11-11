import { BloomingFlowers } from './animations/blooming-flowers';
import { Supplementary } from './supplementary/supplementary';
import { InteractiveFlowers } from './animations/interactive-flowers';

function main() {
  // const header = <HTMLCanvasElement>document.getElementById('header');
  // const bloomingFlowers = new BloomingFlowers(header, 20);
  // bloomingFlowers.bloom();

  const canvas = <HTMLCanvasElement>document.getElementById('interactive-flowers');
  const flowers = new InteractiveFlowers(canvas);

  const btn = document.getElementById('clearBtn');
  btn.addEventListener('click', () => {
    flowers.clearCanvas();
  });
}

main();
