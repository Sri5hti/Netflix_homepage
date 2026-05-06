// SELECT ALL MOVIE ROWS
const rows = document.querySelectorAll(".movie-row");

rows.forEach((row) => {
  const list = row.querySelector(".movie-list");

  let autoScroll;

  //AUTO SCROLL
  function startAutoScroll() {
    autoScroll = setInterval(() => {
      list.scrollLeft += 1;

      // loop back
      if (list.scrollLeft >= list.scrollWidth - list.clientWidth) {
        list.scrollLeft = 0;
      }
    }, 20);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  // start scrolling
  startAutoScroll();

  // pause on hover
  list.addEventListener("mouseenter", stopAutoScroll);
  list.addEventListener("mouseleave", startAutoScroll);
});


//NAVBAR BACKGROUND ON SCROLL (Netflix feel)
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#141414";
  } else {
    header.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)";
  }
});


//SIGN IN BUTTON (basic interaction)
const signInBtn = document.querySelector(".signin-btn");

if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    alert("Sign In feature coming soon!");
  });
}


//EMAIL CTA BUTTON
const ctaBtn = document.querySelector(".cta-form button");
const emailInput = document.querySelector(".cta-form input");

if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Enter a valid email");
    } else {
      alert("Welcome! Account creation coming soon.");
    }
  });
}


//NAV LINK CLICK EFFECT (active state)
const navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});