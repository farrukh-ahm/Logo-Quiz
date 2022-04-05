/// -----------------Create Array and Object for question and options ------------------

let optionList = {"KFC": ["McDonalds", "KFC", "Taco-Bell", "Chipotle"],
                  "Gatorade": ["GFuel", "Lucozade", "Gatorade", "Electrolit"],
                  "Pizza-Hut": ["Pizza-Hut", "Domino's", "Papa-John's", "California-Pizza"],
                  "Costa-Coffee": ["Starbucks", "Lavazza", "Butlers", "Costa-Coffee"],
                  "Monster-Energy": ["Red-Bull", "Monster-Energy", "Lucozade", "Advance.GG"],
                  "Acura": ["Aston-Martin", "Acura", "Rolls-Royce", "Alpina"],
                  "Cadillac": ["Cadillac", "Volvo", "Mercedes", "Bugatti"],
                  "Corvette": ["Alfa-Romeo", "Ford", "Corvette", "Citroen"],
                  "Citroen": ["Citroen", "Toyota", "Subaru", "Infiniti"],
                  "Infiniti": ["Maserati", "Lincoln", "Infiniti", "Porche"],
                  "Jordan": ["Nike", "Jordan", "Champion", "Under-Armour"],
                  "Armani": ["Gucci", "Armani", "Luis-Vuitton", "Parada"],
                  "Chanel": ["Zara", "Luis-Vuitton", "Chanel", "Gucci"],
                  "DC-Shoes": ["Dolce&Gabbana", "Canvas", "Gucci", "DC-Shoes"],
                  "Fruit-Of-The-Loom": ["Fruit-Of-The-Loom", "Jockey", "Cherry", "Bodycare"],
                  "Airtel": ["Reliance", "Airtel", "Vodafone", "AT&T"],
                  "AMD": ["AMD", "nVIDIA", "Intel", "Squarespace"],
                  "Apple": ["Microsoft", "Nokia", "Apple", "Motorola"],
                  "Huawei": ["Akai", "Sony", "Xiaomi", "Huawei"],
                  "Motorola": ["Motorola", "Nokia", "Samsung", "Ericsson"],
                  "Accenture": ["Arrow-Global", "Accenture", "Deloitte", "EY"],
                  "Amnesty-International": ["Red-Cross", "Concern", "Amnesty-International", "Greenpeace"],
                  "WWF": ["Pandas", "PETA", "WWF", "Wildlife-Protection"],
                  "Unilever": ["Union", "Unilever", "United-Nations", "UFOCOM"],
                  "United-Nations": ["NATO", "Peace-Keepers", "United-Nations", "WHO"],
                  "Fiorentina": ["Atletico-Madrid", "AC-Milan", "Fiorentina", "FC-Dallas"],
                  "Borussia-Dortmund": ["Bayern-Munich", "BSC-YoungBoys", "Borussia-Dortmund", "SL-Benfica"],
                  "Inter-Milan": ["AC-Milan", "Inter-Milan", "Atlanta-BC", "Genoa-CFC"],
                  "FC-Barcelona": ["Real-Madrid", "Sevilla-FC", "FC-Barcelona", "Arsenal"],
                  "AS-Roma": ["WolfsburgFC", "AS-Roma", "Lazio", "Napoli"],
};

let aiChoice = ["KFC", "Gatorade", "Pizza-Hut", "Monster-Energy", "Costa-Coffee",
                "Acura", "Cadillac", "Corvette", "Citroen", "Infiniti",
                "Jordan", "Armani", "Chanel", "DC-Shoes", "Fruit-Of-The-Loom",
                "Airtel", "AMD", "Apple", "Huawei", "Motorola",
                "Accenture", "Amnesty-International", "WWF", "Unilever", "United-Nations",
                "Fiorentina", "Borussia-Dortmund", "Inter-Milan", "FC-Barcelona", "AS-Roma"
];

/// ----------------- CALLING THE ELEMENTS ---------------------

let logoSelector;
let questionNumber = 1;
let mode;
let buttons = document.getElementsByTagName("button");
for (let button of buttons){
    button.addEventListener("click", function(){
        if (this.getAttribute("data-button") === "start"){
            mode = parseInt(this.getAttribute("data-mode"));
            displayQuestion(mode);
            }
        else if (this.getAttribute("data-button") === "reset"){
            resetGame();
        }
        else if (this.getAttribute("data-button") === "submit"){
            displayResult(mode);
        }
        else {alert ("Break");}
    });
};

/// ----------------------- Start/display the question ------------------

function displayQuestion(mode){
    let resultMessage = document.getElementById("result-message");               // Calling div containing the result message.
    let displayElements = document.getElementsByClassName("display-property");   // Calling options and submit button elements.
    for (let display of displayElements){
        display.style.display = "initial";                                       // Displaying the options area by changing "none" property
    }
    let radios = document.getElementsByTagName("input");                         // Unchecking the radio buttons before displaying the options
    for (let radio of radios){
        if (radio.checked){
            radio.checked = false;
        }
    }
    if (questionNumber <= mode){
        resultMessage.textContent = "";
    let randomNumber = Math.floor(Math.random() * 30);
    logoSelector = aiChoice[randomNumber];
    let options = optionList[logoSelector];
    let imageSelector = document.getElementById("logo");
    let labels = document.getElementsByTagName("label");
    imageSelector.src = `./assets/images/${aiChoice[randomNumber]}.png`;
    imageSelector.style.height = "80%";
    let i = 0;
    for (let label of labels){
        label.textContent = options[i];
        i++;
    }}
    else{
        let correctScore = document.getElementById("correct-answer").textContent;
        resultMessage.textContent = `FINISH! Score: ${correctScore}/${mode}`;
        setTimeout(() => { resetGame(); }, 1500);
};
    questionNumber++;
}

/// ------------------------ Display Result -----------------

function displayResult(mode) {
    let resultMessage = document.getElementById("result-message");
    let userAnswer = checkAnswer();
    let selectedQuestion = logoSelector;
    if (userAnswer === selectedQuestion){
        resultMessage.innerText = "CORRECT!";
        setTimeout(() => { displayQuestion(mode); }, 1000);
        correctScore();
    }
    else {
        resultMessage.innerText = "SORRY!";
        setTimeout(() => { displayQuestion(mode); }, 1000);
        incorrectScore();
}
}

/// ------------------------ Game Reset/Restart ------------------

function resetGame() {
    let imageSelector = document.getElementById("logo");
    let displayElements = document.getElementsByClassName("display-property");
    let resultMessage = document.getElementById("result-message");
    let correctScore = document.getElementById("correct-answer");
    let incorrectScore = document.getElementById("incorrect-answer");
    imageSelector.src = `./assets/images/Question.png`;
    imageSelector.style.height = "100%";
    resultMessage.textContent = "";
    correctScore.innerText = "0";
    incorrectScore.innerText = "0";
    for (let display of displayElements){
        display.style.display = "none";
    }
    questionNumber = 1;
}

/// ------------------------ Check Answer ------------------

function checkAnswer() {
    let radios = document.getElementsByTagName("input");
    for (let radio of radios){
        if (radio.checked){
            let checkLabel = document.querySelector(`label[for=${radio.id}]`).textContent;
            return (checkLabel);
        }
    }
}

/// ---------------------------- Increment Correct Score -----------------

function correctScore() {
    let rightAnswer = document.getElementById("correct-answer");
    let score= parseInt(rightAnswer.innerText);
    rightAnswer.innerText = score+1;
}

/// ----------------------------- Increment Incorrect Score --------------------

function incorrectScore() {
    let wrongAnswer = document.getElementById("incorrect-answer");
    let wScore= parseInt(wrongAnswer.innerText);
    wrongAnswer.innerText = wScore+1;
}