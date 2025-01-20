// Basic slider for quotes
const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showNextQuote() {
  quotes[currentQuote].style.display = 'none';
  currentQuote = (currentQuote + 1) % quotes.length;
  quotes[currentQuote].style.display = 'block';
}

// Initialize slider
quotes.forEach((quote, index) => {
  quote.style.display = index === 0 ? 'block' : 'none';
});

setInterval(showNextQuote, 5000);

const header = document.querySelector('header');
const video = document.querySelector('#header-video');

const maxHeight = window.innerHeight; // Full page height initially (in pixels)
const minHeight = 100; // Minimum height of the header (in pixels)
const scrollSpeed = 0.3; // Adjusting speed for smoother effect

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Calculate new height
  let newHeight = maxHeight - scrollPosition * scrollSpeed;

  // Constrain the height within min and max values
  newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

  // Apply new height to the header
  header.style.height = `${newHeight}px`;

  // Video remains proportional within header
  video.style.height = '100%';
});



// const header = document.querySelector('header');
// const video = document.querySelector('#header-video');
// const maxHeight = 100; // Full page height initially
// const minHeight = 50; // Minimum height of the header
// const scrollSpeed = 0.1; // Speed of height adjustment

// let lastScrollTop = 0; // Tracks the last scroll position

// window.addEventListener('scroll', () => {
//   const scrollPosition = window.scrollY;

//   // Determine the new height based on scroll position
//   let newHeight = maxHeight - scrollPosition * scrollSpeed;

//   // Constrain the height within the min and max limits
//   newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

//   // Apply the new height to the header and video
//   header.style.height = `${newHeight}%`;
//   video.style.height = `${newHeight}%`;

//   // Ensure smooth transition effect
//   header.style.transition = 'height 0.2s ease';
//   video.style.transition = 'height 0.2s ease';
// });

// Square

// let lastScrollTop = 0; 
// const header = document.querySelector('header');
// const video = document.querySelector('#header-video');
// const maxHeight = 220; // Initial height of the header
// const minHeight = 80; // Minimum height of the header
// const scrollSpeed = 0.2; // Scroll speed multiplier

// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;

//   // Calculate the scale factor based on the scroll position
//   const scaleFactor = 1 - (scrollPosition * scrollSpeed / maxHeight);
  
//   // Prevent the header from getting too small or too large
//   const finalScale = Math.max(Math.min(scaleFactor, 1), 0.5); 

//   // Apply the scale transformation to both header and video
//   header.style.transform = `scale(${finalScale})`;
//   video.style.transform = `scale(${finalScale})`;
// });