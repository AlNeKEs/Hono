const overlay = document.getElementById("overlay");

// wishlist variable
const wishlist = document.getElementById("wish-list");
const wishBtn = document.querySelector(".wish-button");

//cartlist variable
const cartlist = document.getElementById("cart-list");
const cartBtn = document.querySelector(".cart-button");

//close button variable
const closeBtn = document.querySelectorAll(".close");

//show/hide wish list function
const showWish = () => {
  overlay.classList.add("show-overlay");
  wishlist.classList.add("show-wish-list");
};

const hideWish = () => {
  overlay.classList.remove("show-overlay");
  wishlist.classList.remove("show-wish-list");
};

wishBtn.addEventListener("click", showWish);

//show/hide cart list function
const showCart = () => {
  overlay.classList.add("show-overlay");
  cartlist.classList.add("show-cart-list");
};

const hideCart = () => {
  overlay.classList.remove("show-overlay");
  cartlist.classList.remove("show-cart-list");
};

cartBtn.addEventListener("click", showCart);

//hide list when click on overlay
overlay.addEventListener("click", () => {
  if (wishlist.classList.value === "show-wish-list") {
    hideWish();
  }
  if (cartlist.classList.value === "show-cart-list") {
    hideCart();
  }
});

//hide list when click close button
for (let btn of closeBtn) {
  btn.addEventListener("click", () => {
    if (wishlist.classList.value === "show-wish-list") {
      hideWish();
    }
    if (cartlist.classList.value === "show-cart-list") {
      hideCart();
    }
  });
}

// search field
const headerSearchBtn = document.getElementsByClassName("header-btn--search");
const searchField = document.querySelector(".search-field");
headerSearchBtn[0].addEventListener("click", () => {
  searchField.classList.add("show-search--field");
});

// close searchfield when click outside search field
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-btn--search")) {
    searchField.classList.remove("show-search--field");
  }
});

// show/hide contact
const contactBtn = document.querySelector(".contact-btn");
const contact = document.querySelector(".contact");
const closeContactBtn = document.querySelector(".close-contact");

contactBtn.addEventListener("click", () => {
  contact.classList.add("show-contact");
  overlay.classList.add("show-overlay");
});

document.addEventListener("click", (event) => {
  if (
    event.target.closest(".close-contact") ||
    event.target.closest("#overlay")
  ) {
    console.log("a");
    contact.classList.remove("show-contact");
    overlay.classList.remove("show-overlay");
  }
});

// slide
const slide1 = document.querySelector(".banner-content1");
const slide2 = document.querySelector(".banner-content2");
const banner = document.querySelector(".banner");
// button change slide
const slideLeft = document.querySelectorAll(".slide-left");
const slideRight = document.querySelectorAll(".slide-right");
var time = 5000;

const slide = () => {
  if (!slide1.className.includes("slide-show")) {
    slide1.classList.add("slide-show");
    slide2.classList.remove("slide-show");
  } else {
    slide1.classList.remove("slide-show");
    slide2.classList.add("slide-show");
  }
};

let interval = setInterval(slide, 3000);

for (left of slideLeft) {
  left.addEventListener("click", () => {
    slide();
    clearInterval(interval);
    interval = setInterval(slide, 3000);
  });
}
for (right of slideRight) {
  right.addEventListener("click", () => {
    slide();
    clearInterval(interval);
    interval = setInterval(slide, 3000);
  });
}

// BUTTON SLIDE ARRIVALS

const swiperLeft = document.querySelector(".arrivals-list--left");
const swiperRight = document.querySelector(".arrivals-list--right");

const arrivalsList = document.querySelector(".arrivals-list");
const newArrivals = document.querySelector(".new-arrivals");
const items = document.querySelectorAll(".arrivals-list .single-item");
const itemWidth = items[0].clientWidth;

let position = 0;
const slideShow = (elem, pos)=>{
  position = position + pos;
  console.log(position)
  console.log(newArrivals.clientWidth)
  if (position > 100) { 
    position = -elem.clientWidth+newArrivals.clientWidth ;
    console.log(`sau: ${position}`)
  }
   else if (position <= -elem.clientWidth -300  + newArrivals.clientWidth) {
    position = 0;
    console.log(position + "asdajksh")
  }

  elem.style.transform = "translateX(" + position + "px)";
}
swiperLeft.addEventListener("click", ()=>{
  slideShow(arrivalsList, itemWidth + 30);
})

swiperRight.addEventListener("click", ()=>{
  slideShow(arrivalsList, -itemWidth - 30);
})

// BUTTON SWIPPER BEST SELLER

const sellerLeft = document.querySelector(".swiper-list--left");
const sellerRight = document.querySelector(".swiper-list--right");
const sellerList = document.querySelector(".best-seller--list");
const sellerWrap = document.querySelector(".best-seller-wrap");
const sellerItem = document.querySelector(".best-seller-wrap .single-item");

let sellPosition = 0;

const slideSeller = (element, pos)=>{
    sellPosition +=pos;
    if(sellPosition > 100){
      sellPosition = -sellerList.clientWidth + sellerWrap.clientWidth;
    }
    else if(sellPosition <= -element.clientWidth -300  + newArrivals.clientWidth ){
      sellPosition = 0;
    }
    element.style.transform = `translateX(${sellPosition}px)`;
}
sellerLeft.addEventListener("click",()=>{
  slideSeller(sellerList, itemWidth + 30);
})
sellerRight.addEventListener("click",()=>{
  slideSeller(sellerList, -itemWidth - 30);
})