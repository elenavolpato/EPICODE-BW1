// Star generator
const star = document.querySelector(".star");
const starsContainer = document.querySelector("#ratingStars");

starsContainer.textContent = "";

const addstar = () => {
  for (let i = 0; i < 10; i++) {
    const clone = star.cloneNode(true);
    starsContainer.appendChild(clone);
  }
};

addstar();

// Star selector
const stars = starsContainer.querySelectorAll(".star");
console.log(stars);

for (let i = 0; i < stars.length; i++) {
  const star = stars[i];
  star.addEventListener("click", (e) => {
    stars.forEach((s) => s.classList.remove("starActive")); // star deactivator
    for (let x = 0; x < i + 1; x++) {
      stars[x].classList.add("starActive");
    }
  });
}
