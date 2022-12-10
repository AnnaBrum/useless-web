/* STAR-CONTAINER
Stolen from: https://dev.to/nicm42/creating-stars-using-javascript-46ca and modified to meet my needs*/

/* places the stars randomly. Math.random() funciton returns a decimal-number between 0-1 */
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

/* Applies the div with class StarContainer as canvas for the stars. Then counts the size of the starContainer(which is responsive to the view-window) and sets the fraction that will contain stars to 2000*/
const starContainer = document.querySelector('.star-container');
const containerSize = starContainer.offsetWidth * starContainer.offsetHeight;
const starsFraction = containerSize / 2000;

/* To place each star randomly on x and y-axis, and set opacity and size randomly between two values*/
for (let i = 0; i < starsFraction; i++) {
  let xAxis = random(0, 100);
  let yAxis = random(0, 100);
  let alpha = random(0.2, 1);
  let size = random(0.5, 2);

  /* then each of the stars is added to the starContainer */
  const star = document.createElement('div');
  star.style.position = 'relative';
  star.style.left = xAxis + '%';
  star.style.top = yAxis + '%';
  star.style.opacity = alpha;
  star.style.width = size + 'px';
  star.style.height = size + 'px';


  const starColors = ['#c6f7f7', '#d9fcf1', '#fccfe6', '#ffffff', '#f7f7c8'];
  /*  A for-loop that distributes random background-color for each star */
  for (let i = 0; i < starColors.length; i++) {
    let randomColor = Math.floor(Math.random() * starColors.length);
    star.style.backgroundColor = starColors[randomColor];
  }

  starContainer.appendChild(star);

  /* Makes stars glow on scroll */
  window.addEventListener('scroll', (event) => {
    star.classList.toggle('glow');
  });
}

/* IMAGES */

/* Array of items which loops when being clicked */
const items = [
  { src: './images/bananas.png', alt: 'bananas' },
  { src: './images/chair.png', alt: 'chair' },
  { src: './images/dog.png', alt: 'dog' },
  { src: './images/hen.png', alt: 'hen' },
  { src: './images/money.png', alt: 'money' },
  { src: './images/cheese.png', alt: 'cheese' },
  { src: './images/musk.png', alt: 'Elon Musk' },
  { src: './images/mug.png', alt: 'mug' },
  { src: './images/rose.png', alt: 'rose' },
  { src: './images/shoe.png', alt: 'shoe' },
];

const itemContainer = document.querySelector('.item-container');

/* map creates a new array of items which can be manipulated */
const images = items.map(({ src, alt }) => {
  //same as: let {src, alt}  = {src: './images/shoe.png', alt:"shoe"}
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  image.className = 'hidden';
  itemContainer.appendChild(image);
  return image;
});

let currentImageIndex = 0;
images[currentImageIndex].classList.remove('hidden');

function resetImage(imageIndex) {
  /* timer that runs resetImage-function after 2s, so that the image can start again from the initial position */
  window.setTimeout(function () {
    images[imageIndex].classList.remove('move');
    images[imageIndex].classList.add('hidden');
  }, 2000);
}

itemContainer.addEventListener('click', () => {
  /* first click adds class move to image */
  images[currentImageIndex].classList.add('move');

  resetImage(currentImageIndex);
  /* then moves on to next image in count */
  currentImageIndex++;
  /* Starts back on first image after the last is clicked */
  if (currentImageIndex > images.length - 1) {
    currentImageIndex = 0;
  }
  /* then removes the class 'hidden' on the new image displayed */
  images[currentImageIndex].classList.remove('hidden');
});

/* DANCING BLACK HOLE */

const blackHole = document.querySelector('.hole');

blackHole.addEventListener('click', () => {
  blackHole.classList.toggle('spin');
})
