/// -----------------Create Array and Object for question and options

let optionList = {"KFC": ["McDonalds", "KFC", "Taco-Bell", "Chipotle"],
                  "Gatorade": ["GFuel", "Lucozade", "Gatorade", "Electrolit"],
                  "Pizza-Hut": ["Pizza-Hut", "Domino's", "Papa-John's", "California-Pizza"],
                  "Costa-Coffee": ["Starbucks", "Lavazza", "Butlers-Chocolates", "Costa-Coffee"],
                  "Monster-Energy": ["Red-Bull", "Monster-Energy", "Lucozade", "Advance.GG"],
                  "Bentley": ["Aston-Martin", "Bentley", "Rolls-Royce", "Beetle"],
                  "Cadillac": ["Cadillac", "Volvo", "Mercedes", "Bugatti"],
                  "Corvette": ["Alfa-Romeo", "Ford", "Corvette", "Citroen"],
                  "Citroen": ["Citroen", "Toyota", "Subaru", "Infiniti"],
                  "Infiniti": ["Maserati", "Lincoln", "Infiniti", "Porche"],
                  "Jordan": ["Nike", "Jordan", "Champion", "Under-Armour"],
                  "Armani": ["Gucci", "Armani", "Luis-Vuitton", "Parada"],
                  "Chanel": ["Zara", "Luis-Vuitton", "Chanel", "Gucci"],
                  "DC-Shoes": ["Dolce&Gabbana", "Canvas", "Gucci", "DC-Shoes"],
                  "Fruit-Of-The-Loom": ["Fruit-of-The-Loom", "Jockey", "Cherry", "Bodycare"],
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
                  "Atletico-Madrid": ["Atletico-Madrid", "Real-Madrid", "Sevilla-FC", "RCD-Mallorca"],
                  "Borussia-Dortmund": ["Bayern-Munich", "BSC-YoungBoys", "Borussia-Dortmund", "SL-Benfica"],
                  "Inter-Milan": ["AC-Milan", "Inter-Milan", "Atlanta-BC", "Genoa-CFC"],
                  "Real-Madrid": ["Real-Madrid", "Sevilla-FC", "FC-Barcelona", "Arsenal"],
                  "AS-Roma": ["WolfsburgFC", "AS-Roma", "Lazio", "Napoli"],
}

let aiChoice = ["KFC", "Gatorade", "Pizza-Hut", "Monster-Energy", "Costa-Coffee",
                "Bentley", "Cadillac", "Corvette", "Citroen", "Infiniti",
                "Jordan", "Armani", "Chanel", "DC-Shoes", "Fruit-Of-The-Loom",
                "Airtel", "AMD", "Apple", "Huawei", "Motorola",
                "Accenture", "Amnesty-International", "WWF", "Unilever", "United-Nations",
                "Atletico-Madrid", "Borussia-Dortmund", "Inter-Milan", "Real-Madrid", "AS-Roma"
]

/// ----------------- CALLING THE ELEMENTS

let logoSelector;
let questionNumber = 1;
let mode;
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-button") === "start"){
                mode = parseInt(this.getAttribute("data-mode"))
                displayQuestion(mode);
                }
            else if (this.getAttribute("data-button") === "reset"){
                resetGame();
            }
            else if (this.getAttribute("data-button") === "submit"){
                displayResult(mode);
            }
            else {alert ("Break")}
        })
}
})


/// ----------------------- Start/display the question

function displayQuestion(mode){
    let resultMessage = document.getElementById("result-message");               // Calling div containing the relust message.
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
        resultMessage.textContent = ""
    let randomNumber = Math.floor(Math.random() * 30);
    logoSelector = aiChoice[randomNumber];
    let options = optionList[logoSelector];
    let imageSelector = document.getElementById("logo");
    let labels = document.getElementsByTagName("label");
    imageSelector.src = `./assets/images/${aiChoice[randomNumber]}.png`;
    let i = 0;
    for (let label of labels){
        label.textContent = options[i];
        i++
    }}
    else{
        
        resultMessage.textContent = "FINISH!"
        setTimeout(() => { resetGame(); }, 1000);
};
    questionNumber++;
}

/// ------------------------ Display Result

function displayResult(mode) {
    let resultMessage = document.getElementById("result-message");
    let userAnswer = checkAnswer();
    let selectedQuestion = logoSelector;
    if (userAnswer === selectedQuestion){
        resultMessage.innerText = "CORRECT!";
        setTimeout(() => { displayQuestion(mode); }, 1000);
        // displayQuestion(mode);
    }
    else {
        resultMessage.innerText = "SORRY!";
        setTimeout(() => { displayQuestion(mode); }, 1000)
        // displayQuestion(mode);
}
}

/// ------------------------ Game Reset/Restart

function resetGame() {
    let imageSelector = document.getElementById("logo");
    let displayElements = document.getElementsByClassName("display-property");
    let resultMessage = document.getElementById("result-message");
    imageSelector.src = `./assets/images/question.png`;
    resultMessage.textContent = "";
    for (let display of displayElements){
        display.style.display = "none"
    }
    questionNumber = 1;
}

/// ------------------------ Check Answer

function checkAnswer() {
    let radios = document.getElementsByTagName("input");
    for (let radio of radios){
        if (radio.checked){
            // let selected = radio.id;
            let checkLabel = document.querySelector(`label[for=${radio.id}]`).textContent;
            // console.log(checkLabel)
            return (checkLabel);
        }
    }
}