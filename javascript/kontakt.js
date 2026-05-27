/* =============================================

   KONTAKT.JS
   FAQ accordion — toggle open/close on click
   ============================================= */

var faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var item = btn.closest(".faq-item");

    // Close all other open items
    var allItems = document.querySelectorAll(".faq-item");
    allItems.forEach(function (other) {
      if (other !== item) {
        other.classList.remove("is-open");
      }
    });

    // Toggle this item
    item.classList.toggle("is-open");
  });
});
