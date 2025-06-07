let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");
const computerchoice =() =>{
    const options= ["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
};
const drawgame =() =>{
    console.log("game was draw.");
    msg.innerText="Game was Draw. Play again."
    msg.style.backgroundColor="yellow";
};
const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        user_score.innerText=userscore;
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else {
        computerscore++;
        comp_score.innerText=computerscore;
        console.log("You Lose!");
        msg.innerText="You lose.";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice) =>{
    console.log("user choice=", userchoice);
    //now generate computer choice
    const compchoice=computerchoice();
    console.log("comp choice", compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){//2 choices:paper,scissors
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice=="paper"){
            userwin=compchoice==="scissors"? false:true;
        }
        else {//user==scissor
            userwin=compchoice==="rock"? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
}); 
resetBtn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    user_score.innerText = userscore;
    comp_score.innerText = computerscore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "blueviolet";
});
