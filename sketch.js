let openLetter, closedLetter;
let currentImage;

function preload() {
  closedLetter = loadImage('images/closedletter.png');
  openLetter = loadImage('images/openletter.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentImage = closedLetter;
  
  imageMode(CENTER);

  let button = createButton('open the letter');
  button.position((windowWidth/2 - button.width/2), 50);
  button.mousePressed(changeImage);
}

function draw() {
  background(0);
  image(currentImage, (windowWidth / 2), (windowHeight / 2));
}

function changeImage() {
  // Toggle the image
  if (currentImage === closedLetter) {
    currentImage = openLetter;
  } else {
    currentImage = closedLetter;
  }
}
