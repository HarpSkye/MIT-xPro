var ball = document.getElementById('ball');
var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = false;

function moveBall(){
  var Xmin = 0; 
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  

if (reverse == false){
  positionX += velocity;
  positionY += velocity;
} else {
  positionX -= velocity;
  positionY -= velocity;
};

if(positionX > Xmax || positionX == Xmin){
  reverse =! reverse;
}
ball.style.top = positionY + 'px';
ball.style.left = positionX + 'px';
};
setInterval(moveBall, 100);
