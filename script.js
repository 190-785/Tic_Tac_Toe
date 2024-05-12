
let boxes= document.querySelectorAll(".box");
console.log(boxes)
let re= document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO= true;
let winPat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let turnCount=0;
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        box.innerText="X";
        if(turnO){
            box.innerText="O";
            box.style.color="Pink";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="lightblue";
            turnO=true;
        }
        turnCount++;
        if(turnCount==9){
            msg.innerText="It's a Tie!";
            msgContainer.classList.remove("hide");
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
        
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");

}
 checkWinner=()=>{
    for( let pattern of winPat){
         let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
         let pos3val=boxes[pattern[2]].innerText;
         if( pos1val!="" && pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner is ",pos1val);
                disableBoxes();
                showWinner(pos1val);
    }
 }
}
 }    
re.addEventListener("click",()=>{
    console.log("Game has been Reset")
    resetGame();
});

newGameBtn.addEventListener("click",()=>{
    console.log("New Game has been started");
       resetGame();
});