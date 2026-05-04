let user=0;
let com=0;
const msg=document.querySelector('#msg')
let choices=document.querySelectorAll(".choice");
const userscore=document.querySelector("#user"); 
const compscore=document.querySelector("#comp"); 
const gencompchoice=()=>
{
    const option=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random() * 3);
    return option[randidx];
}
const drawgame=()=>
{
    console.log("game was Draw");
    msg.innerText="Game Draw"
    msg.style.backgroundColor="#081b31";
    
}
const showwinner=(userwin)=>
{
    if(userwin)
    { user++;
        userscore.innerText=user;
     console.log("you win");
     msg.innerText="you win"
     msg.style.backgroundColor="green";
    }
    else
    {   com++; 
        compscore.innerText=com;
         console.log("you lose");
          msg.innerText="you lose";
          msg.style.backgroundColor="red";
    }
}

let playgame=(userchoice)=>
{
   console.log(" user choice is equal to =",userchoice);
   const compchoice= gencompchoice();
   console.log(" computer choice is equal to =",compchoice);

   if(userchoice === compchoice)
   {
       drawgame();
   }
   else
   {
    let userwin=true;
    if(userchoice === "rock")
    {
        userwin=compchoice ==="paper"?false:true;
    }
    else if(userchoice === "paper")
    {
        userwin = compchoice ==="scissor"?false:true;
    }
    else 
    {
         userwin = compchoice ==="rock"? false : true;
    }
    showwinner(userwin);

   }
}
choices.forEach((choice)=>
{   console.log(choices);
    choice.addEventListener("click",()=>
    { 
      const userchoice=choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playgame(userchoice);
    });
});