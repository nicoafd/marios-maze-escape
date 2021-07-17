class Surfer {
  constructor(game) {
    this.x = 70;
    this.y = canvas.height / 2;
    this.width = 40;
    this.height = 40;
    this.image = new Image();
    this.image.src = "./images/pikachu-player.png";
    this.speedX = 0;
    this.speedY = 0;
    this.game = game;
  }

  // drawing of surfer
  drawSurfer = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  moveSurfer = () => {
    this.x += this.speedX;
    this.y += this.speedY;
  };

  stopX = () => {
    this.speedX = 0;
  };
  stopY = () => {
    this.speedY = 0;
  };

  surferMovementRight = () => {
    this.speedX += 1;
  };
  surferMovementLeft = () => {
    this.speedX -= 1;
  };
  surferMovementUp = () => {
    this.speedY -= 1;
  };
  surferMovementDown = () => {
    this.speedY += 1;
  };

  surferWallCollision = () => {
    if (this.x < canvas.width) {
      this.x += 5;
    }
  };

  surferWinGame = () => {
    return this.x + this.width > canvas.width;
  };
}
