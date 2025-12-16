const star = document.querySelector(".star");
const starsContainer = document.querySelector("#ratingStars");
console.log(star);

const addstar = () => {
  for (let i = 0; i < 10; i++) {
    const clone = star.cloneNode(true);
    starsContainer.appendChild(clone);
  }
};

addstar();
