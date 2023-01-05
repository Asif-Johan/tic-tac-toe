console.log(`Welcome To Tic tac Toe`);

let music = new Audio("music.wav")
let audioturn = new Audio("click.wav")
let gameover = new Audio("gameover.wav")
// music.play();
let turn =`X`

let isgameover = false

// function to change turn
const changeTurn = ()=>{
    return turn === `X`?`0`:`X`
} 

// function to check for a win 

const checkWin = ()=> {
    let boxtext = document.getElementsByClassName(`boxText`);
let wins= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

wins.forEach(e =>{
if ((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !==``)) {
    document.querySelector(`.info`).innerText = boxtext[e[0]].innerText + ``+` Won`
    isgameover=true
    gameover.play()
    document.querySelector(`.imgBox`).getElementsByTagName(`img`)[0].style.width=`40vw`;
    document.querySelector(`.container`).style.display=`none`;
    document.querySelector(`.welcome`).style.display=`none`;
}

})
}

// music.play()

// game logic 
let boxes= document.getElementsByClassName(`box`);
Array.from(boxes).forEach(element =>{
    let boxText =element.querySelector(`.boxText`);
    element.addEventListener(`click`,()=>{
        if(boxText.innerText === ``){
            boxText.innerText = turn;
            turn=changeTurn();
            audioturn.play();
            checkWin();

            if (!isgameover) {
                document.getElementsByClassName(`info`)[0].innerText = `Turn For `+ turn

            }
        }
    })

})

// press reset to reload

