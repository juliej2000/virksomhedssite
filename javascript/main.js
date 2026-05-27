/* =============================================
   MAIN.JS
   Simple interactions for all pages:
   · Mobile navigation open/close
   · Footer accordion (mobile only)
   · Hide sticky CTA when footer is visible
   ============================================= */


/* -----------------------------------------------
   MOBILE NAVIGATION
----------------------------------------------- */

var mobileNav = document.querySelector(".mobile-nav");
var openBtn   = document.querySelector(".nav-hamburger");
var closeBtn  = document.querySelector(".mobile-nav-close");

// Open the menu
if (openBtn) {
  openBtn.addEventListener("click", function () {
    mobileNav.classList.add("is-open");
  });
}

// Close the menu
if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    mobileNav.classList.remove("is-open");
  });
}

// Also close the menu when any link inside it is clicked
var mobileNavLinks = document.querySelectorAll(".mobile-nav a");

mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("is-open");
  });
});


/* -----------------------------------------------
   FOOTER ACCORDION
   Works on mobile only — columns toggle open/closed
----------------------------------------------- */

var footerColBtns = document.querySelectorAll(".footer-col-btn");

footerColBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Only do the toggle on small screens
    if (window.innerWidth >= 768) return;

    var col = btn.closest(".footer-col");
    col.classList.toggle("is-open");
  });
});


/* -----------------------------------------------
   STICKY CTA
   Hide the sticky "Vis alle buketter" bar
   when the footer becomes visible on screen
----------------------------------------------- */

var stickyCta = document.querySelector(".sticky-cta");
var footer    = document.querySelector(".site-footer");

if (stickyCta && footer) {

  // IntersectionObserver watches when the footer enters the viewport
  var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      stickyCta.style.display = "none";   // footer visible — hide CTA
    } else {
      stickyCta.style.display = "";       // footer hidden — show CTA
    }
  });

  observer.observe(footer);
}
