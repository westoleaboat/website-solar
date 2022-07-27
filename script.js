// console.log("hi")

document.addEventListener("click", (e) => {
  if (e.target.matches(".expand-button1")) {
    const card = e.target.closest(".show-card")
    const cardBody = card.querySelector(".business")

    cardBody.classList.remove("show")
  }
})

document.addEventListener("click", (e) => {
  if (e.target.matches(".expand-button")) {
    const card = e.target.closest(".show-card")
    const cardBody = card.querySelector(".business")

    cardBody.classList.add("show")
  }
})
