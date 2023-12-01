
const blueChecker = document.querySelectorAll('.blueChecker')
const redChecker = document.querySelectorAll('.redChecker')
const board = document.querySelectorAll('.box')
// console.log('this is the board', board )
// lets move the peices!!

// blue checker -9 square c2r1 move to c3r0 || c3r2 



const child = document.getElementById('blue-checker-9');

function initiate() {
  board.forEach((box) => {
      box.addEventListener('click', (event)=>{
          firstClick(event);

      });
  })
}
initiate()

function firstClick(event){
  console.log(event)
  let checker
  const first = event.target.id;
  console.log(first)
  const col = parseInt(first[1])
  const row = parseInt(first[3])
  const firstChild = event.target.children;
  console.log(firstChild)
  const id = firstChild.id;
  if (firstChild[0]){
    checker = firstChild[0]
    const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
    const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)
    console.log(diagonalOne)
    console.log(diagonalTwo)
  }
}
// we completed clicking red now we need to focus on blue and switch diagonas for blue 
// parent.addEventListener('click', (e) => {
//   firstClick(e)
// })













// box.forEach((box) => {
//   box.addEventListener('click',boxClicked)
// })


// const startGame = () => {
//   box.forEach((box) => {
//     console.log(square)
//     square.addEventListner('click', boxClicked)
//   })
// }

function boxClicked(e) {
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

// const startPieces = [
//   [c0r0, c0r1, c0r2, c0r3, c0r4, c0r5, c0r6, c0r7],
//   [c1r0, c1r1, c1r2, c1r3, c1r4, c1r5, c1r6, c1r7],
//   [c2r0, c2r1, c2r2, c2r3, c2r4, c2r5, c2r6, c2r7],
//   [c3r0, c3r1, c3r2, c3r3, c3r4, c3r5, c3r6, c3r7],
//   [c4r0, c4r1, c4r2, c4r3, c4r4, c4r5, c4r6, c4r7],
//   [c5r0, c5r1, c5r2, c5r3, c5r4, c5r5, c5r6, c5r7],
//   [c6r0, c6r1, c6r2, c6r3, c6r4, c6r5, c6r6, c6r7],
//   [c7r0, c7r1, c7r2, c7r3, c7r4, c7r5, c7r6, c7r7],
// ];



// check the diagonals of the saved checker
// if the diagonals are empty the user clicks on them move the checker there
// if there is something in the way check the diagonal on that one!!








// document.addEventListener('squares', function () {
//   let blueChecker = document.querySelectorAll('.blueChecker')
//   let redChecker = document.querySelectorAll('.redChecker')

//   blueChecker.forEach(blueChecker => {
//     blueChecker.setAttribute('draggable', true);
//     blueChecker.addEventListener('dragstart', handleDragStart);
// });

//   redChecker.forEach(redChecker => {
//     redChecker.setAttribute('draggable', true);
//     redChecker.addEventListener('dragstart', handleDragStart);
// });

// function handleDragStart(e){
//   e.dataTransfer.setData('text/plain', e.target.id)
// }

// document.addEventListener('dragover', function (e){
//   e.preventDefault();
// });

// document.addEventListener('drop', function(e){
//   e.preventDefault()
//   const draggedCheckerId = e.dataTransfer.getData('text/plain')
//   const draggedChecker = document.getElementById(draggedCheckerId)
// });
// });


// let winnerIndicator = getComputedStyle(document.square).getPropertyValue('--winnings-blocks')

// save the checker we click  check if the diagonals are empty if yes move user there.


//   startPieces.forEach((startPieces, i) => {
//     squares.firstchild && squares.firstChild.setAttribute('draggable', true)
//     squares.setAttribute('square', i

// })