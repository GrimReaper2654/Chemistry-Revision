//----------------------------------------------------------------------
// 
// WARNING: Horifyingly inefficient code. Don't look, save your eyes
//
//----------------------------------------------------------------------
//
// Data comes from the Lucarelli textbook
const ptable = [
    {name: ['Hydrogen','hydrogen'], symbol: ['H'], atomic: ['1'], mass: ['1.008','IDK'], valence: ['1+','1','+1','+','IDK']},
    {name: ['Helium','helium'], symbol: ['He'], atomic: ['2'], mass: ['4.003','IDK'], valence: ['0','IDK']},
    {name: ['Lithium','lithium'], symbol: ['Li'], atomic: ['3'], mass: ['6.968','IDK'], valence: ['1+','1','+1','+','IDK']},
    {name: ['Beryllium','beryllium'], symbol: ['Be'], atomic: ['4'], mass: ['9.012','IDK'], valence: ['2+','2','+2','IDK']},
    {name: ['Boron','boron'], symbol: ['B'], atomic: ['5'], mass: ['10.82','IDK'], valence: ['3+','3','+3','IDK']},
    {name: ['Carbon','carbon'], symbol: ['C'], atomic: ['6'], mass: ['12.01','IDK'], valence: ['4+','4','+4','4-','-4','IDK']},
    {name: ['Nitrogen','nitrogen'], symbol: ['N'], atomic: ['7'], mass: ['14.01','IDK'], valence: ['3-','3','-3','IDK']},
    {name: ['Oxygen','oxygen'], symbol: ['O'], atomic: ['8'], mass: ['16','16.00','16.0','IDK'], valence: ['2-','2','-2','IDK']},
    {name: ['Fluorine','fluorine'], symbol: ['F'], atomic: ['9'], mass: ['19','19.00','19.0','IDK'], valence: ['1-','1','-1','-','IDK']},
    {name: ['Neon','Neon'], symbol: ['Ne'], atomic: ['10'], mass: ['20.18','IDK'], valence: ['0']},
];

var first = true;
var brainSize = 1;
var winStreak = 0;
var currentAnswer = null;
var reloadQuestion = false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function replacetitle(text) {
    document.getElementById("title").innerHTML = text;
};

function replacedescription(text) {
    document.getElementById("description").innerHTML = text;
};

function replacemain(text) {
    document.getElementById("main").innerHTML = text;
};

function replacebrain(text) {
    if (document.getElementById("brain").innerHTML != text) {
        document.getElementById("brain").innerHTML = text;
    }
};

function replaceControlPannel(text) {
    document.getElementById("controlPannel").innerHTML = text;
};

async function bruh() {
    text = document.getElementById("all").innerHTML;
    var choice = 'Stoobid';
    if (Math.random() > 0.5) {
        choice = 'Failure';
    }
    document.getElementById("all").innerHTML = `<img src="${choice}.png" alt="Ur Trash" width="100%" height="100%">`;
    await sleep(1500);
    document.getElementById("all").innerHTML = text;
}

function drawBrain() {
    if (brainSize < -500) {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    if (brainSize < -200) {
        replacebrain(`<img src="brain Stage-2.png">`);
    } else if (brainSize < -75) {
        replacebrain(`<img src="brain Stage-1.png">`);
    } else if (brainSize < -20) {
        replacebrain(`<img src="brain Stage0.png">`);
    } else if (brainSize < 15) {
        replacebrain(`<img src="brain Stage1.png">`);
    } else if (brainSize < 50) {
        replacebrain(`<img src="brain Stage2.png">`);
    } else if (brainSize < 100) {
        replacebrain(`<img src="brain Stage3.png">`);
    } else if (brainSize < 175) {
        replacebrain(`<img src="brain Stage4.png">`);
    } else if (brainSize < 250) {
        replacebrain(`<img src="brain Stage5.png">`);
    } else if (brainSize < 350) {
        replacebrain(`<img src="brain Stage6.png">`);
    } else if (brainSize < 500) {
        replacebrain(`<img src="brain Stage7.png">`);
    } else if (brainSize < 750) {
        replacebrain(`<img src="brain Stage8.png">`);
    } else if (brainSize > 750) {
        replacebrain(`<img src="brain Stage9.png">`);
    }
}

function generateQuestion() { // return html for a question and the answer
    // Did you know that large amounts of blood loss causes you to make more mistakes when coding? I found that out the hard way...
    var given = getRandomInt(1,5);
    var ans = getRandomInt(0,ptable.length);
    var question = `<form>`;
    if (given == 1) {
        question += `<label>Name:          ${ptable[ans].name[0]}</label><br>`;
    } else {
        question += `<label>Name:          </label><input type="text" id="name"></input><br>`;
    }
    if (given == 2) {
        question += `<label>Symbol:        ${ptable[ans].symbol[0]}</label><br>`;
    } else {
        question += `<label>Symbol:        </label><input type="text" id="symbol"></input><br>`;
    }
    if (given == 3) {
        question += `<label>Atomic number: ${ptable[ans].atomic[0]}</label><br>`;
    } else {
        question += `<label>Atomic number: </label><input type="text" id="atomic"></input><br>`;
    }
    if (given == 4) {
        question += `<label>Mass number:   ${ptable[ans].mass[0]}</label><br>`;
    } else {
        question += `<label>Mass number:   </label><input type="text" id="mass"></input><br>`;
    }
    question += `<label>Valence:       </label><input type="text" id="valence"></input></form>`;
    console.log(question);
    replacemain(question);
    return [ans,given];
};

function check() {
    // control+c control+v...
    var correct = true;
    if (currentAnswer[1] != 1) {
        var match = false;
        for (var i = 0; i < ptable[currentAnswer[0]].name.length; i +=1 ) {
            console.log(ptable[currentAnswer[0]].name[i],document.getElementById("name").innerHTML)
            if (document.getElementById("name").value == ptable[currentAnswer[0]].name[i]) {
                match = true;
            }
        }
        if (match == false) {
            correct = false;
        }
    }
    if (currentAnswer[1] != 2) {
        var match = false;
        for (var i = 0; i < ptable[currentAnswer[0]].symbol.length; i +=1 ) {
            if (document.getElementById("symbol").value == ptable[currentAnswer[0]].symbol[i]) {
                match = true;
            }
        }
        if (match == false) {
            correct = false;
        }
    }
    if (currentAnswer[1] != 3) {
        var match = false;
        for (var i = 0; i < ptable[currentAnswer[0]].atomic.length; i +=1 ) {
            if (document.getElementById("atomic").value == ptable[currentAnswer[0]].atomic[i]) {
                match = true;
            }
        }
        if (match == false) {
            correct = false;
        }
    }
    if (currentAnswer[1] != 4) {
        var match = false;
        for (var i = 0; i < ptable[currentAnswer[0]].mass.length; i +=1 ) {
            if (document.getElementById("mass").value == ptable[currentAnswer[0]].mass[i]) {
                match = true;
            }
        }
        if (match == false) {
            correct = false;
        }
    }
    if (currentAnswer[1] != 5) { // always true
        var match = false;
        for (var i = 0; i < ptable[currentAnswer[0]].valence.length; i +=1 ) {
            if (document.getElementById("valence").value == ptable[currentAnswer[0]].valence[i]) {
                match = true;
            }
        }
        if (match == false) {
            correct = false;
        }
    }
    if (correct) {
        first = false;
        reloadQuestion = true;
        brainSize += Math.round(winStreak/3)*5+10;
        winStreak += 1;
        replacedescription(`Correct! ${winStreak} correct in a row.`);
    } else {
        if (first) {
            brainSize -= 20;
        } else {
            brainSize -= Math.max(20,50-winStreak);
        }
        first = false;
        winStreak = 0;
        replacedescription(`You fool, you moron, how could you get it wrong! You stoopid! L+Bozo`);
        bruh();
    }
}

function load() {
    console.log('Started the game');
    replacetitle(`<h1>Chemistry Revision</h1><h3>Fill in the blanks</h3>`);
    currentAnswer = generateQuestion();
    replaceControlPannel(`<button onclick="check();"><h4>Submit</h4></button>`);
};



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function main() {
    load();
    while (1) {
        await sleep(1000/60);
        if (document.getElementById("main")) { // the page does exist
            if(reloadQuestion) {
                currentAnswer = generateQuestion();
                reloadQuestion = false;
            }
            drawBrain();
        }
    }
};

//<button onclick="check();"><h4>Submit</h4></button>