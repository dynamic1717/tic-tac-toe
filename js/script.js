const resetBtn = document.querySelector('#reset')
const tdArr = document.querySelectorAll('td')
const descr = document.querySelector('.descr')
const table = document.querySelector('.table')
let counter = 0
const t = new Array(9)


function addCross(cell) {
    cell.classList.add('cross')
    cell.getElementsByTagName('img')[0].src = 'img/cross.png'
    t[cell.getAttribute('id')] = 'cross'
}

function addRound(cell) {
    cell.classList.add('round')
    cell.getElementsByTagName('img')[0].src = 'img/round.png'
    t[cell.getAttribute('id')] = 'round'
}

function makeGuess(cell) {
    let move
    if (!cell.classList.contains('cross') && !cell.classList.contains('round')) {
        if (counter % 2) {
            addRound(cell)
            descr.innerHTML = 'Ход <span>крестиков</span>'
            move = descr.getElementsByTagName('span')[0]
            move.style.color = 'red'
        } else {
            addCross(cell)
            descr.innerHTML = 'Ход <span>ноликов</span>'
            move = descr.getElementsByTagName('span')[0]
            move.style.color = 'blue'
        }
        counter++
    }
}

function checkWin() {
    // Cross
    if (t[0] === 'cross' && t[1] === 'cross' && t[2] === 'cross') return 'cross'
    if (t[3] === 'cross' && t[4] === 'cross' && t[5] === 'cross') return 'cross'
    if (t[6] === 'cross' && t[7] === 'cross' && t[8] === 'cross') return 'cross'
    if (t[0] === 'cross' && t[3] === 'cross' && t[6] === 'cross') return 'cross'
    if (t[1] === 'cross' && t[4] === 'cross' && t[7] === 'cross') return 'cross'
    if (t[2] === 'cross' && t[5] === 'cross' && t[8] === 'cross') return 'cross'
    if (t[0] === 'cross' && t[4] === 'cross' && t[8] === 'cross') return 'cross'
    if (t[2] === 'cross' && t[4] === 'cross' && t[6] === 'cross') return 'cross'
    
    // Rounds
    if (t[0] === 'round' && t[1] === 'round' && t[2] === 'round') return 'round'
    if (t[3] === 'round' && t[4] === 'round' && t[5] === 'round') return 'round'
    if (t[6] === 'round' && t[7] === 'round' && t[8] === 'round') return 'round'
    if (t[0] === 'round' && t[3] === 'round' && t[6] === 'round') return 'round'
    if (t[1] === 'round' && t[4] === 'round' && t[7] === 'round') return 'round'
    if (t[2] === 'round' && t[5] === 'round' && t[8] === 'round') return 'round'
    if (t[0] === 'round' && t[4] === 'round' && t[8] === 'round') return 'round'
    if (t[2] === 'round' && t[4] === 'round' && t[6] === 'round') return 'round'

    // Tie
    if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return descr.innerHTML = 'НИЧЬЯ!'
}

function reset() {
    location.reload()
}


tdArr.forEach(item => item.addEventListener('click', () => {
    makeGuess(item)
    if (checkWin() === 'cross') {
        descr.innerHTML = 'ПОБЕДИЛИ КРЕСТИКИ!'
        table.classList.add('table_none')
    } else if (checkWin() === 'round') {
        descr.innerHTML = 'ПОБЕДИЛИ НОЛИКИ!'
        table.classList.add('table_none')
    }  
}))

resetBtn.addEventListener('click', () => reset())