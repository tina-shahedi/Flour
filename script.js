document.addEventListener('DOMContentLoaded', function() {
  // Update copyright year
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;

  // Add scroll behavior for the "Explore Our Creations" button
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add event listeners for scroll buttons
  const exploreButton = document.querySelector('.explore-button');
  const scrollDownButton = document.querySelector('.scroll-down-button');
  
  if (exploreButton) {
    exploreButton.addEventListener('click', handleScrollDown);
  }
  
  if (scrollDownButton) {
    scrollDownButton.addEventListener('click', handleScrollDown);
  }

  // Add scroll effect for navbar
  const handleNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);

  // Initialize intersection observers for animations
  const observerOptions = { threshold: 0.1 };
  const fadeUpElements = document.querySelectorAll('.should-animate');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
      }
    });
  }, observerOptions);
  
  fadeUpElements.forEach(el => observer.observe(el));

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('translate-x-full');
      mobileMenu.classList.toggle('translate-x-0');
    });
  }

  // Section links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      const section = document.getElementById(target || '');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
      }
    });
  });
});

document.querySelectorAll('.flip-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.flip-container');
      card.classList.toggle('rotate-y-180');
    });
  });

   document.querySelectorAll('.flip-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const inner = trigger.querySelector('.card-inner');
      inner.classList.toggle('rotate-y-180');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.getElementById('close-menu');
  
    // Open menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });
  
    // Close menu
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
      });
    }
  
    // Optional: Close when a nav link is clicked
    document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
      });
    });
  });
  