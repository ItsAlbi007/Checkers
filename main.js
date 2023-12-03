
const blueChecker = document.querySelectorAll('.blueChecker')
const redChecker = document.querySelectorAll('.redChecker')
const board = document.querySelectorAll('.box')
let diagonalOne, diagonalTwo, firstChecker, firstSquare, secondChecker, secondSquare
let firstClick = true
// console.log('this is the board', board )
// lets move the peices!!

// blue checker -9 square c2r1 move to c3r0 || c3r2 

// Restlastcolorfunction resets the background color of diagonally adjacent squares for a given color either "RED" or "BLUE"
function resetLastColor(color){
  if(checker) {
    const clickedEL = document.querySelector(`#${lastCheckerClick}`)
    const col = parseInt(clickedEL.id[1])
    const row = parseInt(clickedEL.id[3])



  if (color === "red"){
    diagonalOne = document.querySelector(`#c${col - 1}r${row + 1}`)
    diagonalTwo = document.querySelector(`#c${col - 1}r${row - 1}`)
  } else if (color === "blue") {
    diagonalOne = document.querySelector(`#c${col + 1}r${row + 1}`)
    diagonalTwo = document.querySelector(`#c${col + 1}r${row - 1}`)
  }
    if (diagonalOne) {
      diagonalOne.style.backgroundColor = ""
      diagonalOne.removeEventListener("click",function handler(){moveChecker(diagonalOne,checker)})
    }
    
    if (diagonalTwo){
      diagonalTwo.removeEventListener("click",function handler(){moveChecker(diagonalTwo,checker)})
      diagonalTwo.style.backgroundColor = ""
    }
  }
}


// the extension ? is (...) ? "pass" : "fail"
// also its a shorten  "if else" statement to one line of code
function moveChecker(targetSquare) {
  console.dir(targetSquare)
  console.log(checker)
  targetSquare.appendChild(checker)
  resetLastColor(checker.classList.contains("red") ? "red" : "blue")
  targetSquare.innerHTML
  console.log(moveChecker)
  console.dir(targetSquare)
}

//Event listener intialization is to set up event listner on each square and then calls funciton to inilize the event listeners.
function initiate() {
  // console.log(board)
  board.forEach((box) => {
      box.addEventListener('click', (event)=>{
          handleClick(event);
        console.log(initiate)
      });
  })
  // console.log(redChecker)
  // redChecker.forEach((checker) => {
  //   checker.addEventListener('click', (event) => {
  //     handleClick(event)
  //     console.log(redChecker)
  //   })
  // })
  // console.log(blueChecker)
  // blueChecker.forEach((checker) => {
  //   checker.addEventListener('click', (event) => {
  //     handleClick(event)
  //     console.log(blueChecker)
  //   })
  // })
}
initiate()

// the function declaration is a function names first click that takes event in parameter this function worsk when a square is clicked
function handleClick(event){
  // board.forEach((box) => {
  // box.removeEventListener("click",function handler(){moveChecker(diagonalTwo,checker)})
  // })
  resetLastColor("red")
  resetLastColor("blue")
  // console.log(event)
  // resetLastColor(event)
  // let checker and let square declares caraivle to sore refereces to the clicked checker and its parent square

  function handleVariable (e){
    
  }
  
  // this is using checker and square too click checker and its parent square and assinging them to the checker adn square variables and it updates the lastcheckerclick variable with the id of last clicked checker
  const firstChild = event.target.children
  const id = firstChild.id
  if (firstChild[0]){
    checker = firstChild[0]
    console.log(checker)
    square = checker.parentElement
    lastCheckerClick = checker.parentElement.id
  } else {
    if (event.target.classList.contains("checker")){
    checker = event.target;
    console.log(checker)
    square = checker.parentElement;
    lastCheckerClick = checker.parentElement.id
    }
  }


    // console.log(lastCheckerClick)
    if (checker.classList.contains("red")){
      // console.log(checker)

      // this is focusing on the red checker it retrives the coulmn and row of the clicekd square selects the diagonall squares diagonalone and two and checks if they are empty and if they are empty it highlights them yellow
      const col = parseInt(square.id[1])
      const row = parseInt(square.id[3])
      const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)
        console.dir(diagonalOne)
        console.dir(diagonalTwo)
      if (diagonalOne && diagonalOne.innerHTML === ""){
        diagonalOne.style.backgroundColor = "yellow"
        diagonalOne.addEventListener("click",function handler(){moveChecker(diagonalOne,checker)})
      }

      if (diagonalTwo && diagonalTwo.innerHTML === "") {
        diagonalTwo.style.backgroundColor = "yellow"
        diagonalTwo.addEventListener("click",function handler(){moveChecker(diagonalTwo,checker)})
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
