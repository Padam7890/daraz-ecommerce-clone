// Import statement
import arrayList from "./array.js";

// Element references
const productCard = document.getElementById("productcard");
const search = document.getElementById("search");
const recommenedProduct = document.getElementById("recommened-product");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Utility function to shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Generate stars/rating based on arrayList
function productStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fa-solid fa-star"></i>';
  }

  if (halfStar) {
    starsHTML += '<i class="fa-solid fa-star-half"></i>';
  }

  return starsHTML;
}

// Render product cards based on arrayList
function renderProductCards() {
  arrayList.forEach((element) => {
    const data = `
      <a href="#">
         <div class="fs-card-img-container">
            <img class="fs-card-img" alt="Ultima Atom" src="${element.productImage}">
         </div>
         <div class="card-text">
            <div class="card-title">${element.productTitle}</div>
            <div class="card-price">
               <span class="currency">Rs.</span><span class="price">${element.productPrice}</span>
            </div>
            <div class="card-origin-price">
               <span class="origin-price">
                  <span class="currency">Rs.</span><span class="price">${element.productRegularPrice}</span>
               </span>
               <span class="discount">
                  -${element.discountedPrice}%
               </span>
            </div>
            <div class="ratings-comments">
               ${productStars(element.stars)}
               <p>(${element.commentCounts})</p>
            </div>
         </div>
      </a>
   `;

    productCard.innerHTML += data;
    recommenedProduct.innerHTML += data;
  });
}

// Timer function for flash sales
function startTimer() {
  let hours = parseInt(hoursElement.textContent);
  let minutes = parseInt(minutesElement.textContent);
  let seconds = parseInt(secondsElement.textContent);

  let countdown = setInterval(function () {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(countdown);
      restartTimer();
    } else {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          hours--;
          minutes = 59;
          seconds = 59;
        }
      }

      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  }, 1000);
}

function restartTimer() {
  // Reset the timer to some initial values
  hoursElement.textContent = "10";
  minutesElement.textContent = "05";
  secondsElement.textContent = "00";

  // Restart the timer
  startTimer();
}


// Event listener for search
search.addEventListener("click", function () {
  window.location.href = "/category.html";
});

// Start the timer when the page loads
startTimer();

// Shuffle the array before rendering product cards
shuffleArray(arrayList);

// Render product cards
renderProductCards();
