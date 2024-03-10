let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

const playGame = (choiceid) => {
    console.log("User choice =", choiceid);
    const computerchoice = computerChoice();
    console.log("computer choice =", computerchoice);
    const val = document.querySelector("#msg");
    const scorecheck = document.querySelector("#comp-score");
    const usercheck = document.querySelector("#user-score");

    if (computerchoice == choiceid) {
        console.log("draw");
        val.innerHTML = " Draw";
    } else if (choiceid == "rock" && computerchoice == "scissors") {
        console.log("computer won");
        val.innerHTML = " Computer won";
        compScore += 1;
        scorecheck.innerHTML = compScore;
    } else if (choiceid == "rock" && computerchoice == "paper") {
        console.log("Computer won");
        val.innerHTML = " Computer won";
        compScore += 1;
        scorecheck.innerHTML = compScore;
    } else if (choiceid == "paper" && computerchoice == "rock") {
        console.log("You won");
        val.innerHTML = " You won";
        userScore += 1;
        usercheck.innerHTML = userScore;
    } else if (choiceid == "scissors" && computerchoice == "rock") {
        console.log("You won");
        val.innerHTML = " You won";
        userScore += 1;
        usercheck.innerHTML = userScore;
    } else if (choiceid == "scissors" && computerchoice == "paper") {
        console.log("You won");
        val.innerHTML = " You won";
        userScore += 1;
        usercheck.innerHTML = userScore;
    } else if (choiceid == "paper" && computerchoice == "scissors") {
        console.log("Computer won");
        val.innerHTML = " Computer won";
        compScore += 1;
        scorecheck.innerHTML = compScore;
    }
};

const computerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        console.log("choice was clicked", choiceid);
        playGame(choiceid);
    });
});

const regame = document.querySelector("#regame1");
const end = document.querySelector("#exit-id");

regame.addEventListener("click", ()=>{
    const regameid = regame.getAttribute("id");
    console.log(regameid);
    window.location.href= "rock.html";

})

end.addEventListener("click",()=>{
    const exit = end.getAttribute("id");
    console.log(exit);
    window.close();
})
