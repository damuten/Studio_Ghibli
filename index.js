
document.querySelector(".soundSpirAway").addEventListener("click", function() {
    var audio = new Audio('sounds/SpirAway.mp3');
    audio.play();
});

document.querySelector(".soundSecrWorld").addEventListener("click", function() {
    var audio = new Audio('sounds/Secretworld.mp3');
    audio.play();
});


/*
var audio = document.getElementById('audioSpirAway');
var PlayPauseSpirAway = document.getElementById('PlayPauseSpirAway');
var count = 0;

function playPause() {
    if(count==0) {
        count=1;
        audioSpirAway.play();
    } else {
        count=0;
        audioSpirAway.pause();
    }
}
*/

