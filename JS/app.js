let homeScr = document.getElementById("home-scr");
let guestScr = document.getElementById("guest-scr");

let homeScore = 0;
let guestScore = 0;

function addPointsHome(number) {
    homeScore += number;
    homeScr.textContent = homeScore;
}
function addPointsAway(number) {
    homeScore += number;
    homeScr.textContent = homeScore;
}


function reset() {
    homeScore = 0;
    guestScore = 0;
    homeScr.textContent = homeScore;
    guestScr.textContent = guestScore;

}

