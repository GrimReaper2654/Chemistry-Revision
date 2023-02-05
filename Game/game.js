//----------------------------------------------------------------------
// 
// WARNING: Horifyingly inefficient code. Don't look, save your eyes
//
//----------------------------------------------------------------------
//
// Data comes from the Lucarelli textbook

const ptable = [
    [{question: 'Name:          ', answer: ['Hydrogen','hydrogen'], given: true},{question: 'Symbol:        ', answer: ['H'], given: true},{question: 'Atomic Number: ', answer: ['1'], given: true},{question: 'Mass number:   ', answer: ['1.008'], given: false},{question: 'Valence:       ', answer: ['1+','1','+1','+'], given: false}],
    [{question: 'Name:          ', answer: ['Helium','helium'], given: true},{question: 'Symbol:        ', answer: ['He'], given: true},{question: 'Atomic Number: ', answer: ['2'], given: true},{question: 'Mass number:   ', answer: ['4.003'], given: false},{question: 'Valence:       ', answer: ['0'], given: false}],
    [{question: 'Name:          ', answer: ['Lithium','lithium'], given: true},{question: 'Symbol:        ', answer: ['Li'], given: true},{question: 'Atomic Number: ', answer: ['3'], given: true},{question: 'Mass number:   ', answer: ['6.968'], given: false},{question: 'Valence:       ', answer: ['1+','1','+1','+'], given: false}],
    [{question: 'Name:          ', answer: ['Beryllium','beryllium'], given: true},{question: 'Symbol:        ', answer: ['Be'], given: true},{question: 'Atomic Number: ', answer: ['4'], given: true},{question: 'Mass number:   ', answer: ['9.012'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2'], given: false}],
    [{question: 'Name:          ', answer: ['Boron','boron'], given: true},{question: 'Symbol:        ', answer: ['B'], given: true},{question: 'Atomic Number: ', answer: ['5'], given: true},{question: 'Mass number:   ', answer: ['10.82'], given: false},{question: 'Valence:       ', answer: ['3+','3','+3'], given: false}],
    [{question: 'Name:          ', answer: ['Carbon','carbon'], given: true},{question: 'Symbol:        ', answer: ['C'], given: true},{question: 'Atomic Number: ', answer: ['6'], given: true},{question: 'Mass number:   ', answer: ['12.01'], given: false},{question: 'Valence:       ', answer: ['4+','4','+4','4-','-4'], given: false}],
    [{question: 'Name:          ', answer: ['Nitrogen','nitrogen'], given: true},{question: 'Symbol:        ', answer: ['N'], given: true},{question: 'Atomic Number: ', answer: ['7'], given: true},{question: 'Mass number:   ', answer: ['14.01'], given: false},{question: 'Valence:       ', answer: ['3-','3','-3'], given: false}],
    [{question: 'Name:          ', answer: ['Oxygen','oxygen'], given: true},{question: 'Symbol:        ', answer: ['O'], given: true},{question: 'Atomic Number: ', answer: ['8'], given: true},{question: 'Mass number:   ', answer: ['16','16.00','16.0'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Fluorine','fluorine'], given: true},{question: 'Symbol:        ', answer: ['F'], given: true},{question: 'Atomic Number: ', answer: ['9'], given: true},{question: 'Mass number:   ', answer: ['19','19.00','19.0'], given: false},{question: 'Valence:       ', answer: ['1-','1','-1','-'], given: false}],
    [{question: 'Name:          ', answer: ['Neon','neon'], given: true},{question: 'Symbol:        ', answer: ['Ne'], given: true},{question: 'Atomic Number: ', answer: ['10'], given: true},{question: 'Mass number:   ', answer: ['20.18'], given: false},{question: 'Valence:       ', answer: ['0'], given: false}],
    [{question: 'Name:          ', answer: ['Sodium','sodium'], given: true},{question: 'Symbol:        ', answer: ['Na'], given: true},{question: 'Atomic Number: ', answer: ['11'], given: true},{question: 'Mass number:   ', answer: ['22.99'], given: false},{question: 'Valence:       ', answer: ['1+','1','+1','+'], given: false}],
    [{question: 'Name:          ', answer: ['Magnesium','megnesium'], given: true},{question: 'Symbol:        ', answer: ['Mg'], given: true},{question: 'Atomic Number: ', answer: ['12'], given: true},{question: 'Mass number:   ', answer: ['24.31'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2'], given: false}],
    [{question: 'Name:          ', answer: ['Aluminium','aluminium'], given: true},{question: 'Symbol:        ', answer: ['Al'], given: true},{question: 'Atomic Number: ', answer: ['13'], given: true},{question: 'Mass number:   ', answer: ['26.98'], given: false},{question: 'Valence:       ', answer: ['3+','3','+3'], given: false}],
    [{question: 'Name:          ', answer: ['Silicon','silicon'], given: true},{question: 'Symbol:        ', answer: ['Si'], given: true},{question: 'Atomic Number: ', answer: ['14'], given: true},{question: 'Mass number:   ', answer: ['28.09'], given: false},{question: 'Valence:       ', answer: ['4+','4','+4'], given: false}],
    [{question: 'Name:          ', answer: ['Phosphorus','phosphorus'], given: true},{question: 'Symbol:        ', answer: ['P'], given: true},{question: 'Atomic Number: ', answer: ['15'], given: true},{question: 'Mass number:   ', answer: ['30.97'], given: false},{question: 'Valence:       ', answer: ['3-','3','-3'], given: false}],
    [{question: 'Name:          ', answer: ['Sulphur','sulphur'], given: true},{question: 'Symbol:        ', answer: ['S'], given: true},{question: 'Atomic Number: ', answer: ['16'], given: true},{question: 'Mass number:   ', answer: ['32.07'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Chlorine','chlorine'], given: true},{question: 'Symbol:        ', answer: ['Cl'], given: true},{question: 'Atomic Number: ', answer: ['17'], given: true},{question: 'Mass number:   ', answer: ['35.45'], given: false},{question: 'Valence:       ', answer: ['1-','1','-1','-'], given: false}],
    [{question: 'Name:          ', answer: ['Argon','argon'], given: true},{question: 'Symbol:        ', answer: ['Ar'], given: true},{question: 'Atomic Number: ', answer: ['18'], given: true},{question: 'Mass number:   ', answer: ['39.95'], given: false},{question: 'Valence:       ', answer: ['0'], given: false}],
    [{question: 'Name:          ', answer: ['Potassium','potassium'], given: true},{question: 'Symbol:        ', answer: ['K'], given: true},{question: 'Atomic Number: ', answer: ['19'], given: true},{question: 'Mass number:   ', answer: ['39.10','39.1'], given: false},{question: 'Valence:       ', answer: ['1+','1','+1','+'], given: false}],
    [{question: 'Name:          ', answer: ['Calcium','calcium'], given: true},{question: 'Symbol:        ', answer: ['Ca'], given: true},{question: 'Atomic Number: ', answer: ['20'], given: true},{question: 'Mass number:   ', answer: ['40.08'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2'], given: false}],
    [{question: 'Name:          ', answer: ['Scandium','scandium'], given: true},{question: 'Symbol:        ', answer: ['Sc'], given: true},{question: 'Atomic Number: ', answer: ['21'], given: true},{question: 'Mass number:   ', answer: ['44.96'], given: false},{question: 'Valence:       ', answer: ['3+','3','+3'], given: false}],
    [{question: 'Name:          ', answer: ['Titanium','titanium'], given: true},{question: 'Symbol:        ', answer: ['Ti'], given: true},{question: 'Atomic Number: ', answer: ['22'], given: true},{question: 'Mass number:   ', answer: ['47.87'], given: false},{question: 'Valence:       ', answer: ['4+','4','+4'], given: false}],
    [{question: 'Name:          ', answer: ['Vanadium','vanadium'], given: true},{question: 'Symbol:        ', answer: ['V'], given: true},{question: 'Atomic Number: ', answer: ['23'], given: true},{question: 'Mass number:   ', answer: ['50.94'], given: false},{question: 'Valence:       ', answer: ['4+','4','+4','5+','5','+5'], given: false}],
    [{question: 'Name:          ', answer: ['Chromium','chromium'], given: true},{question: 'Symbol:        ', answer: ['Cr'], given: true},{question: 'Atomic Number: ', answer: ['24'], given: true},{question: 'Mass number:   ', answer: ['52','52.0','52.00'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2'], given: false}],
    [{question: 'Name:          ', answer: ['Manganese','manganese'], given: true},{question: 'Symbol:        ', answer: ['Mn'], given: true},{question: 'Atomic Number: ', answer: ['25'], given: true},{question: 'Mass number:   ', answer: ['54.94'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2','7+','7','+7','4+','4','+4'], given: false}],
    [{question: 'Name:          ', answer: ['Iron','iron'], given: true},{question: 'Symbol:        ', answer: ['Fe'], given: true},{question: 'Atomic Number: ', answer: ['26'], given: true},{question: 'Mass number:   ', answer: ['55.85'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2','3+','3','+3'], given: false}],
    [{question: 'Name:          ', answer: ['Cobalt','cobalt'], given: true},{question: 'Symbol:        ', answer: ['Co'], given: true},{question: 'Atomic Number: ', answer: ['27'], given: true},{question: 'Mass number:   ', answer: ['58.93'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2','3+','3','+3'], given: false}],
    [{question: 'Name:          ', answer: ['Nickel','nickel'], given: true},{question: 'Symbol:        ', answer: ['Ni'], given: true},{question: 'Atomic Number: ', answer: ['28'], given: true},{question: 'Mass number:   ', answer: ['58.69'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2'], given: false}],
    [{question: 'Name:          ', answer: ['Copper','copper'], given: true},{question: 'Symbol:        ', answer: ['Cu'], given: true},{question: 'Atomic Number: ', answer: ['29'], given: true},{question: 'Mass number:   ', answer: ['63.55'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2','1+','1','+1','+'], given: false}],
    [{question: 'Name:          ', answer: ['Zinc','zinc'], given: true},{question: 'Symbol:        ', answer: ['Zn'], given: true},{question: 'Atomic Number: ', answer: ['30'], given: true},{question: 'Mass number:   ', answer: ['65.38'], given: false},{question: 'Valence:       ', answer: ['2+','2','+2'], given: false}],
    
];

const polyatomicIons = [
    [{question: 'Name:          ', answer: ['Sulfate','sulfate'], given: true},{question: 'Formula:       ', answer: ['SO4'], given: true},{question: 'Molar mass:    ', answer: ['87.07'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Sulfite','sulfite'], given: true},{question: 'Formula:       ', answer: ['SO3'], given: true},{question: 'Molar mass:    ', answer: ['71.07'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Sulfide','sulfide'], given: true},{question: 'Formula:       ', answer: ['S'], given: true},{question: 'Molar mass:    ', answer: ['23.07'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Ammonium','ammonium'], given: true},{question: 'Formula:       ', answer: ['NH4'], given: true},{question: 'Molar mass:    ', answer: ['18.042'], given: false},{question: 'Valence:       ', answer: ['1+','1','+1','+'], given: false}],
    [{question: 'Name:          ', answer: ['Hydroxide','hydroxide'], given: true},{question: 'Formula:       ', answer: ['OH'], given: true},{question: 'Molar mass:    ', answer: ['17.008'], given: false},{question: 'Valence:       ', answer: ['1-','1','-1','-'], given: false}],
    [{question: 'Name:          ', answer: ['Cyanide','cyanide'], given: true},{question: 'Formula:       ', answer: ['CN'], given: true},{question: 'Molar mass:    ', answer: ['26.02'], given: false},{question: 'Valence:       ', answer: ['1-','1','-1','-'], given: false}],
    [{question: 'Name:          ', answer: ['Carbonate','carbonate'], given: true},{question: 'Formula:       ', answer: ['CO3'], given: true},{question: 'Molar mass:    ', answer: ['60.01'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Oxalate','oxalate'], given: true},{question: 'Formula:       ', answer: ['C2O4'], given: true},{question: 'Molar mass:    ', answer: ['88.02'], given: false},{question: 'Valence:       ', answer: ['2-','2','-2'], given: false}],
    [{question: 'Name:          ', answer: ['Nitrate','nitrate'], given: true},{question: 'Formula:       ', answer: ['NO3'], given: true},{question: 'Molar mass:    ', answer: ['60.01'], given: false},{question: 'Valence:       ', answer: ['1-','1','-1','-'], given: false}],
    [{question: 'Name:          ', answer: ['Nitrite','nitrite'], given: true},{question: 'Formula:       ', answer: ['NO2'], given: true},{question: 'Molar mass:    ', answer: ['44.01'], given: false},{question: 'Valence:       ', answer: ['1-','1','-1','-'], given: false}],
];


var questions = [];
questions = questions.concat(ptable);
questions = questions.concat(polyatomicIons);

var disabled = {
    name: false,
    symbol: false,
    atomic: false,
    mass: false,
    valency: false,
};
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
    var c = document.getElementById("bruh");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 400, 300);
    ctx.drawImage(text, 0, 0);
};

function replaceControlPannel(text) {
    document.getElementById("controlPannel").innerHTML = text;
};

function isEnabled(question) {
    switch (question) {
        case 'Name:          ':
            if (disabled.name) {
                return false;
            }
            return true;
        case 'Formula:       ':
        case 'Symbol:        ':
            if (disabled.symbol) {
                return false;
            }
            return true;
        case 'Atomic Number: ':
            if (disabled.atomic) {
                return false;
            }
            return true;
        case 'Mass number:   ':
        case 'Molar mass:    ':
            if (disabled.mass) {
                return false;
            }
            return true;
        case 'Valence:       ':
            if (disabled.valency) {
                return false;
            }
            return true;
        default:
            return true;
    }
}

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
        replacebrain(document.getElementById("-2"));
    } else if (brainSize < -75) {
        replacebrain(document.getElementById("-1"));
    } else if (brainSize < -20) {
        replacebrain(document.getElementById("0"));
    } else if (brainSize < 15) {
        replacebrain(document.getElementById("1"));
    } else if (brainSize < 50) {
        replacebrain(document.getElementById("2"));
    } else if (brainSize < 100) {
        replacebrain(document.getElementById("3"));
    } else if (brainSize < 175) {
        replacebrain(document.getElementById("4"));
    } else if (brainSize < 250) {
        replacebrain(document.getElementById("5"));
    } else if (brainSize < 350) {
        replacebrain(document.getElementById("6"));
    } else if (brainSize < 500) {
        replacebrain(document.getElementById("7"));
    } else if (brainSize < 750) {
        replacebrain(document.getElementById("8"));
    } else if (brainSize > 750) {
        replacebrain(document.getElementById("9"));
    }
}

function generateQuestion() { // return html for a question and the answer
    /*
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
    return [ans,given];*/
    var q = getRandomInt(0,questions.length);
    var possibleGiven = [];
    for (var i = 0; i < questions[q].length; i += 1) {
        if (questions[q][i].given && isEnabled(questions[q][i].question)) {
            possibleGiven.push(questions[q][i]);
        }
    }
    var given = getRandomInt(0,possibleGiven.length);
    given = possibleGiven[given];
    var innerhtml = `<form>`;
    for (var i = 0; i < questions[q].length; i += 1) {
        if (isEnabled(questions[q][i].question)) {
            if (questions[q][i] == given) {
                innerhtml += `<label>${questions[q][i].question}${questions[q][i].answer[0]}</label><br>`;
            } else {
                innerhtml += `<label>${questions[q][i].question}</label><input type="text" id="Q${i}"></input><br>`;
            }
        }
    }
    innerhtml += `</form>`;
    replacemain(innerhtml);
    return q;
};

function check() {
    var correct = true;
    /*
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
    }*/
    var ans = questions[currentAnswer];
    for (var i = 0; i < ans.length; i += 1) {
        if (document.getElementById(`Q${i}`)) {
            var match = false;
            for (var j = 0; j < ans[i].answer.length; j +=1 ) {
                if (document.getElementById(`Q${i}`).value == ans[i].answer[j]) {
                    match = true;
                    break;
                }
            }
            if (match == false) {
                correct = false;
            }
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

function disable(thing) {
    if (disabled[thing]) {
        disabled[thing] = false;
    } else {
        disabled[thing] = true;
    }
    if ((thing == 'name' || thing == 'symbol') && disabled.name && disabled.symbol) {
        disabled.name = false;  // Big brain moment
        disabled.symbol = false;
        disabled.thing = true;
    }
    currentAnswer = generateQuestion();
}

function load() {
    console.log('Started the game');
    replacetitle(`<h1>Chemistry Revision</h1><h3>Fill in the blanks</h3>`);
    currentAnswer = generateQuestion();
    console.log(`Correct answer: `,questions[currentAnswer]);
    replaceControlPannel(`<button onclick="check();"><h4>Submit</h4></button><br><button onclick="disable('name');"><h4>toggle name</h4></button><button onclick="disable('symbol');"><h4>toggle symbol</h4></button><button onclick="disable('mass');"><h4>toggle mass number</h4></button><button onclick="disable('atomic');"><h4>toggle atomic number</h4></button><button onclick="disable('valency');"><h4>toggle valency</h4></button>`);
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
                console.log(`Correct answer: `,questions[currentAnswer]);
                reloadQuestion = false;
            }
            drawBrain();
        }
    }
};

//<button onclick="check();"><h4>Submit</h4></button>
