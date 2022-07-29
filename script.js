console.log("hi")

document.addEventListener("click", (e) => {
  if (e.target.matches(".contact__text__buttons__expand-button__business")) {
    const form = e.target.closest(".contact__text")
    const formPrivate = form.querySelector(".contact__text__private-form")
    const formBusiness = form.querySelector(".contact__text__business-form")

    formBusiness.classList.add("show")
    formPrivate.classList.remove("show")

    // let btnBusiness = document.querySelector(
    //   ".contact__text__expand-button__business"
    // )
    // btnBusiness.classList.add("active")
  }
})

document.addEventListener("click", (e) => {
  if (e.target.matches(".contact__text__buttons__expand-button__private")) {
    const form = e.target.closest(".contact__text")
    const formPrivate = form.querySelector(".contact__text__private-form")
    const formBusiness = form.querySelector(".contact__text__business-form")

    formBusiness.classList.remove("show")
    formPrivate.classList.add("show")

    // let btnBusiness = document.querySelector(
    //   ".contact__text__expand-button__business"
    // )
    // btnBusiness.classList.add("active")
  }
})

// document.addEventListener("click", (e) => {
//   if (e.target.matches(".contact__text__buttons__expand-button__private")) {
//     const form = e.target.closest(".contact__text")
//     const formPrivate = form.querySelector(".contact__text__private-form")

//     formPrivate.classList.toggle("show")

//     // let btnBusiness = document.querySelector(
//     //   ".contact__text__expand-button__business"
//     // )
//     // btnBusiness.classList.add("active")
//   }
// })

// const form = e.target.closest(".contact__text")
// const formPrivate = form.querySelector(".contact__text__private-form")

let functiOn = () => {
  const form = document.querySelector(".contact__text")
  const formPrivate = form.querySelector(".contact__text__private-form")
  formPrivate.classList.toggle("show")
}

functiOn()
