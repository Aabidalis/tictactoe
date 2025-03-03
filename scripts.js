let boxes =document.querySelectorAll(".box")
let reset =document.querySelector("#reset")
let newgame=document.querySelector("#newgame")
let wincontainer= document.querySelector(".win-container");
let msg=document.querySelector("#win");

let turnO =true;   //player x or player o


const winpattern=[ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];


const resetgame=()=>{
    turnO=true;
    enableBoxes();
    wincontainer.classList.add("hide")


}




boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if (turnO){ //player o ki turn 
            box.innerText="O";
            turnO=false;
        }
        else{ // kya player x ki turn hai 
            box.innerText="X"; 
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});


const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}




const showWinner=(winner)=>{
    msg.innerText=`Congratulation , winner is ${winner}`
    wincontainer.classList.remove("hide");
    disableBoxes();

}



const checkwinner =()=>{
    for (let pattern of winpattern){
           let pos1val=boxes[pattern[0]].innerText;
           let pos2val=boxes[pattern[1]].innerText;
           let pos3val=boxes[pattern[2]].innerText;

           if(pos1val !=""&& pos2val!="" && pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
           }
    }
}

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);

 const footer = document.getElementById("footer");

footer.addEventListener("mouseenter", () => {
    footer.style.backgroundColor = "#444"; // Darker shade on hover
});

footer.addEventListener("mouseleave", () => {
    footer.style.backgroundColor = "#222"; // Reset to default
});
