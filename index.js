document.querySelectorAll("button").forEach(element => element.addEventListener("click", buttonClick));
function buttonClick() {
    var audio = findKey(this.innerHTML);
    audio.play();
    buttonAnimation(this.innerHTML);
    console.log(this.innerHTML);

}
/* var buttonArray = document.querySelectorAll("button");
for (var i=0; i<=buttonArray.length ; i++){

} */

document.addEventListener("keydown", function (e) {
    console.log(e.key);
    var audio = findKey(e.key);
    audio.play();
    buttonAnimation(e.key);
})

function findKey(key) {
    var audio;
    switch (key) {
        case 'w':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/tom-4.mp3");
            break;
    }
    return audio;
}

function buttonAnimation(key) {
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
}

