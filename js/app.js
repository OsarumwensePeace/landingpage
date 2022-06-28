/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navBarMenu = document.getElementById("navbar__list"); 
const navBarSections = [...document.querySelectorAll("section")];
/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav

const getNavBarMenuList = () => {
  for (navBarSection of navBarSections) {
    navBarSectionName = navBarSection.getAttribute("data-nav");
    navLinkSection = navBarSection.getAttribute("id");

    navMenuList = document.createElement("li");
    navMenuList.innerHTML = `<a class='menu__link' href='#${navLinkSection}'>${navBarSectionName}</a>`;

    navBarMenu.appendChild(navMenuList);
  }
};

// Add class 'active' to section when near top of viewport

const currentSectionView = (view) => {
  let currentView = view.getBoundingClientRect();
  return currentView.top <= 150 && currentView.bottom >= 150;
};

const makeCurrentViewportActiveClass = () => {
  for (navBarSection of navBarSections) {
    if (currentSectionView(navBarSection)) {
      if (!navBarSection.classList.contains("your-active-class")) {
        navBarSection.classList.add("your-active-class");
      }
    } else {
      navBarSection.classList.remove("your-active-class");
    }
  }
};

// Scroll smoothly to section on anchor click

const goodScroll = () => {
  document.querySelectorAll(".menu__link").forEach((anchor) => {

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

getNavBarMenuList();

// Scroll to section on link click

goodScroll();

// Set sections as active

document.addEventListener("scroll", makeCurrentViewportActiveClass);

/* End of Code :) */
