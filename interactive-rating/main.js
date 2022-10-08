/* Selecting the elements from the HTML file. */
const mainContainer = document.querySelector(".main-container")
const mainThanks = document.querySelector(".main-thanks")
const submitButton = document.querySelector("#submit")
const rateAgain = document.querySelector("#rate-again")
const rating = document.querySelector(".rating")
const rates = document.querySelectorAll(".btn")

const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    const node = document.querySelector(element)

    node.classList.add(`${prefix}animated`, animationName)

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation()
      node.classList.remove(`${prefix}animated`, animationName)
      resolve("Animation ended")
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true })
  })

animateCSS(".main-container", "fadeIn")

animateCSS(".main-thanks", "fadeIn")


/* Adding an event listener to the submit button. When the submit button is clicked, the main-thanks
class is removed and the main-container is hidden. */
submitButton.addEventListener("click", () => {
  mainThanks.classList.remove("hidden")
  mainContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
  mainThanks.classList.add("hidden")
  mainContainer.style.display = "block"
})

/* Adding an event listener to each of the buttons. When the button is clicked, the rating is updated. */
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
    if (rates.classList.contains('isActive') == false) {
        rates.classList.add('isActive')
    }

  })
})

const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://echo.paw.cloud/");

// xhr.send(data);


import axios from "axios";

const options = {method: 'GET', url: 'https://dog.ceo/api/breeds/image/random'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});