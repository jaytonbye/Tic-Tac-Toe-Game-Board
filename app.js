let cells = document.querySelectorAll(".row > div")
let player1Turn = true


for (cell of cells){
    cell.addEventListener('click', cellClicked)
}

function cellClicked(){
    if ((document.getElementsByClassName('game-status')[0].textContent === 'Player 1 is the winner!')
    ||
    (document.getElementsByClassName('game-status')[0].textContent === 'Player 2 is the winner!')
    ||
    (document.getElementsByClassName('game-status')[0].textContent === 'It\'s a draw!'))
    {
        resetBoard()
    }
    else if (player1Turn){
        event.target.textContent = 'X'
    } else{
        event.target.textContent = 'O'
    }
    checkForWinner()
    player1Turn=!player1Turn
}

function checkForWinner(){
    if ((cells[0].textContent === cells[1].textContent && cells[0].textContent ===  cells[2].textContent && cells[0].textContent === 'X')
    ||
    (cells[3].textContent === cells[4].textContent && cells[3].textContent ===  cells[5].textContent && cells[3].textContent === 'X')
    ||
    (cells[6].textContent === cells[7].textContent && cells[6].textContent ===  cells[8].textContent && cells[6].textContent === 'X')
    ||
    (cells[0].textContent === cells[3].textContent && cells[0].textContent ===  cells[6].textContent && cells[0].textContent === 'X')
    ||
    (cells[1].textContent === cells[4].textContent && cells[1].textContent ===  cells[7].textContent && cells[1].textContent === 'X')
    ||
    (cells[2].textContent === cells[5].textContent && cells[2].textContent ===  cells[8].textContent && cells[2].textContent === 'X')
    ||
    (cells[0].textContent === cells[4].textContent && cells[0].textContent ===  cells[8].textContent && cells[0].textContent === 'X')
    ||
    (cells[2].textContent === cells[4].textContent && cells[2].textContent ===  cells[6].textContent && cells[2].textContent === 'X'))
    {
        document.getElementsByClassName('game-status')[0].textContent= 'Player 1 is the winner!'
    } else if ((cells[0].textContent === cells[1].textContent && cells[0].textContent ===  cells[2].textContent && cells[0].textContent === 'O')
    ||
    (cells[3].textContent === cells[4].textContent && cells[3].textContent ===  cells[5].textContent && cells[3].textContent === 'O')
    ||
    (cells[6].textContent === cells[7].textContent && cells[6].textContent ===  cells[8].textContent && cells[6].textContent === 'O')
    ||
    (cells[0].textContent === cells[3].textContent && cells[0].textContent ===  cells[6].textContent && cells[0].textContent === 'O')
    ||
    (cells[1].textContent === cells[4].textContent && cells[1].textContent ===  cells[7].textContent && cells[1].textContent === 'O')
    ||
    (cells[2].textContent === cells[5].textContent && cells[2].textContent ===  cells[8].textContent && cells[2].textContent === 'O')
    ||
    (cells[0].textContent === cells[4].textContent && cells[0].textContent ===  cells[8].textContent && cells[0].textContent === 'O')
    ||
    (cells[2].textContent === cells[4].textContent && cells[2].textContent ===  cells[6].textContent && cells[2].textContent === 'O'))
    {
        document.getElementsByClassName('game-status')[0].textContent= 'Player 2 is the winner!'
    } else if
        ((cells[0].textContent === 'X' || cells[0].textContent === 'O')
        &&
        (cells[1].textContent === 'X' || cells[1].textContent === 'O')
        &&
        (cells[2].textContent === 'X' || cells[2].textContent === 'O')
        &&
        (cells[3].textContent === 'X' || cells[3].textContent === 'O')
        &&
        (cells[4].textContent === 'X' || cells[4].textContent === 'O')
        &&
        (cells[5].textContent === 'X' || cells[5].textContent === 'O')
        &&
        (cells[6].textContent === 'X' || cells[6].textContent === 'O')
        &&
        (cells[7].textContent === 'X' || cells[7].textContent === 'O')
        &&
        (cells[8].textContent === 'X' || cells[8].textContent === 'O')
        ){
        document.getElementsByClassName('game-status')[0].textContent= 'It\'s a draw!'
    }
}

function resetBoard(){
    for (cell of cells){
        cell.textContent=""
    }
    document.getElementsByClassName('game-status')[0].textContent = ''
}