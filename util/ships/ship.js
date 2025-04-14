export class Ship {
  constructor(id, modelType, playerEnemyType, coords, bulletSpeed = 5) {
    // info for type of ship player/enemy
    // ship model
    // maybe sprite image to use *based on ship model
    // unique id
    // coords
    // power/hp *based on ship model

      this.id = id;
      this.modelType = modelType;
      this.playerEnemyType = playerEnemyType;
      this.coords = coords;
      this.bulletSpeed = bulletSpeed;
    }

  drawShip(globalTime) {
  // Update position based on held keys (WASD)
  if (keysDown['a']) offsetX = Math.max((offsetX -= this.bulletSpeed * 0.5), -((canvasElement.width / 2) - radius));
  if (keysDown['d']) offsetX = Math.min((offsetX += this.bulletSpeed * 0.5), ((canvasElement.width / 2) - radius));

  // Clear canvas and set up for redraw
  ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  
  // Save context, apply translation and rotation, then draw spinning star
  ctx.save();
  ctx.translate((canvasElement.width / 2) + offsetX, (canvasElement.height - radius));
  const speed = parseFloat(speedSlider.value);
  numDivs = Number(numPointsSlider.value);
  ctx.rotate(globalTime * speed);
  
  // Draw a shape (spinning pentagon)
  ctx.beginPath();
  const pi_scale = 2 / numDivs;
  for (let i = 0; i < numDivs; i++) {
    ctx.lineTo(Math.cos(i * pi_scale * Math.PI) * 100,
               Math.sin(i * pi_scale * Math.PI) * 100);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // Update and draw bullets
  for (let i = 0; i < bullets.length; i++) {
    let b = bullets[i];
    b.x += b.vx;
    b.y += b.vy;
    ctx.beginPath();
    ctx.arc(b.x, b.y, 3, 0, 2 * Math.PI);
    ctx.fill();
  }

  
  // Request next frame
  // requestAnimationFrame(draw);
  }

  //getSpriteImage() {} **external helper func
}