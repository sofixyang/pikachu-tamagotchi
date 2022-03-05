console.log('Start Game');

// Press space to start

var spacepressed = false;

document.body.addEventListener("keydown", function (event) {
    if (event.code === 'Space' && spacepressed==false) {
        spacepressed = true;
        window.location.replace("pikachugame.html");
    }
});