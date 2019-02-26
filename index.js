var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");

rock.addEventListener("click", rock_choose);
paper.addEventListener("click", paper_choose);
scissor.addEventListener("click", scissor_choose);

var player_win = 0;
var comp_win = 0;
var total_plays = 0;

function rock_choose(){
    var comp = Math.floor((Math.random()*3)+1);
    switch(comp){
        case 1:
        alert("Computer choose rock - DRAW");
        total_plays += 1;
        break;
        case 2:
        comp_win += 1
        document.getElementById("comp").innerHTML = "Comp: " + comp_win;
        alert("Computer choose paper - YOU LOOSE");
        total_plays += 1;
        break;
        case 3:
        player_win += 1
        document.getElementById("you").innerHTML = "You: " + player_win;
        alert("Computer choose scissor - YOU WIN");
        total_plays += 1;
        break;
    }
    reset(total_plays);
}

function paper_choose(){
    var comp = Math.floor((Math.random()*3)+1);
    switch(comp){
        case 1:
        player_win += 1
        document.getElementById("you").innerHTML = "You: " + player_win;
        alert("Computer choose rock - YOU WIN");
        total_plays += 1;
        break;
        case 2:
        alert("Computer choose paper - DRAW");
        total_plays += 1;
        break;
        case 3:
        comp_win += 1
        document.getElementById("comp").innerHTML = "Comp: " + comp_win;
        alert("Computer choose scissor - YOU LOOSE");
        total_plays += 1;
        break;
    }
    reset(total_plays);
}

function scissor_choose(){
    var comp = Math.floor((Math.random()*3)+1);
    switch(comp){
        case 1:
        comp_win += 1
        document.getElementById("comp").innerHTML = "Comp: " + comp_win;
        alert("Computer choose rock - YOU LOOSE");
        total_plays += 1;
        break;
        case 2:
        player_win += 1
        document.getElementById("you").innerHTML = "You: " + player_win;
        alert("Computer choose paper - YOU WIN");
        total_plays += 1;
        break;
        case 3:
        alert("Computer choose scissor - DRAW");
        total_plays += 1;
        break;
    }
    reset(total_plays);
}

function reset(x){
    if (x == 5){
        if (player_win > comp_win){
            alert("You Win");
        }
        else if (comp_win > player_win){
            alert("You Loose");
        }
        else{
            alert("Draw")
        }
        player_win = 0;
        document.getElementById("you").innerHTML = "You: " + player_win;
        comp_win = 0;
        document.getElementById("comp").innerHTML = "Comp: " + comp_win;
        total_plays = 0;
        alert("Let's play again!")
    }
}