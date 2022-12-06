/* USELESS-WEB REQUIREMENTS
1.  1 av 2
The project should use at least two types of event listeners for example scroll, click and keypress.

2.  0
The project should use some kind of iteration for example map, forEach or for.

3.  Klar
The project should use arrays or objects or both to store values.

4.
The project should have a nice user interface with consistent margins and paddings.

5.
The project should use CSS variables for colors and font families..

6.
The project should use at least one self hosted font with woff and woff2 format.

7.
The project should be responsive and be built using the method mobile-first.

8.
The project should use responsive images when using images.

9.
The project should implement an accessible graphical user interface.

10.
The repository should be created from the template repository yrgo/template-useless-web

11.
The project must not include any coding errors, warning or notices.

12.
The project must be tested on at least two of your classmates computers. Add the testers names to the README.md file.

13.
The project should be deployed to either Netlify or Vercel

14.
The application should be pushed to a public repository on GitHub.

15.
The application should be useless 🙅‍♀️ */

/* STAR-CONTAINER */
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

const starContainer = document.querySelector('.star-container');
const canvasSize = starContainer.offsetWidth * starContainer.offsetHeight;
const starsFraction = canvasSize / 2000;

for (let i = 0; i < starsFraction; i++) {
  // Set up random elements
  let xAxis = random(0, 100);
  let yAxis = random(0, 100);
  let alpha = random(0.5, 1);
  let size = random(1, 2);
  let colour = '#ffffff';

  // Add them to the body
  const star = document.createElement('div');
  star.style.position = 'relative';
  star.style.left = xAxis + '%';
  star.style.top = yAxis + '%';
  star.style.opacity = alpha;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.backgroundColor = colour;
  starContainer.appendChild(star);
}

/* Array of items which loops when being clicked*/
const items = [
  './images/bananas.png',
  './images/chair.png',
  './images/dog.png',
  './images/hen.png',
  './images/money.png',
];

const itemContainer = document.querySelector('.item-container');
const item = document.querySelector('#item')

let currentImageIndex = 0;
item.addEventListener('click', () => {
  item.classList.add('move');
  item.src = items[currentImageIndex];
  currentImageIndex++;

  if (currentImageIndex > items.length -1) {
    currentImageIndex = 0;
  }
})


// function moveImage(e) {
//   item.style.position = "relative";
//   item.style.top = "100px";
//   e.preventDefault();
// }