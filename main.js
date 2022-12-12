//On/Off comentários
const commentSection = document.querySelector('.card-comment');
var commentOn = false;
function comment(){
  if (commentOn == false){
    commentSection.style.display = 'block';
    commentOn = true;
  }else{
    commentSection.style.display = 'none';
    commentOn = false;
  }
};

//Likes
const likeBlank = document.querySelector('#hblank')
const likeFire = document.querySelector('#hfire')
const like = document.querySelector('#likenumber');
let likeOn = false;
let likeNum = 75;
function likeBtn(){
  if (likeOn == false){
    likeNum = likeNum + 1;
    like.innerHTML = likeNum;
    likeOn = true;
    likeBlank.style.display = 'none';
    likeFire.style.display = 'block';
  }else{
    likeNum = likeNum - 1;
    like.innerHTML = likeNum;
    likeOn = false;
    likeFire.style.display = 'none';
    likeBlank.style.display = 'block';
  } 
};

// share 
function share(){
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
