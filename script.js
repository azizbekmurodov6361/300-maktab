const cardsContainer = document.querySelector('.cardsc');
const visibleCards = 3; 

function updateCarousel() {
  const firstCard = cardsContainer.firstElementChild; 
  const cardWidth = firstCard.offsetWidth + 20; 

  cardsContainer.style.transition = 'transform 1s ease-in-out';
  cardsContainer.style.transform = `translateX(-${cardWidth}px)`;

  setTimeout(() => {
    cardsContainer.style.transition = 'none'; 
    cardsContainer.style.transform = 'translateX(0)'; 
    cardsContainer.appendChild(firstCard); 
  }, 1000); 
}

setInterval(updateCarousel, 3000); 


const cardsContainer_2 = document.querySelector('.cardsc_2');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function moveToSlide(index) {
  const cardWidth_2 = cardsContainer_2.firstElementChild.offsetWidth + 20; 
  cardsContainer_2.style.transform = `translateX(-${index * cardWidth_2}px)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentIndex = index;
}

// Add auto-scroll (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % dots.length;
  moveToSlide(currentIndex);
}, 5000);
