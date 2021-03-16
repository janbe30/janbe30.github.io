// Navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Modal functionality
// NEED: Ability to close modal when clicking outside of modal
const modalBtns = document.querySelectorAll(".modal-button");
const modals = document.querySelectorAll("modal");

function toggleModal() {
  let modalTarget = this.dataset.target;
  let modalElem = document.getElementById(modalTarget);
  let htmlElem = document.querySelector("html");

  modalElem.classList.add("is-active");
  htmlElem.classList.add("is-clipped");
  let closeBtn = modalElem.querySelector("button.delete");
  closeBtn.addEventListener("click", () => {
    modalElem.classList.remove("is-active");
    htmlElem.classList.remove("is-clipped");
  });
}

modalBtns.forEach((btn) => btn.addEventListener("click", toggleModal));
