import arrayList from "./array.js";

const productAll = document.getElementById("product-all");

const crossIcon = document.getElementById("cross-icon");
const openFilterPanel = document.getElementById("openFilterPanel");
const filterPanel = document.getElementById("filterPanel");

//product func
function productFetch() {
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
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <p>(${element.commentCounts})</p>
             </div>
           
           </div>
         </a> 
           `;
    productAll.innerHTML += data;
  });
}

//filterPanel Func
function filters() {
  openFilterPanel.addEventListener("click", function (e) {
    e.stopPropagation();
    filterPanel.classList.toggle("show");
  });
  crossIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    filterPanel.classList.toggle("show");
  });

  document.body.addEventListener("click", function () {
    filterPanel.classList.remove("show");
   });
}

// calling func
productFetch();
filters();
