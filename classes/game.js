class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "/images/map2_bowser.png";
    this.canvas = {
      height: 600,
      width: 600,
    };
    this.gameAudio = new Audio();
    this.gameAudio.src = "/sounds/gameaudio.mp3"
    this.wastedAudio = new Audio();
    this.wastedAudio.src = "/sounds/wasted_sfx.mp3";
    this.isGameOn = true;
    this.labyrinth = [
      [1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // y = 0 * 80 = 0
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1], // y = 1 * 80 = 80
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 1, 0, 1, 2],
      [0, 0, 1, 0, 1, 0, 1, 0, 1, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
      [0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // y = 9 * 80 = 720
    ];
    this.surfer = new Surfer(this);
    this.thwomp = new Thwomp();
    this.frame = 0;
    this.gameTimer = 0;
   
  }

  

  surferCellCollision = (x, y, width, height, surferX, surferY) => {
    if (
      this.surfer.x < x + width &&
      this.surfer.x + this.surfer.width > x &&
      this.surfer.y < y + height &&
      this.surfer.y + this.surfer.height > y
    ) {
      console.log("COLLISION!");
      this.isGameOn = false;
      canvas.style.display = "none";
      gameOverScreen.style.display = "flex";
      this.gameAudio.pause();
      this.wastedAudio.play();
    
    }
  };

  surferDoorCollision = () => {
    if (this.surfer.surferWinGame()) {
      this.isGameOn = false;
      canvas.style.display = "none";
      gameWinScreen.style.display = "flex";
      this.gameAudio.pause();
    }
  };

  surferMazeCollision = (x, y) => {
    //
    const totalLines = this.labyrinth.length;
    const linesHeight = this.canvas.height / totalLines;

    const totalColumns = this.labyrinth[0].length;
    const columnsWidth = this.canvas.width / totalColumns;
    // go line by line
    this.labyrinth.forEach((line, lineNumber) => {
      line.forEach((cell, columnNumber) => {
        if (cell === 1) {
          this.surferCellCollision(
            columnNumber * columnsWidth,
            lineNumber * linesHeight,
            columnsWidth,
            linesHeight
          );
        }
      });
    });
  };

  drawBackground = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  drawLabyrinth = () => {
    //
    const totalLines = this.labyrinth.length;
    const linesHeight = this.canvas.height / totalLines;

    const totalColumns = this.labyrinth[0].length;
    const columnsWidth = this.canvas.width / totalColumns;
    // go line by line
    this.labyrinth.forEach((line, lineNumber) => {
      line.forEach((cell, columnNumber) => {
        if (cell === 1) {
          ctx.fillStyle = "green";
          ctx.drawImage(
            this.thwomp.image,
            columnNumber * columnsWidth,
            lineNumber * linesHeight,
            columnsWidth,
            linesHeight
          );
        } else if (cell === 2) {
          ctx.fillStyle = "gold";
          ctx.drawImage(
            this.thwomp.image,
            columnNumber * columnsWidth,
            lineNumber * linesHeight,
            columnsWidth,
            linesHeight
          );
        }
      });
    });
  };

  drawEverything = () => {
    this.drawBackground();
    this.drawLabyrinth();
    this.surfer.drawSurfer();
  };

  gameLoop = () => {
    //1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //3. drawing elements
    this.gameAudio.play()
    this.surfer.moveSurfer();
    this.surferMazeCollision();
    this.surferDoorCollision();

    this.drawEverything();

    // timer
    this.frame++;
    if (this.frame % 60 === 0) {
      this.gameTimer++;
    }
    scoreTimer.innerHTML = this.gameTimer;

    //4. requesting animation
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
