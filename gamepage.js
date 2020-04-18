//Load images
function loadImages() {
  virusImage = new Image();
  virusImage.src = "Assets/virus.png";
}

//Initialize the game
function init() {
  //Selecting the canvas and creating the pen
  canvas = document.getElementById("myCanvas");
  pen = canvas.getContext("2d");

  //Change the width and the height of the canvas
  w = 700;
  h = 500;
  canvas.width = w;
  canvas.height = h;

  //ceate virus on the screen
  virus = {
    x: 60,
    y: 60,
    width: 80,
    height: 80,
    speed: 20,
  };
}

//Add movement to the virus
function draw() {
  //clearing the previous virus everytime
  pen.clearRect(0, 0, w, h);
  //drawing the virus on screen
  pen.fillStyle = "red";
  pen.drawImage(virusImage, virus.x, virus.y, virus.width, virus.height);
  //pen.fillRect(virus.x, virus.y, virus.width, virus.height);
}

function update() {
  virus.y += virus.speed;
  if (virus.y > h - virus.height || virus.y < 0) {
    virus.speed *= -1;
  }
}

function gameloop() {
  draw();
  update();
}

//start the game
loadImages();
init();

//calling gameloop again and again
setInterval(gameloop, 100);
