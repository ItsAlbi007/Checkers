const squares = document.querySelectorAll('.square')
let blueChecker = document.querySelectorAll('.blueChecker')
let redChecker = document.querySelectorAll('.redChecker')


let winner

// let winnerIndicator = getComputedStyle(document.square).getPropertyValue('--winnings-blocks')

// save the checker we click 
// check the diagonals of the saved checker
// if the diagonals are empty the user clicks on them move the checker there
// if there is something in the way check the diagonal on that one!!
let currentPlayer = redChecker

squares.forEach((square) => {
  square.addEventListener('click',squareClicked)
})


const startGame = () => {
  squares.forEach((square) => {
    console.log(square)
    square.addEventListner('click', squareClicked)
  })
}

function squareClicked(e) {
  const id = e.target.id
  // if(!squares[id]){
  //   squares[id] = currentPlayer
  //   e.target.innerText = currentPlayer
  //   if(playerHasWon()!== false){
  //     console.log(currentPlayer, 'is the winner')
  //   }
  // }
}


// let board = [
//   [0, -1, 0, -1, 0, -1, 0, -1],
//   [-1, 0, -1, 0, -1, 0, -1, 0],
//   [0, -1, 0, -1, 0, -1, 0, -1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1, 0],
// ];
