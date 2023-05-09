/* We need to write some Js so when we press a key, we´re gonna find the audio element 
we asociated to that key and play it and also the div with its animation */

// We're gonna use the window event listener on keydown and a function that
// find the audio asociated to the key and class for the transition
// To end the transition we need to create another for that but only with the transform property name


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //Stop the function from runnig all together

    key.classList.add('playing');
    audio.currentTime = 0; //rewind the sound with each press
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);