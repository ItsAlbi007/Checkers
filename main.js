
const blueChecker = document.querySelectorAll('.blueChecker')
const redChecker = document.querySelectorAll('.redChecker')
const board = document.querySelectorAll('.box')
// console.log('this is the board', board )
// lets move the peices!!

// blue checker -9 square c2r1 move to c3r0 || c3r2 

let lastCheckerClick 

// Restlastcolorfunction resets the background color of diagonally adjacent squares for a given color either "RED" or "BLUE"
function resetLastColor(color){
  if(lastCheckerClick) {
    const clickedEL = document.querySelector(`#${lastCheckerClick}`)
    const col = parseInt(clickedEL.id[1])
    const row = parseInt(clickedEL.id[3])

let diagonalOne, diagonalTwo

  if (color === "red"){
    diagonalOne = document.querySelector(`#c${col - 1}r${row + 1}`)
    diagonalTwo = document.querySelector(`#c${col - 1}r${row - 1}`)
  } else if (color === "blue") {
    diagonalOne = document.querySelector(`#c${col + 1}r${row + 1}`)
    diagonalTwo = document.querySelector(`#c${col + 1}r${row - 1}`)
  }
    if (diagonalOne) {
      diagonalOne.style.backgroundColor = ""
    }
    
    if (diagonalTwo){
      diagonalTwo.style.backgroundColor = ""
    }
  }
}



function moveChecker(targetSquare, checker) {
  targetSquare.appendChild(checker)
  resetLastColor(checker.classList.contains("red") ? "red" : "blue")
  console.log(moveChecker)
}

//Event listener intialization is to set up event listner on each square and then calls funciton to inilize the event listeners.
function initiate() {
  board.forEach((box) => {
      box.addEventListener('click', (event)=>{
          firstClick(event);

      });
  })

  redChecker.forEach((checker) => {
    checker.addEventListener('click', (event) => {
      firstClick(event)
    })
  })

  blueChecker.forEach((checker) => {
    checker.addEventListener('click', (event) => {
      firstClick(event)
    })
  })
}
initiate()

// the function declaration is a function names first click that takes event in parameter this function worsk when a square is clicked
function firstClick(event){
  resetLastColor("red")
  resetLastColor("blue")
  // console.log(event)
  // resetLastColor(event)
  // let checker and let square declares caraivle to sore refereces to the clicked checker and its parent square
  let checker
  let square
  
  // this is using checker and square too click checker and its parent square and assinging them to the checker adn square variables and it updates the lastcheckerclick variable with the id of last clicked checker
  const firstChild = event.target.children
  const id = firstChild.id
  if (firstChild[0]){
    checker = firstChild[0]
    square = checker.parentElement
    lastCheckerClick = checker.parentElement.id
  } else {
    checker = event.target;
    square = checker.parentElement;
    lastCheckerClick = checker.parentElement.id
  }


    // console.log(lastCheckerClick)
    if (checker.classList.contains("red")){
      // console.log(checker)

      // this is focusing on the red checker it retrives the coulmn and row of the clicekd square selects the diagonall squares diagonalone and two and checks if they are empty and if they are empty it highlights them yellow
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)

      if (diagonalOne && diagonalOne.innerHTML === ""){
        diagonalOne.style.backgroundColor = "yellow"
        diagonalOne.addEventListener("click", () => moveChecker(diagonalOne, checker))
      }

      if (diagonalTwo && diagonalTwo.innerHTML === "") {
        diagonalTwo.style.backgroundColor = "yellow"
        diagonalTwo.addEventListener("click", () => moveChecker(diagonalTwo, checker))
      }
      // console.log(diagonalOne)
      // console.log(diagonalTwo)
  } else if (checker.classList.contains("blue")){
      // console.log(checker)

      // and this is the blue checker it does the exact same thing as red the only diffrence is the col is +1 +1 and for red is -1 -1 
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col +1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col +1}r${row -1}`)

      if (diagonalOne && diagonalOne.innerHTML === "") {
        diagonalOne.style.backgroundColor = "yellow"
        diagonalOne.addEventListener("click", () => moveChecker(diagonalOne, checker))
      }

      if (diagonalTwo && diagonalTwo.innerHTML === "") {
      diagonalTwo.style.backgroundColor = "yellow"
      diagonalTwo.addEventListener("click", () => moveChecker(diagonalTwo, checker))
    }
  }
} 

// next step moving checkers!!

// THE BUGG WHERE THERE IS NO  BOX ON LEFT OR RIGHT COMES UP AS AN ERROR!!!
// we completed clicking red now we need to focus on blue and switch diagonas for blue 
