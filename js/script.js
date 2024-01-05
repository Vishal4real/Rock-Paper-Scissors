let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userwin,userchoice,compchoice ) =>{
    if(userwin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerText = `You Win!. Your ${userchoice} Beats Computer's ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerText = `You lost!. Computer's ${compchoice} Beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const gameDraw = () => {
    msg.innerText = "Game Draw. Play Again!"
    msg.style.backgroundColor = "black  ";
}
const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}
const playgame = (userchoice) =>{
    const compchoice = gencompchoice();

    if(userchoice == compchoice){
        gameDraw();
    }else{
        let userwin = true;
        if(userchoice == "rock"){
            userwin = compchoice === "paper" ? false : true
        }else if(userchoice == "paper"){
            userwin = compchoice === "scissors" ? false : true
        }else if(userchoice == "scissors"){
            userwin = compchoice === "rock"? false : true
        }
        showWinner(userwin, userchoice ,compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
        
    })
})
function reseet(){
    userScore = 0;  
    userScorePara.innerHTML = userScore;
    compScore = 0;
    compScorePara.innerHTML = compScore;
    msg.innerText = "Play Your Move!"
    msg.style.backgroundColor = "black";
}
