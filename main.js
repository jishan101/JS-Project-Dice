const p1ButtonElm = document.querySelector("#p1Btn");
const p2ButtonElm = document.querySelector("#p2Btn");
const p3ButtonElm = document.querySelector("#p3Btn");
const p4ButtonElm = document.querySelector("#p4Btn");
const p1ScoreElm = document.querySelector("#p1Score");
const p2ScoreElm = document.querySelector("#p2Score");
const p3ScoreElm = document.querySelector("#p3Score");
const p4ScoreElm = document.querySelector("#p4Score");
const p1SixElm = document.querySelector("#p1Six");
const p2SixElm = document.querySelector("#p2Six");
const p3SixElm = document.querySelector("#p3Six");
const p4SixElm = document.querySelector("#p4Six");
const resetButtonElm = document.querySelector("#resetBtn");

let p1Score = 0;
let p2Score = 0;
let p3Score = 0;
let p4Score = 0;
let p1Six = 0;
let p2Six = 0;
let p3Six = 0;
let p4Six = 0;
p1ButtonElm.removeAttribute("disabled");

p1ButtonElm.addEventListener("click", e => {
    p1Score = random(6);
    p1ScoreElm.innerHTML = `<b>${p1Score}</b>`;
    p4Score = 0;
    p4ScoreElm.textContent = " ";
    p4Six = 0;
    p4SixElm.textContent = " ";
    if (p1Score === 6) {
        p1Six++;
        p1SixElm.innerHTML = `<b>six: ${p1Six} Times</b>`;
    } else {
        p1ButtonElm.setAttribute("disabled", "disabled");
        p2ButtonElm.removeAttribute("disabled");
    }
});

p2ButtonElm.addEventListener("click", e => {
    p2Score = random(6);
    p2ScoreElm.innerHTML = `<b>${p2Score}</b>`;
    p1Score = 0;
    p1ScoreElm.textContent = " ";
    p1Six = 0;
    p1SixElm.textContent = " ";
    if (p2Score === 6) {
        p2Six++;
        p2SixElm.innerHTML = `<b>six: ${p2Six} Times</b>`;
    } else {
        p2ButtonElm.setAttribute("disabled", "disabled");
        p3ButtonElm.removeAttribute("disabled");
    }
});

p3ButtonElm.addEventListener("click", e => {
    p3Score = random(6);
    p3ScoreElm.innerHTML = `<b>${p3Score}</b>`;
    p2Score = 0;
    p2ScoreElm.textContent = " ";
    p2Six = 0;
    p2SixElm.textContent = " ";
    if (p3Score === 6) {
        p3Six++;
        p3SixElm.innerHTML = `<b>six: ${p3Six} Times</b>`;
    } else {
        p3ButtonElm.setAttribute("disabled", "disabled");
        p4ButtonElm.removeAttribute("disabled");
    }
});

p4ButtonElm.addEventListener("click", e => {
    p4Score = random(6);
    p4ScoreElm.innerHTML = `<b>${p4Score}</b>`;
    p3Score = 0;
    p3ScoreElm.textContent = " ";
    p3Six = 0;
    p3SixElm.textContent = " ";
    if (p4Score === 6) {
        p4Six++;
        p4SixElm.innerHTML = `<b>six: ${p4Six} Times</b>`;
    } else {
        p4ButtonElm.setAttribute("disabled", "disabled");
        p1ButtonElm.removeAttribute("disabled");
    }
});

resetButtonElm.addEventListener("click", e => {
    p1Score = 0;
    p1ScoreElm.textContent = " ";
    p1Six = 0;
    p1SixElm.textContent = " ";
    p2Score = 0;
    p2ScoreElm.textContent = " ";
    p2Six = 0;
    p2SixElm.textContent = " ";
    p3Score = 0;
    p3ScoreElm.textContent = " ";
    p3Six = 0;
    p3SixElm.textContent = " ";
    p4Score = 0;
    p4ScoreElm.textContent = " ";
    p4Six = 0;
    p4SixElm.textContent = " ";
    p2ButtonElm.setAttribute("disabled", "disabled");
    p3ButtonElm.setAttribute("disabled", "disabled");
    p4ButtonElm.setAttribute("disabled", "disabled");
    p1ButtonElm.removeAttribute("disabled");
})

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}
