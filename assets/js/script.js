// Wait for the DOM to finish before loading the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMcontentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click" function()
        if (this.getAttribute(data-type) === "Submit") {
            alert("You clicked submit!")
        } else {
            let gameType = this.getAttribute("data-type");
            alert("You clicked $gameType");
        }
    };
}

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore {

}

function incrementWrongAnswer {

}

function displayAdditionQuestion {

}

function displaySubtractQuestion {

}

function displayMultiplyQuestion {

}

function displayDivisionQuestion {

}