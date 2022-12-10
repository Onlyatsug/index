//On/Off comentários
const commentBtn = document.querySelector('.comment-i');
const commentSection = document.querySelector('.card-comment');

let commentOn = false;

commentBtn.addEventListener('click', function(){
  if (commentOn == false){
    commentSection.style.display = 'block';
    commentOn = true;
  }else{
    commentSection.style.display = 'none';
    commentOn = false;
  }
});

//Likes
const like = document.querySelector('#likenumber');
const likeBtn = document.querySelector('.like-i');

let likeOn = false;
let likeNum = 16;

likeBtn.addEventListener('click', function(){
  if (likeOn == false){
    likeNum = likeNum + 1;
    like.innerHTML = likeNum
    likeOn = true
  }else{
    likeNum = likeNum - 1;
    like.innerHTML = likeNum
    likeOn = false
  }
});

const share = document.querySelector('.share-i');

share.addEventListener('click', function(){
  alert('From Gu: Por que diabos alguém iria compartilhar um site assim?')
})
