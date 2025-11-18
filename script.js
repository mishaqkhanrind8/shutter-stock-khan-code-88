if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("SW registration failed:", err));
}

// Select modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");
const modalClose = document.querySelector(".btn-close-1");

// Select ALL images using querySelectorAll
const images = document.querySelectorAll("#photo-grid img");

// Loop on all images
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";              // show modal
        modalImg.src = img.src;                   // show clicked image
        modalCaption.textContent = img.alt;       // show caption
    });
});

// Close modal
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
});

const modalPayment = document.getElementById("paymentModal");
const closeBtn = document.getElementById("modal-close");
const cancelBtn = document.getElementById("cancelBtn");

// All buttons that should open the modal
const openButtons = [
  document.getElementById("openModal"),     // sign up
  document.getElementById("openModal-1"),
];

// Loop through all buttons and add click listener
openButtons.forEach(btn => {
  if(btn) {
    btn.addEventListener("click", () => {
      modalPayment.style.display = "block"; // open modal
    });
  }
});

// Close modal via close button
if(closeBtn) {
  closeBtn.addEventListener("click", () => {
    modalPayment.style.display = "none";
  });
}

// Close modal via cancel button
if(cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    modalPayment.style.display = "none";
  });
}

// Optional: close modal when clicking outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modalPayment) {
    modalPayment.style.display = "none";
  }
});

const form = document.getElementById('contact-form');
const alertBox = document.querySelector('.alert');

form.addEventListener('submit', function(e) {

    e.preventDefault();  // page reload / redirect rok diya

    // alert smoothly show
    alertBox.classList.add('show');

   // Form reset
    form.reset();

    // 4 seconds baad hide
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 4000);
});

const modalNav = document.getElementById("sidebar");
const toggleManu = document.getElementById("btn-toggler");
const sidebarClose = document.getElementById("btn-close");

toggleManu.addEventListener("click", () => {
    modalNav.style.transform = "translateX(0)";
});

sidebarClose.addEventListener("click", () => {
    modalNav.style.transform = "translateX(-100%)";
});


console.log("js working")