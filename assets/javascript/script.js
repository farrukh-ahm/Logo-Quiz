/// -----------------Create Array and Object for question and options

let optionList = {"KFC": ["McDonalds", "KFC", "Taco-Bell", "Chipotle"],
                  "Gatorade": ["GFuel", "Lucozade", "Gatorade", "Electrolit"],
                  "Pizza-Hut": ["Pizza-Hut", "Domino's", "Papa-John's", "California-Pizza"],
                  "Costa-Coffee": ["Starbucks", "Lavazza", "Butlers-Chocolates", "Costa-Coffee"],
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

let buttons = document.getElementsByTagName("button");
let imageSelector = document.getElementById("logo");
let labels = document.getElementsByTagName("label");
let radios = document.getElementsByClassName("radio-buttons");

for (let button of buttons){
    button.addEventListener("click", function(){
        if (this.getAttribute("data-button") === "start"){
            displayQuestion();
        }
        else if (this.getAttribute("data-button") === "reset"){
            resetGame();
        }
        else if (this.getAttribute("data-button") === "submit"){
            displayResult();
        }
    })
}

/// ----------------------- Start/display the question

function displayQuestion(){
    let randomNumber = Math.floor(Math.random() * 30);
    let logoSelector = aiChoice[randomNumber];
    let options = optionList[logoSelector];
    imageSelector.src = `./assets/images/${aiChoice[randomNumber]}.png`;
    let i = 0;
    for (let label of labels){
        label.textContent = options[i];
        i++
    }
}

/// ------------------------ Display Result

function displayResult() {

}

/// ------------------------ Game Reset/Restart

function resetGame() {

}

/// ------------------------ Check Answer

