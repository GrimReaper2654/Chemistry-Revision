// Data comes from the Lucarelli textbook
const ptable = [
    {name: ['Hydrogen','hydrogen'], symbol: ['H'], atomic: ['1'], mass: ['1.008'], valence: ['1+','1','+1']},
    {name: ['Helium','helium'], symbol: ['He'], atomic: ['2'], mass: ['4.003'], valence: ['0']},
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function replacetitle(text) {
    document.getElementById("title").innerHTML = text;
};

function replacemain(text) {
    document.getElementById("main").innerHTML = text;
};

function replaceControlPannel(text) {
    document.getElementById("controlPannel").innerHTML = text;
};

function generateQuestion() { // return html for a question and the answer
    var given = getRandomInt(1,6);
    var ans = getRandomInt(1,31);
    var question = `<form>`;
    if (given = 0) {
        question += `<label>Name: ${ptable[ans].name}</label><br>`;
    } else {
        question += `<label>Name:</label><br><input type="text" id="name"></input><br>`;
    }
    if (given = 1) {
        question += `<label>Name: ${ptable[ans].symbol}</label><br>`;
    } else {
        question += `<label>Symbol:</label><br><input type="text" id="name"></input><br>`;
    }

    document.getElementById("searchTxt").value;
//<label>Name:</label><br><input type="text" id="name"><label>Symbol:</label><br><input type="text" id="symbol"><br><label>Atomic Number:</label><br><input type="text" id="atomic"><label>Mass Number:</label><br><input type="text" id="mass"><label>Valence Electrons:</label><br><input type="text" id="valence"></form>
};

function load() {
    console.log('Started the game');
    replacehtml(generateQuestion());
    replaceControlPannel(`<button onclick="check();"><h4>Submit</h4></button>`);
};



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
    load();
    while (1) {

    }
};

//<button onclick="check();"><h4>Submit</h4></button>