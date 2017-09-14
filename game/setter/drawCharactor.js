/* global Image */
import selfCharactor from '../static/images/motor_straight.png';

export default function drawCharactor() {
  const canvas = document.getElementById('charactor');
  const ctx = canvas.getContext('2d');
  const image = new Image(150, 150);
  image.src = selfCharactor;

  clear();
  ctx.drawImage(image, 0, 0, 300, 150);

  window.requestAnimationFrame(drawCharactor);
}

function clear() {
  const canvas = document.getElementById('charactor');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
