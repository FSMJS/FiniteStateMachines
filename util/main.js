// Get canvas and slider elements
const canvasElement = document.getElementById('canvas');
const ctx = canvasElement.getContext('2d');
const speedSlider = document.getElementById('speedSlider');
const numPointsSlider = document.getElementById('numPointsSlider');
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;
const radius = 100; // same radius used for star

// Movement variables
let offsetX = 0, offsetY = 0;
// const bulletSpeed = 5; // Speed at which bullets travel
let numDivs = Number(numPointsSlider.value);

// Array to hold fired bullets
const bullets = [];

// Object to track keys being held down (WASD)
const keysDown = {};

// Update key state on keydown/up events
document.addEventListener('keydown', (e) => {
  // Fire bullets on spacebar press (one shot per keydown)
  if (e.code === "Space") {
    fireBullets(numDivs);
  }
  keysDown[e.key.toLowerCase()] = true;
});
// if shipType == 'player'
document.addEventListener('keyup', (e) => {
  keysDown[e.key.toLowerCase()] = false;
});

let time = 0;
function fireBullets(numPoints) {
  // Get the current center of the rotated pentagon
  const centerX = (canvasElement.width / 2) + offsetX;
  const centerY = canvasElement.height - radius;
  const currentRotation = time * parseFloat(speedSlider.value);
  for (let i = 0; i < numPoints; i++) {
    let angle = currentRotation + i * (2 * Math.PI / numPoints);
    let bulletX = centerX + Math.cos(angle) * radius;
    let bulletY = centerY + Math.sin(angle) * radius;
    let vx = Math.cos(angle) * bulletSpeed;
    let vy = Math.sin(angle) * bulletSpeed;
    bullets.push({ x: bulletX, y: bulletY, vx: vx, vy: vy });
  }
}

function draw() {
  // time++;

  // for ship in shipList {
  //  ship.drawShip(time);
  // }

  // // Update position based on held keys (WASD)
  // if (keysDown['a']) offsetX = Math.max((offsetX -= this.bulletSpeed * 0.5), -((canvasElement.width / 2) - radius));
  // if (keysDown['d']) offsetX = Math.min((offsetX += this.bulletSpeed * 0.5), ((canvasElement.width / 2) - radius));

  // // Clear canvas and set up for redraw
  // ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  
  // // Save context, apply translation and rotation, then draw spinning star
  // ctx.save();
  // ctx.translate((canvasElement.width / 2) + offsetX, (canvasElement.height - radius));
  // const speed = parseFloat(speedSlider.value);
  // numDivs = Number(numPointsSlider.value);
  // ctx.rotate(time * speed);
  
  // // Draw a shape (spinning pentagon)
  // ctx.beginPath();
  // const pi_scale = 2 / numDivs;
  // for (let i = 0; i < numDivs; i++) {
  //   ctx.lineTo(Math.cos(i * pi_scale * Math.PI) * 100,
  //              Math.sin(i * pi_scale * Math.PI) * 100);
  // }
  // ctx.closePath();
  // ctx.stroke();
  // ctx.restore();

  // // Update and draw bullets
  // for (let i = 0; i < bullets.length; i++) {
  //   let b = bullets[i];
  //   b.x += b.vx;
  //   b.y += b.vy;
  //   ctx.beginPath();
  //   ctx.arc(b.x, b.y, 3, 0, 2 * Math.PI);
  //   ctx.fill();
  // }

  // ctx.fillStyle = 'rgb(227, 227, 227)';
  // ctx.strokeStyle = 'rgb(227, 227, 227)';
  // // Request next frame
  ctx.fillStyle = 'rgb(227, 227, 227)';
  ctx.strokeStyle = 'rgb(227, 227, 227)';
  requestAnimationFrame(draw);
}

// -- notes --
// arrayList [0,1,2,3,4]
// forEach -> list + player(s)
// finally: requestAnimationFrame(draw);
draw();