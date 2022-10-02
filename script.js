//getting variables
const ratingCard = document.querySelector(".rating-card");
const thankCard = document.querySelector(".thankyou-card");
const btn = document.querySelector(".btn");
const ratingBtn = document.querySelectorAll(".rate");
const ratingValue = document.querySelector(".rating-value");

//channging Cards on buttun
btn.addEventListener("click", () => {
  if (thankCard.classList.contains("hide")) {
    thankCard.classList.remove("hide");
    ratingCard.classList.add("hide");
  } else {
    thankCard.classList.add("hide");
    ratingCard.classList.remove("hide");
  }
});

//getting rating value with foreach and sending to thankyouCard
ratingBtn.forEach((element) => {
  element.addEventListener("click", () => {
    ratingValue.innerHTML = element.innerHTML;
  });
});
