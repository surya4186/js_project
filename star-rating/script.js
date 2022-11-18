const stars = document.querySelectorAll(".star");
const current_rating = document.querySelector(".current-rating");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    let current_index = index + 1;
    current_rating.innerText = current_index;
    // console.log(current_index);

    stars.forEach((star, indx) => {
      if (current_index > indx) {
        star.innerHTML = "&#9733;";
      } else {
        star.innerHTML = "&#9734;";
      }
    });
  });
});
