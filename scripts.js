// JavaScript to switch between logos based on screen width
function updateLogoDisplay() {
const desktopLogo = document.querySelector('.desktop-logo');
const mobileLogo = document.querySelector('.mobile-logo');
if (window.innerWidth <= 768) {
    desktopLogo.style.display = 'none';
    mobileLogo.style.display = 'block';
} else {
    desktopLogo.style.display = 'block';
    mobileLogo.style.display = 'none';
}
}

// Initial check and update on page load
updateLogoDisplay();

// Event listener for window resize
window.addEventListener('resize', updateLogoDisplay);

const togglebutton = document.getElementById("togglebutton");

const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const body = document.body;

// Check if the user prefers dark mode
if (darkThemeQuery.matches) {
    body.classList.add("dark-mode");
    togglebutton.textContent = "☀️";
    togglebutton.style.padding = 0;
    togglebutton.style.fontSize = "20px";
    // togglebutton.style.background = "White";
} else {
    body.classList.add("light-mode");
    togglebutton.textContent = "🌙";
    togglebutton.style.padding = 0;
    togglebutton.style.fontSize = "20px";
    // togglebutton.style.background = "#444";
}

function toggleDarkMode() {
const body = document.body;
if (body.classList == 'dark-mode') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    togglebutton.textContent = "🌙";
    togglebutton.style.padding = 0;
    togglebutton.style.fontSize = "20px";
    togglebutton.style.background = "#444";
} 
else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    togglebutton.textContent = "☀️";
    togglebutton.style.padding = 0;
    togglebutton.style.fontSize = "20px";
    togglebutton.style.background = "White";
}
}

// Function to open the services dropdown
function openServicesDropdown() {
    const dropdownContent = document.querySelector('.services-dropdown-content');
    dropdownContent.style.display = 'block';
  }
  
  // Function to close the services dropdown
  function closeServicesDropdown() {
    const dropdownContent = document.querySelector('.services-dropdown-content');
    dropdownContent.style.display = 'none';
  }
  
  // Attach hover event listeners to the services button
  const servicesButton = document.querySelector('.services-dropdown');
  servicesButton.addEventListener('mouseenter', openServicesDropdown);
  servicesButton.addEventListener('mouseleave', closeServicesDropdown);
  
// Function to scroll to the services section
  function scrollToServicesSection() {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Attach click event listener to the services button to scroll to the section
  servicesButton.addEventListener('click', scrollToServicesSection);

// JavaScript function to highlight the section on mouse enter
function handleMouseEnter(event) {
    event.target.classList.add('highlighted-section');
}

// JavaScript function to remove highlight on mouse leave
function handleMouseLeave(event) {
    event.target.classList.remove('highlighted-section');
}

    // Get all sections and add event listeners
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);
});

// Close the dropdown when clicking anywhere else on the screen
document.addEventListener('click', function(event) {
    if (!event.target.closest('.services-dropdown')) {
    const dropdownContent = document.querySelector('.services-dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    }
    }
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.target.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// ScrollReveal animations
ScrollReveal().reveal('header img', { distance: '20px', origin: 'top', delay: 100 });
ScrollReveal().reveal('header p', { distance: '20px', origin: 'top', delay: 150 });
ScrollReveal().reveal('nav', { distance: '20px', origin: 'top', delay: 200 });
ScrollReveal().reveal('.container', { distance: '20px', origin: 'top', delay: 250 });
ScrollReveal().reveal('footer', { distance: '20px', origin: 'bottom', delay: 100 });

// Slide-in animation for "Our Services" section
const servicesSection = document.getElementById('services');
const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        servicesObserver.unobserve(entry.target);
    }
    });
}, {
    root: null,
    threshold: 0.01
});
    servicesObserver.observe(servicesSection);