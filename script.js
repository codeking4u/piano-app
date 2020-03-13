var WHITE_KEYS = ['z','x','c','v','b','n','m'];
var BLACK_KEYS = ['s','d','g','h','j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key =>{
    key.addEventListener('click',()=>playNote(key));
    console.log('cs')

});

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener("ended",()=>key.classList.remove('active'));
}

document.addEventListener('keypress',(e)=>{
    if(e.repeat) return;
    var whiteIndex = WHITE_KEYS.indexOf(e.key);
    var blackIndex = BLACK_KEYS.indexOf(e.key);
    if(whiteIndex > -1) playNote(whiteKeys[whiteIndex]);
    if(blackIndex > -1) playNote(blackKeys[blackIndex]);
})