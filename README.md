# Maze-Escape
Maze Escape is a game where you're exiting the surf lineup, a magical maze appears and you need to run through the end of a maze to reach the parking lot before time runs out and you are flooded by a tsunami!

# MVP (DOM - CANVAS)
- Game starts with player at beginning of maze
- Advance through maze via arrow keys
- As time passes by, water starts flooding the maze
- When you touch the water, player takes out surfboard and has 5 seconds to escape the flooded area before surfboard breaks and player drowns (game over)
- 3 maps which increase in difficulty

## Data Structure

# main.js
buildSplashScreen () {}
buildGameScreen () {}
buildGameOverScreen () {}
startButton ()
restartButton ()

# game.js
- class Game 
- gameLoop
- checkCollisions
- spawnWater
- spawnMaze
- Event Listener on key down (arrow keys)

# water.js
- water () {this.x; this.y; this.direction; this. - size; this.speed}
- drawWater () {}
- move () {}
- checkCollision ()

# maze.js
maze () {this.x; this.y; this.direction; this.width; this.height}
checkCollision ()

# surfer.js
drawSurfer () {}
surferMazeCollision () {}
surferMovement () {}
surferWaterCollision () {}

## Task
main - buildDom
main - buildSplashScreen
main - addEventListener
main - buildGameScreen
main - buildGameOverScreen

game - startLoop
game - buildCanvas
game - updateCanvas
game - drawCanvas

water - draw
water - move
game - addWater
game - checkWaterCollision

Surfer - draw
Surfer - move
game - addSurfer

Maze - draw
game - checkMazeCollision
game - GameOver
game - addEventListener


# random features that i'm thinking of
- Once you touch water, player starts w surfboard and has 5 seconds to escape the water again to keep going.
- add obstacles that have a range of space and go back and forth, and make the water flood slower so there's more time to solve the maze
- choose gender of surfer: male / female



# questions
- what would be more practical, to draw the 3 different levels on photoshop and then implement it to the game, or draw the maps directly on the canvas?


