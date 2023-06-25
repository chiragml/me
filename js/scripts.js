window.addEventListener('DOMContentLoaded', (event) => {
  const sidebarWrapper = document.getElementById('sidebar-wrapper');
  let scrollToTopVisible = false;
  // Closes the sidebar menu
  const menuToggle = document.body.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    sidebarWrapper.classList.toggle('active');
    _toggleMenuIcon();
    menuToggle.classList.toggle('active');
  });

  // Closes responsive menu when a scroll trigger link is clicked
  var scrollTriggerList = [].slice.call(
    document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger')
  );
  scrollTriggerList.map((scrollTrigger) => {
    scrollTrigger.addEventListener('click', () => {
      sidebarWrapper.classList.remove('active');
      menuToggle.classList.remove('active');
      _toggleMenuIcon();
    });
  });

  function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector(
      '.menu-toggle > .fa-bars'
    );
    const menuToggleTimes = document.body.querySelector(
      '.menu-toggle > .fa-xmark'
    );
    if (menuToggleBars) {
      menuToggleBars.classList.remove('fa-bars');
      menuToggleBars.classList.add('fa-xmark');
    }
    if (menuToggleTimes) {
      menuToggleTimes.classList.remove('fa-xmark');
      menuToggleTimes.classList.add('fa-bars');
    }
  }

  // Scroll to top button appear
  document.addEventListener('scroll', () => {
    const scrollToTop = document.body.querySelector('.scroll-to-top');
    if (document.documentElement.scrollTop > 100) {
      if (!scrollToTopVisible) {
        fadeIn(scrollToTop);
        scrollToTopVisible = true;
      }
    } else {
      if (scrollToTopVisible) {
        fadeOut(scrollToTop);
        scrollToTopVisible = false;
      }
    }
  });
});

function fadeOut(el) {
  el.style.opacity = 1;
  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

const primaryNav = document.querySelector('.primary_nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visible = primaryNav.getAttribute('data-visible');
  console.log(visible);

  if (visible == 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('area-expanded', true);
  } else if (visible == 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('area-expanded', false);
  }
});

// window.onscroll = function () {
//   myFunction();
// };

// // Get the navbar
// var navbar = document.getElementById('navigation');

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky');
//   } else {
//     navbar.classList.remove('sticky');
//   }
// }
