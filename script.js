const C4 = new Audio("piano_sound/C4.mp3");
const Db4 = new Audio("piano_sound/Db4.mp3");
const D4 = new Audio("piano_sound/D4.mp3");
const Eb4 = new Audio("piano_sound/Eb4.mp3");
const E4 = new Audio("piano_sound/E4.mp3");
const F4 = new Audio("piano_sound/F4.mp3");
const Gb4 = new Audio("piano_sound/Gb4.mp3");
const G4 = new Audio("piano_sound/G4.mp3");
const Ab4 = new Audio("piano_sound/Ab4.mp3");
const A4 = new Audio("piano_sound/A4.mp3");
const Bb4 = new Audio("piano_sound/Bb4.mp3");
const B4 = new Audio("piano_sound/B4.mp3");
const C5 = new Audio("piano_sound/C5.mp3");
const Db5 = new Audio("piano_sound/Db5.mp3");
const D5 = new Audio("piano_sound/D5.mp3");
const Eb5 = new Audio("piano_sound/Eb5.mp3");
const E5 = new Audio("piano_sound/E5.mp3");
const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();

};

//c4
const C4Key = document.querySelector(".C4");
const playC4 = () => {
    playSound(C4);
    C4Key.classList.add("active");
};
C4Key.addEventListener("click", playC4);

//Db4
const Db4Key = document.querySelector(".Db4");
const playDb4 = () => {
    playSound(Db4);
    Db4Key.classList.add("active");

};
Db4Key.addEventListener("click", playDb4);

//D4
const D4Key = document.querySelector(".D4");
const playD4 = () => {
    playSound(D4);
    D4Key.classList.add("active");

};
D4Key.addEventListener("click", playD4);

//Eb4
const Eb4Key = document.querySelector(".Eb4");
const playEb4 = () => {
    playSound(Eb4);
    Eb4Key.classList.add("active");

};
Eb4Key.addEventListener("click", playEb4);

//E4
const E4Key = document.querySelector(".E4");
const playE4 = () => {
    playSound(E4);
    E4Key.classList.add("active");

};
E4Key.addEventListener("click", playE4);


//F4
const F4Key = document.querySelector(".F4");
const playF4 = () => {
    playSound(F4);
    F4Key.classList.add("active");

};
F4Key.addEventListener("click", playF4);

//Gb4
const Gb4Key = document.querySelector(".Gb4");
const playGb4 = () => {
    playSound(Gb4);
    Gb4Key.classList.add("active");

};
Gb4Key.addEventListener("click", playGb4);

//G4
const G4Key = document.querySelector(".G4");
const playG4 = () => {
    playSound(G4);
    G4Key.classList.add("active");

};
G4Key.addEventListener("click", playG4);

//Ab4
const Ab4Key = document.querySelector(".Ab4");
const playAb4 = () => {
    playSound(Ab4);
    Ab4Key.classList.add("active");

};
Ab4Key.addEventListener("click", playAb4);

//A4
const A4Key = document.querySelector(".A4");
const playA4 = () => {
    playSound(A4);
    A4Key.classList.add("active");

};
A4Key.addEventListener("click", playA4);

//Bb4
const Bb4Key = document.querySelector(".Bb4");
const playBb4 = () => {
    playSound(Bb4);
    Bb4Key.classList.add("active");

};
Bb4Key.addEventListener("click", playBb4);

//B4
const B4Key = document.querySelector(".B4");
const playB4 = () => {
    playSound(B4);
    B4Key.classList.add("active");

};
B4Key.addEventListener("click", playB4);

//C5
const C5Key = document.querySelector(".C5");
const playC5 = () => {
    playSound(C5);
    C5Key.classList.add("active");

};
C5Key.addEventListener("click", playC5);

//Db5
const Db5Key = document.querySelector(".Db5");
const playDb5 = () => {
    playSound(Db5);
    Db5Key.classList.add("active");

};
Db5Key.addEventListener("click", playDb5);

//D5
const D5Key = document.querySelector(".D5");
const playD5 = () => {
    playSound(D5);
    D5Key.classList.add("active");

};
D5Key.addEventListener("click", playD5);

//Eb5
const Eb5Key = document.querySelector(".Eb5");
const playEb5 = () => {
    playSound(Eb5);
    Eb5Key.classList.add("active");

};
Eb5Key.addEventListener("click", playEb5);

//E5
const E5Key = document.querySelector(".E5");
const playE5 = () => {
    playSound(E5);
    E5Key.classList.add("active");

};
E5Key.addEventListener("click", playE5);
