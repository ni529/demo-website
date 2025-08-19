

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score") ;
const compScorePara = document.querySelector("#comp-score") ;

const genCompChoice =() =>
{
    const options  = ["rock", "paper", "scissors"];
   const randomIdx= Math.floor(Math.random()*3);
   return options[randomIdx];

};

const drawGame = () =>{
     msg.innerText = "Game was Draw. play again.";
     msg.style.backgroundColor = "#081b31;";
};

const showWinner = (userWin, userChoice, compChoice)=>
{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = 'You Win! Your ${userChoice} beats ${compChoice}';
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
         msg.innerText = 'You Lost. ${compChoice} beats Your ${userChoice}';
         msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>
{
const  compChoice = genCompChoice();


if(userChoice === compChoice){
   drawGame();
}else{
    let userWin = true;
    if(userChoice ==="rock"){
        //scissor , paper
        userWin=compChoice ==="paper"? false: true;
    }
    else if(userChoice ==="paper"){
      //rock,scissor
      userWin = compChoice ==="scissor"? false : true;
    }
    else {
      //rock,scissor
      userWin = compChoice ==="rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}
;

choices.forEach((choice) => 
{
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});