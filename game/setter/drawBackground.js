/* global Image */
import bg from '../static/images/background.png';
import {
  SPEED,
} from './setting.js';

let y = 0;

export default function drawBackground() {
  const canvas = document.getElementById('canvas_background');
  const ctx = canvas.getContext('2d');
  const image = new Image(800, 600);
  image.src = bg;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  y += SPEED;
  ctx.drawImage(image, 0, y, 300, 200);
  ctx.drawImage(image, 0, y - canvas.height, 300, 200);

  if (y > canvas.height) y = 0; // reset

  window.requestAnimationFrame(drawBackground);
}
