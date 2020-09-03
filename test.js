var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

function mazeRunner(maze, directions) {
  for(let i = 0; i < directions.length; i++) {
    let moveTime = directions[i]
    let actualPlace = ''
    
    if (actualPlace === '3') {
      return 'Finish'
    }
  }
}

console.log(maze,["N","N","N","N","N","E","E","E","E","E"])
console.log(maze,["N","N","N","W","W"])
console.log(maze,["N","E","E","E","E"])
