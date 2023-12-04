
const blueChecker = document.querySelectorAll('.blueChecker')
const redChecker = document.querySelectorAll('.redChecker')
const board = document.querySelectorAll('.box')
let playBtn = document.getElementById('playBtn')
let diagonalOne, diagonalTwo, firstChecker, firstSquare, secondChecker, secondSquare
let firstClick = true
// console.log('this is the board', board )
// lets move the peices!!

// blue checker -9 square c2r1 move to c3r0 || c3r2 

// Restlastcolorfunction resets the background color of diagonally adjacent squares for a given color either "RED" or "BLUE"

playBtn.addEventListener('click', function resetGame(){
  blueChecker.forEach(checker => checker.remove())
  redChecker.forEach(checker => checker.remove())

  resetLastColor("red")
  resetLastColor("blue")

  firstChecker = null
  firstSquare = null
  secondChecker = null
  secondSquare = null
  firstClick = true
})

function resetLastColor(color){
  if(firstChecker) {
    const col = parseInt(firstSquare.id[1])
    const row = parseInt(firstSquare.id[3])
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
  console.dir(targetSquare.innerHTML)
  if (targetSquare.innerHTML === ""){
    targetSquare.appendChild(firstChecker)
    resetLastColor(firstChecker.classList.contains("red") ? "red" : "blue")
    firstSquare.innerHTML = ""
    firstSquare = undefined
    firstChecker = undefined
  }
}


//Event listener intialization is to set up event listner on each square and then calls funciton to inilize the event listeners.
function initiate() {
  // console.log(board)
  board.forEach((box) => {
      box.addEventListener('click', (event)=>{
          handleClick(event);
        // console.log(initiate)
      });
  })
}
initiate()

const changeVariables = (checker,square) => {
  if(firstClick){
    firstChecker = checker
    firstSquare = square
  } else {
    secondChecker = checker
    secondSquare = square
  }
}
const resetVariables = () => {
  if(secondChecker){
    firstChecker = undefined
    firstSquare = undefined
    secondChecker = undefined
    secondSquare = undefined
  }
}

// the function declaration is a function names first click that takes event in parameter this function worsk when a square is clicked
function handleClick(event){
  resetLastColor("red")
  resetLastColor("blue")
  
  // this is using checker and square too click checker and its parent square and assinging them to the checker adn square variables and it updates the lastcheckerclick variable with the id of last clicked checker
  const firstChild = event.target.children
  if (firstChild[0]){
    changeVariables(firstChild[0],event.target)
    lastCheckerClick = firstChild[0].parentElement.id
  } else {
    if (event.target.classList.contains("checker")){
      changeVariables(event.target,event.target.parentElement)
      lastCheckerClick = event.target.parentElement.id
    }
  }
    if(firstChecker && firstChecker?.classList?.contains("red")){
      console.log('red true')
      // this is focusing on the red checker it retrives the coulmn and row of the clicekd square selects the diagonall squares diagonalone and two and checks if they are empty and if they are empty it highlights them yellow
      const col = parseInt(firstSquare.id[1])
      const row = parseInt(firstSquare.id[3])
      const diagonalOne = document.querySelector(`#c${col -1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col -1}r${row -1}`)
        console.dir(diagonalOne)
        console.dir(diagonalTwo)
      if (diagonalOne && diagonalOne.innerHTML === ""){
        diagonalOne.style.backgroundColor = "yellow"
        diagonalOne.addEventListener("click",function handler(){moveChecker(diagonalOne)})
      }

      if (diagonalTwo && diagonalTwo.innerHTML === "") {
        diagonalTwo.style.backgroundColor = "yellow"
        diagonalTwo.addEventListener("click",function handler(){moveChecker(diagonalTwo)})
      }

  } else if (firstChecker && firstChecker.classList.contains("blue")){
      const col = parseInt(firstSquare.id[1])
      const row = parseInt(firstSquare.id[3])
      const diagonalOne = document.querySelector(`#c${col +1}r${row +1}`)
      const diagonalTwo = document.querySelector(`#c${col +1}r${row -1}`)
  
      if (diagonalOne && diagonalOne.innerHTML === "") {
        diagonalOne.style.backgroundColor = "yellow"
        diagonalOne.addEventListener("click", () => moveChecker(diagonalOne))
      }

      if (diagonalTwo && diagonalTwo.innerHTML === "") {
      diagonalTwo.style.backgroundColor = "yellow"
      diagonalTwo.addEventListener("click", () => moveChecker(diagonalTwo))
    }
  }
  firstClick = !firstClick
} 

// next step moving checkers!!

// THE BUGG WHERE THERE IS NO  BOX ON LEFT OR RIGHT COMES UP AS AN ERROR!!!
// we completed clicking red now we need to focus on blue and switch diagonas for blue 
