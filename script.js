console.log('Pika Pika');

/* Basic interaction structures consist of:
    Declarations of relevant HTML-elements
    Functions where HTML-elements are manipulated
    Eventlisteners where elements respond to function call */


// The food appears

var feedbutton = document.querySelector('#feedbutton');
var feeddiv = document.querySelector('.feedelements');

function showfood() {
    console.log('The food has appeared, you can now feed pikachu');
    feeddiv.classList.toggle('visible');
    petdiv.classList.remove('visible');
    bathdiv.classList.remove('visible');
}

feedbutton.addEventListener('click', showfood);


// A hand appears

var petbutton = document.querySelector('#petbutton');
var petdiv = document.querySelector('.petelements');

function showhand() {
    console.log('A hand has appeared, you can now pet pikachu');
    petdiv.classList.toggle('visible');
    feeddiv.classList.remove('visible');
    bathdiv.classList.remove('visible');
}

petbutton.addEventListener('click', showhand);


// A sponge appears

var bathbutton = document.querySelector('#bathbutton');
var bathdiv = document.querySelector('.bathelements');

function showsponge() {
    console.log('A sponge has appeared, you can now bath pikachu');
    bathdiv.classList.toggle('visible');
    feeddiv.classList.remove('visible');
    petdiv.classList.remove('visible');
}

bathbutton.addEventListener('click', showsponge);


// Pikachu does not like carrots

var pikachu = document.querySelector('#pikachuhappy1');
var carrot = document.querySelector('#carrot');

function pikachuissad() {
    console.log('Pikachu does not like carrots, he has become sad...');
    pikachu.src = 'img/pikachu/pikachusad1.gif';
}

function pikachuishappy() {
    console.log('Pikachu is happy');
    pikachu.src = 'img/pikachu/pikachuhappy1.gif';
}

carrot.addEventListener('dragstart', pikachuissad);
carrot.addEventListener('dragend', pikachuishappy);


// Pikachu is being petted

var hand = document.querySelector('#hand');

function pikachuisbeingpet() {
    console.log('Pikachu is being pet');
    pikachu.src = 'img/pikachu/pikachupetting.png';
}

function pikachuishappy() {
    console.log('Pikachu is happy');
    pikachu.src = 'img/pikachu/pikachuhappy1.gif';
}

hand.addEventListener('dragstart', pikachuisbeingpet);
hand.addEventListener('dragend', pikachuishappy);


// Pikachu is bathing

var sponge = document.querySelector('#sponge');

function pikachuisbathing() {
    console.log('Pikachu is bathing');
    pikachu.src = 'img/pikachu/pikachubathing.png';
}

function pikachuishappy() {
    console.log('Pikachu is happy');
    pikachu.src = 'img/pikachu/pikachuhappy1.gif';
}

sponge.addEventListener('dragstart', pikachuisbathing);
sponge.addEventListener('dragend', pikachuishappy);


// Pikachu is eating a macaron
/* I made a function for a more efficient code (50 line reduction). By using a parameter, I know whether 
the pikachu is eating or drinking in the function. */

var macaron = document.querySelector('#macaron');
var bubbletea = document.querySelector('#bubbletea');
var consumptioncounter = 0;

function pikachuiscomsuming(consumption) {
    var text;
    consumptioncounter++;
    if (consumption == 0) {
        text = 'eaten ' + consumptioncounter + ' macaron';
    }
    if (consumption == 1) {
        text = 'drunk ' + consumptioncounter + ' bubbletea';
    }
    console.log('Pikachu has ' + text + '!');
    pikachu.src = 'img/pikachu/pikachueating' + consumptioncounter + '.gif';

    if (consumptioncounter == 5) {
        consumptioncounter = 0;
    }
}

function pikachuiseating() {
    pikachuiscomsuming(0);
}

function pikachuisdrinking() {
    pikachuiscomsuming(1);
}

macaron.addEventListener('dragstart', pikachuiseating);
macaron.addEventListener('dragend', pikachuisfat);

bubbletea.addEventListener('dragstart', pikachuisdrinking);
bubbletea.addEventListener('dragend', pikachuisfat);


// Counting pikachu's fat

var fatcounter = 0;

function pikachuisfat() {
    fatcounter++;
    switch (fatcounter) {
        case 1:
            console.log('Pikachu has become fatter!');
            pikachu.src = 'img/pikachu/pikachuhappy2.gif';
            break;
        case 2:
            console.log('Pikachu has become even fatter!');
            pikachu.src = 'img/pikachu/pikachuhappy3.gif';
            break;
        case 3:
            console.log('Pikachu has become really fat!');
            pikachu.src = 'img/pikachu/pikachuhappy4.gif';
            break;
        case 4:
            console.log('Pikachu has died...');
            pikachu.src = 'img/pikachu/pikachudead.png';
            break;
        case 5:
            fatcounter = 0;
            console.log('Pikachu has revived!');
            pikachu.src = 'img/pikachu/pikachuhappy1.gif';
            break;
        default:
            console.log('Pikachu has returned to his first state');
            pikachu.src = 'img/pikachu/pikachuhappy1.gif';
    }
}

// Background music

var music = document.querySelector('#backgroundmusic');
var soundbutton = document.querySelector('#soundbutton');

music.loop = true;

// The default state is false, because the background music start of muted.
var soundchecker = false;

function soundtoggle() {
    if (soundchecker) {
        console.log('Background music is off');
        music.pause();
        soundchecker = false;
        soundbutton.src = 'img/sound/soundoff.png';
    }
    else {
        console.log('Background music is on');
        music.play();
        soundchecker = true;
        soundbutton.src = 'img/sound/soundon.png';
    }
}

soundbutton.addEventListener('click', soundtoggle);

/* BRONNEN

    Background music:
    https://www.youtube.com/watch?v=6VmoWwqtFYw
    
    Keycode:
    https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
*/