let cells = document.querySelectorAll(".row > div")
let player1Turn = true

console.log(cells[0])

for (cell of cells){
    cell.addEventListener('click', cellClicked)
}

function cellClicked(){
    if (player1Turn){
        event.target.textContent = 'X'
    } else{
        event.target.textContent = 'O'
    }
    checkForWinner()
    player1Turn=!player1Turn
}

function checkForWinner(){
    //condition for winner
    if (){
        
    }
    //condition for draw
}