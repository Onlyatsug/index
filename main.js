//On/Off Comentários
const commentCard = document.querySelector('.card-comment');
var commentIsActive = 0;

function CommentAction(){
  if (commentIsActive == 0){
    commentIsActive = 1;
    commentCard.style.display = 'flex';
  }else{
    commentIsActive = 0;
    commentCard.style.display = 'none';
  }
};

//Sistema de "Likes"
const likeOff = document.querySelector('#hoff');
const likeOn = document.querySelector('#hon');
const likeValue = document.querySelector('#likenumber');

let likeActive = 0;
let like = 1;

function Like(){
  if (likeActive == 0){
    like = '1,2k'
    likeValue.innerHTML = like;
    likeActive = 1;
    
    likeOff.style.display = 'none';
    likeOn.style.display = 'block';
  }else{
    like = '1,2k'
    likeValue.innerHTML = like;
    likeActive = 0;
    
    likeOn.style.display = 'none';
    likeOff.style.display = 'block';
  } 
};

// Música
const musicOff = document.querySelector('#moff');
const musicOn = document.querySelector('#mon');
const bgBeat = new Audio('tea_bg.mp3');
let musicActive = 0;

function Music(){
  if (musicActive == 0){
    musicActive = 1;
    bgBeat.play()
    
    musicOff.style.display = 'none';
    musicOn.style.display = 'block';
  }else{
    musicActive = 0;
    bgBeat.pause()
    
    musicOn.style.display = 'none';
    musicOff.style.display = 'block';
  } 
};

// Botão de Compartilhar 
function Share(){
  alert('Gu: me mande uma mensagem se quiser o/');
};

// Sons
function quack(){
  let beat = new Audio('quack.mp3');
  beat.play()
}
function disc(){
  let beat = new Audio('discord.mp3');
  beat.play()
}
