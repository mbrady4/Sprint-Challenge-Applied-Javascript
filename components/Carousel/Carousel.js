/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let currentImage = 0;
const carouselCreator = () => {
  const container = document.createElement('div');
  container.classList.add('carousel');

  const leftArrow = document.createElement('div');
  leftArrow.classList.add('left-button');
  container.appendChild(leftArrow);

  leftArrow.addEventListener('click', (event) => {
    advance(-1);
  })

  srcs = ['./assets/carousel/mountains.jpeg',
          './assets/carousel/computer.jpeg',
          './assets/carousel/trees.jpeg',
          './assets/carousel/turntable.jpeg']

  for (let i = 0; i < srcs.length; i++) {
    let image = document.createElement('img');
    image.setAttribute('src', srcs[i]);
    image.classList.add('carousel-image');
    if (i == 0) {
      image.classList.add('show');
    }
    container.appendChild(image);
  }

  const rightArrow = document.createElement('div');
  rightArrow.classList.add('right-button');

  rightArrow.addEventListener('click', (event) => {
    advance(1);
  })

  container.appendChild(rightArrow);

  return container;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());

let count = 0
const advance = (num) => {
  images = document.getElementsByClassName('carousel-image');

  let currentImage = images[count];
  currentImage.classList.toggle('show');
  count += num;
  if (count > 3) {
    count = 0;
  }
  if (count < 0) {
    count = 3;
  }
  let newImage = images[count];
  newImage.classList.toggle('show');
}