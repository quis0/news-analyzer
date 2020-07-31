import './index.css';

let elem = document.querySelector('.main-carousel');

let flkty = new Flickity('.main-carousel', {
  selectedAttraction: 0.018,
  arrowShape: {
    x0: 25,
    x1: 50, y1: 25,
    x2: 60, y2: 20,
    x3: 40
  }
});
