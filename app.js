// Choosing an array of letters
let letterAnim = document.getElementsByClassName("letterAnim");
let letterArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
function randomizeLetters(arrayInput) {
    let randomNum = 0;
    for (let i = 0; i < arrayInput.length; i++) {
        randomNum = Math.floor(Math.random() * 26);
        arrayInput[i].textContent = letterArray[randomNum];
    }
}
let letterAnimFunc = () => {
    randomizeLetters(letterAnim);
};
setInterval(letterAnimFunc, 200);

// Infection section

let systemElements = document.getElementsByClassName("systemElement");

function changeToRed(arr) {
    Array.from(arr).forEach((element) => {
        element.onclick = () => {
            if (element.classList.contains("redElement")) {
                element.classList.toggle("redElement");
                element.style.backgroundColor = "#00FF38";
                element.lastElementChild.style.filter = "invert(0%)";
            } else {
                element.classList.toggle("redElement");
                element.style.backgroundColor = "#FF0000";
                element.lastElementChild.style.filter = "invert(100%)";
            }
        };
    });
}

changeToRed(systemElements);

// Encryption section

let encLetter = document.getElementsByClassName("enc-letter");
let encDecrypt = document.getElementsByClassName("encDecrypt");
let encBruteforce = document.getElementsByClassName("encBruteforce");
let encTry = document.getElementsByClassName("encTry");
let encAttempt = document.getElementById("encAttempt");
let encError = document.getElementById("encError");
let encTryAgain = document.getElementById("encTryAgain");
let encBarFull1 = document.getElementsByClassName("encBarFull-1");
let encBarFull2 = document.getElementsByClassName("encBarFull-2");
let encLetterFunc = () => {
    randomizeLetters(encLetter);
};

let encInterval = setInterval(encLetterFunc, 170);

encBruteforce[0].addEventListener("click", () => {
    clearInterval(encInterval);
    encInterval = setInterval(encLetterFunc, 170);
});

encDecrypt[0].addEventListener("click", () => {
    clearInterval(encInterval);
});

encTry[0].addEventListener("click", () => {
    updateAttempts();
});

function updateAttempts() {
    let counter = 0;
    let encBar1 = 0;
    let encBar2 = 0;
    let attemptInterval = setInterval(() => {
        if (counter < 67) {
            counter += 1;
            encError.innerText = ` error ${Math.floor(Math.random() * 400)}`;
            encError.style.color = "#FF0000";
            encTryAgain.innerText = "try again";
            encTryAgain.style.color = "#FF0000";
            encAttempt.innerText = counter;
            encBar1 += 100 / 68;
            encBar2 += 100 / 68;
            encBarFull1[0].style.width = `${encBar1}%`;
            encBarFull2[0].style.width = `${encBar1}%`;
        } else {
            console.log("End");
            clearInterval(attemptInterval);
            encError.innerText = "success";
            encError.style.color = "#00FF38";
            encTryAgain.innerText = "access granted";
            encTryAgain.style.color = "#00FF38";
            encBarFull1[0].style.width = `100%`;
            encBarFull2[0].style.width = `100%`;
            clearInterval(encInterval);
            Array.from(encLetter).forEach((letter) => {
                letter.setAttribute("style", "-webkit-text-stroke-color : #00FF38");
            });
        }
    }, 50);
}

// function allToColor

let memoryButtons = document.getElementsByClassName("register");

function buttonToRed(arr) {
    Array.from(arr).forEach((element) => {
        element.onclick = () => {
            if (element.classList.contains("redElement")) {
                element.classList.toggle("redElement");
                element.style.backgroundColor = "#00FF38";
                element.style.color = "#000000";
            } else {
                element.classList.toggle("redElement");
                element.style.backgroundColor = "#FF0000";
                element.style.color = "#ffffff";
            }
        };
    });
}

buttonToRed(memoryButtons);

// Pressure section
let pressureCpu = document.getElementsByClassName("pressureCpu");
let pressureDiag = document.getElementsByClassName("pressureDiag");
let pressureDec = document.getElementsByClassName("pressureDec");
let pressureInc = document.getElementsByClassName("pressureInc");
let pressureInfo = document.getElementsByClassName("pressureInfo");
let pressureImg = document.getElementsByClassName("pressureImg");
let pressureButton = document.getElementsByClassName("pressureButton");

pressureCpu[0].addEventListener("click", () => {
    if (!pressureInfo[0].classList.contains("pressurePanelAnim")) {
        pressureInfo[0].classList.toggle("pressurePanelAnim");
    } else {
        null;
    }
    pressureInfo[0].innerHTML = `<p>cpu unlinked</p>
    <p>system alert</p>
    <p>exploitation started</p>
    <p style="color:#00FF38">exploited successfully</p>`;
});
pressureDiag[0].addEventListener("click", () => {
    if (!pressureInfo[0].classList.contains("pressurePanelAnim")) {
        pressureInfo[0].classList.toggle("pressurePanelAnim");
    } else {
        null;
    }
    pressureInfo[0].innerHTML = `<p>error</p>
    <p>sys hacked</p>
    <p>system crash</p>
    <p style="color:#ff0000">explosion risk</p>`;
});
counter = 1;
pressureDec[0].addEventListener("click", () => {
    if (counter == 1) {
        pressureInfo[0].innerHTML = `<p>error</p>
    <p style="color:#ff0000">low pressure</p>
    <p style="color:#ff0000">sys at risk</p>
    <p style="color:#ff0000">increase pressure</p>`;
    } else {
        counter -= 1;
        Array.from(pressureImg).forEach((img) => {
            img.src = `svg/pressure-${counter}.svg`;
        });
    }
});
pressureInc[0].addEventListener("click", () => {
    if (counter == 9) {
        pressureInfo[0].innerHTML = `<p>error</p>
    <p style="color:#00FF38">high pressure</p>
    <p style="color:#00FF38">sys is ready</p>
    <p style="color:#00FF38">pressure is ok</p>`;
    } else {
        counter += 1;
        Array.from(pressureImg).forEach((img) => {
            img.src = `svg/pressure-${counter}.svg`;
        });
        console.log(counter);
    }
});

function updatePressure() {}

// Chip section

let chipMount = document.getElementsByClassName("chipMount")[0];
let chipUnMount = document.getElementsByClassName("chipUnMount")[0];
let chipDebug = document.getElementsByClassName("chipDebug")[0];
let chipSolder = document.getElementsByClassName("chipSolder")[0];
let chipOn = document.getElementsByClassName("chipOn")[0];
let chipOff = document.getElementsByClassName("chipOff")[0];
let blueWires = document.getElementsByClassName("blueWires")[0];
let redWires = document.getElementsByClassName("redWires")[0];
let chipButtons = document.getElementsByClassName("chipButton");

chipMount.addEventListener("click", () => {
    if (redWires.classList.contains("svgChanged")) {
        redWires.style.filter = "invert(0%)";
        redWires.classList.toggle("svgChanged");
    } else {
        redWires.style.filter = "invert(100%)";
        redWires.classList.toggle("svgChanged");
    }
});

chipUnMount.addEventListener("click", () => {
    if (blueWires.classList.contains("svgChanged")) {
        blueWires.style.filter = "hue-rotate(0deg)";
        blueWires.classList.toggle("svgChanged");
    } else {
        blueWires.style.filter = "hue-rotate(-60deg)";
        blueWires.classList.toggle("svgChanged");
    }
});

chipDebug.addEventListener("click", () => {
    if (blueWires.classList.contains("svgChanged") || redWires.classList.contains("svgChanged")) {
        blueWires.style.filter = "grayscale(0%)";
        redWires.style.filter = "grayscale(0%)";
        blueWires.classList.toggle("svgChanged");
        redWires.classList.toggle("svgChanged");
    } else {
        blueWires.style.filter = "grayscale(100%)";
        redWires.style.filter = "grayscale(100%)";
        blueWires.classList.toggle("svgChanged");
        redWires.classList.toggle("svgChanged");
    }
});

chipSolder.addEventListener("click", () => {
    if (blueWires.classList.contains("svgChanged") || redWires.classList.contains("svgChanged")) {
        blueWires.style.filter = "brightness(100%)";
        redWires.style.filter = "brightness(100%)";
        blueWires.classList.toggle("svgChanged");
        redWires.classList.toggle("svgChanged");
    } else {
        blueWires.style.filter = "brightness(1000%)";
        redWires.style.filter = "brightness(1000%)";
        blueWires.classList.toggle("svgChanged");
        redWires.classList.toggle("svgChanged");
    }
});

chipOff.addEventListener("click", () => {
    blueWires.style.filter = "opacity(30%)";
    redWires.style.filter = "opacity(30%)";
    blueWires.classList.add("svgChanged");
    redWires.classList.add("svgChanged");
});

chipOn.addEventListener("click", () => {
    blueWires.style.filter = "opacity(100%)";
    redWires.style.filter = "opacity(100%)";
    blueWires.classList.remove("svgChanged");
    redWires.classList.remove("svgChanged");
});

function changeColorButtons(buttons) {
    Array.from(buttons).forEach((button) => {
        button.addEventListener("click", () => {
            Array.from(buttons).forEach((button) => {
                if (button.classList.contains("btnColorChanged")) {
                    button.classList.remove("btnColorChanged");
                }
            });
            if (button.classList.contains("btnColorChanged")) {
                button.classList.toggle("btnColorChanged");
            } else {
                button.classList.toggle("btnColorChanged");
            }
        });
    });
}

let account = document.getElementsByClassName("account");

changeColorButtons(chipButtons);
changeColorButtons(pressureButton);
changeColorButtons(account);

let timerTime = document.getElementsByClassName("timerTime")[0];
let timeLeft = 600; // 1H 1Min 40s
let output;
function timer() {
    timeLeft -= 1;
    let hours = Math.floor(timeLeft / 3600); // 1
    let minutes = Math.floor(timeLeft / 60) % 60;
    let seconds = Math.floor(timeLeft % 60);
    if (Array.from(String(hours)).length < 2) {
        hours = `0${hours}`;
    }

    if (Array.from(String(minutes)).length < 2) {
        minutes = `0${minutes}`;
    }

    if (Array.from(String(seconds)).length < 2) {
        seconds = `0${seconds}`;
    }

    output = `00:${hours}:${minutes}:${seconds}`;
    timerTime.innerText = output;
}

let timerIntervar = setInterval(() => {
    timer();
}, 1000);

timer();

let fundsHeader = document.getElementsByClassName("fundsHeader");
let outputMessage = document.getElementsByClassName("output")[0];
let yourAccount = document.getElementById("yourAccount");
changeColorButtons(fundsHeader);
let funds = 0;
let fundsOutput = "";

Array.from(account).forEach((acc) => {
    acc.addEventListener("click", () => {
        if (!acc.classList.contains("transferredFunds")) {
            funds += 1000000;
            acc.getElementsByTagName("p")[1].innerText = "$ 0";
            acc.classList.toggle("transferredFunds");
        } else {
            funds -= 1000000;
            acc.getElementsByTagName("p")[1].innerText = "$ 1 000 000";
            acc.classList.toggle("transferredFunds");
        }
        fundsOutput = `$ ${funds}`;
        yourAccount.innerText = fundsOutput;
    });
});

fundsHeader[0].addEventListener("click", () => {
    if (funds >= 1000000) {
        outputMessage.innerText = "funds transferred!";
        outputMessage.style.color = "#00FF38";
    } else {
        outputMessage.innerText = "steal money!";
        outputMessage.style.color = "red";
    }
});

// Register section

let registers = document.getElementsByClassName("register");
let memClear = document.getElementsByClassName("memClear")[0];
let memFootP = document.getElementsByClassName("memFootP")[0];
let memLogs = document.getElementsByClassName("memLogs")[0];
let memEnc = document.getElementsByClassName("memEnc")[0];

memClear.addEventListener("click", () => {
    Array.from(registers).forEach((register) => {
        register.style.backgroundColor = "#00FF38";
        register.style.color = "#000000";
    });
});
memFootP.addEventListener("click", () => {
    Array.from(registers).forEach((register) => {
        register.style.backgroundColor = "#ffffff";
        register.style.color = "#000000";
    });
});
memLogs.addEventListener("click", () => {
    Array.from(registers).forEach((register) => {
        register.style.backgroundColor = "#ff0000";
        register.style.color = "#000000";
    });
});
memEnc.addEventListener("click", () => {
    Array.from(registers).forEach((register) => {
        // register.style.color = "#000000";
        register.style.filter = "invert(100%)";
    });
});
