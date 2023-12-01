
const blueChecker = document.querySelectorAll('.blueChecker')
const redChecker = document.querySelectorAll('.redChecker')
const board = document.querySelectorAll('.box')
// console.log('this is the board', board )
// lets move the peices!!

// blue checker -9 square c2r1 move to c3r0 || c3r2 

let lastCheckerClick 



// function resetLastColor (e){
//   console.log(e)
//   if (lastCheckerClick){
//     console.log(lastCheckerClick)
//     const clickedEL = document.querySelector(`#${lastCheckerClick}`)
//     const col = parseInt(clickedEL.id[1])
//     const row = parseInt(clickedEL.id[3])
//     console.log(clickedEL)
//     if (clickedEL.child.classList.contains("red")){
//     const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
//     const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)
//     diagonalOne.style.backgroundColor = ""
//     diagonalTwo.style.backgroundColor = ""
//     } else if (clickedEL.child.classList.contains("blue")){
//       const diagonalOne = document.querySelector(`#c${col +1}r${row +1}`)
//       const diagonalTwo = document.querySelector(`#c${col +1}r${row -1}`)
//       diagonalOne.style.backgroundColor = ""
//       diagonalTwo.style.backgroundColor = ""
//     }
//   }
// }

// how would you handle moving the colors
// next step moving checkers!!


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
  resetLastColor(event)
  let checker
  let square
  // const first = event.target.id;
  const firstChild = event.target.children;
  const id = firstChild.id;
  if (firstChild[0]){
    checker = firstChild[0]
    square = checker.parentElement
    lastCheckerClick = checker.parentElement.id
    // console.log(square)
    if (checker.classList.contains("red")){
      // console.log(checker)
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)
      // console.log(diagonalOne)
      // console.log(diagonalTwo)
  } else if (checker.classList.contains("blue")){
      // console.log(checker)
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col +1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col +1}r${row -1}`)
      // console.log(diagonalOne)
      // console.log(diagonalTwo)
    }
  } else {
    
    checker = event.target
    square = checker.parentElement
    lastCheckerClick = checker.parentElement.id
    // console.log(square)
    if (checker.classList.contains("red")){
      // console.log(checker)
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)
      console.log(diagonalOne.innerHTML)
      if (diagonalOne.innerHTML === ""){
        diagonalOne.style.backgroundColor = "yellow"
      }
      if (diagonalTwo.innerHTML === ""){
        diagonalTwo.style.backgroundColor = "yellow"
      }
      // console.log(diagonalOne)
      // console.log(diagonalTwo)
  } else if (checker.classList.contains("blue")){
      // console.log(checker)
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col +1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col +1}r${row -1}`)
      if (diagonalOne.innerHTML === ""){
        diagonalOne.style.backgroundColor = "yellow"
      }
      if (diagonalTwo.innerHTML === ""){
        diagonalTwo.style.backgroundColor = "yellow"
      // console.log(diagonalOne)
      // console.log(diagonalTwo)
      }
    }
  } 
}

// THE BUGG WHERE THERE IS NO  BOX ON LEFT OR RIGHT COMES UP AS AN ERROR!!!
// we completed clicking red now we need to focus on blue and switch diagonas for blue 