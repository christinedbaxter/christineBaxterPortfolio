// Add click event listener using event delegation
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('collapsible')) {
    event.target.classList.toggle('active');
    var content = event.target.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
});

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the sticky header
    const target = document.querySelector(this.getAttribute('href'));
    const targetPosition = target.offsetTop - headerHeight; // Adjust the target position by subtracting the header height

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});


// JavaScript code for sticky header
window.addEventListener('scroll', function() {
  var section = document.querySelector('section');
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});