let homeScr = document.getElementById("home-scr");
let guestScr = document.getElementById("guest-scr");

let homeScore = 0;
let guestScore = 0;

function onePointH() {
    homeScore += 1;
    homeScr.textContent = homeScore;
}
function twoPointsH() {
    homeScore += 2;
    homeScr.textContent = homeScore;
}
function threePointsH() {
    homeScore += 3;
    homeScr.textContent = homeScore;
}
function onePointG() {
    guestScore += 1;
    guestScr.textContent = guestScore;
}
function twoPointsG() {
    guestScore += 2;
    guestScr.textContent = guestScore;
}
function threePointsG() {
    guestScore += 3;
    guestScr.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScr.textContent = homeScore;
    guestScr.textContent = guestScore;

}