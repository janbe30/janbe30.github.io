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
const modalBtns = document.querySelectorAll(".modal-button");
const modals = document.querySelectorAll("modal");

function openModal() {
  console.log("open modal!");
  let modalToOpen = this.dataset.target;
  document.getElementById("modalToOpen").classList.add("is-active");
}

modalBtns.forEach((btn) => btn.addEventListener("click", openModal));
