const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setMatrixRotation(element, degrees) {
  const radians = degrees * Math.PI / 180;

  let a = Math.cos(radians);
  let b = Math.sin(radians);
  let c = -b;
  let d = a;

  // round exactly like browser
  a = parseFloat(a.toFixed(6));
  b = parseFloat(b.toFixed(6));
  c = parseFloat(c.toFixed(6));
  d = parseFloat(d.toFixed(6));

  element.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, 0, 0)`;
}

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hour = now.getHours();

  // SECOND HAND (rotate allowed)
  const secondsDegrees = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // MINUTE HAND ❗ NO SECONDS
  const minsDegrees = 6 * mins + 90;
  setMatrixRotation(minuteHand, minsDegrees);

  // HOUR HAND
  const hourDegrees = (30 * hour + mins / 2) % 360 + 90;
  setMatrixRotation(hourHand, hourDegrees);
}

setClock();
setInterval(setClock, 1000);
