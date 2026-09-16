// ===============================
// HERO BUTTONS
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const memoriesBtn = document.getElementById("memoriesBtn");

surpriseBtn.addEventListener("click", () => {
  document.getElementById("surpriseSection").scrollIntoView({
    behavior: "smooth"
  });
});

memoriesBtn.addEventListener("click", () => {
  document.getElementById("memories").scrollIntoView({
    behavior: "smooth"
  });
});


// ===============================
// BIRTHDAY WISH
// ===============================

const wishBtn = document.getElementById("wishBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

wishBtn.addEventListener("click", () => {

  hiddenMessage.classList.toggle("show");

  if (hiddenMessage.classList.contains("show")) {

    wishBtn.textContent = "My wish is made ♡";

    createFloatingHearts();

  } else {

    wishBtn.textContent = "Make My Wish 💖";

  }
});


// ===============================
// FLOATING HEARTS
// ===============================

function createFloatingHearts() {

  const container =
    document.getElementById("floatingHearts");

  const symbols = [
    "♡",
    "♥",
    "✿",
    "✨"
  ];

  const colors = [
    "#e78bab",
    "#c9a3e7",
    "#e5b66f"
  ];

  for (let i = 0; i < 20; i++) {

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.textContent =
      symbols[i % symbols.length];

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.fontSize =
      15 + Math.random() * 20 + "px";

    heart.style.animationDuration =
      3 + Math.random() * 3 + "s";

    heart.style.color =
      colors[i % colors.length];

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6500);
  }
}