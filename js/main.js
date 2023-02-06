let navLinks = document.querySelector(".links-nav");
let myAccount = document.querySelector(".account");
let login = document.querySelector(".login-cart");
let search = document.querySelector(".icon-search");
let searchInput = document.querySelector(".search-input");
let shoppingBag = document.querySelector(".shopping-bag");
let cart = document.querySelector(".cart");
let closeBtn = document.querySelector(".close");
let closeNav = document.querySelector(".links-nav .close");
let layOut = document.querySelector(".layout");
let toggler = document.querySelector(".toggler");
let megaMenu = document.querySelector(".mega-menu");
let arrow = document.querySelector(".arrow");
let cartItems = document.querySelector(".total-count");
let productItem = document.querySelectorAll(".product-items .row");
const showProduct =document.querySelectorAll(".icon-cart i");
let showContainer = document.querySelector(".show-product .container .row-col");
let showItem = document.querySelector(".show-product");
let cartBody = document.querySelector(".cart-body");
let paraCart = document.querySelector(".cart-body p");
let cartTotal = document.querySelector(".total");
let shippingMsg = document.querySelector(".shipping p ");
let shipping = document.querySelector(".shipping");
let shippingIcon = document.querySelector(".shipping .icon-shipping");
let footerInfo = document.querySelectorAll(".footer ul");
let footerArrow = document.querySelectorAll(".footer .arrow");
let span = document.querySelector(".up")
let wishItem = document.querySelector(".wish-list span");
let heartIcons = document.querySelector(".heart-icon");
let wishlistCart = document.querySelector(".wishlist-cart");
let closeWishlist = document.querySelector(".wishlist-cart .close");
let wishSaved = document.querySelector(".wishlist-table tbody ");
let wishlistTable = document.querySelector(".wishlist-table");
let wishPara = document.querySelector(".wishlist-cart p");
let wishlistConatiner = document.querySelector(".wishlist-cart");
let closeShow = document.querySelector(".show-product .close");
  const items = [
   {
     "id": "1",
     "title": "Airtight Wireale",
     "price": 65.00,
     "img": "../imgs/product-1.png",
     "class": "feat"
   },
   {
     "id": "2",
     "title": "Quace Brand",
     "price": 15.00,
     "img": "../imgs/product-2.png",
     "class": "feat"
   },
   {
     "id": "3",
     "title": "Bluetooth Laptop",
     "price": 35.00,
     "img": "../imgs/product-3.png",
     "class": "feat"
   },
   {
     "id": "4",
     "title": "Cradle Bluetooth",
     "price": 28.00,
     "img": "../imgs/product-4.png",
     "amount": 1,
     "class": "feat"
   },
   {
     "id": "5",
     "title": "Canon Remote",
     "price": 16.00,
     "img": "../imgs/product-5.png",
     "amount": 1,
     "class": "feat"
   },
   {
     "id": "6",
     "title": "Samsung Smart",
     "price": 34.00,
     "img": "../imgs/product-6.png",
     "amount": 1,
     "class": "feat"
   },
   {
     "id": "7",
     "title": "Mi Watch Android",
     "price": 25.00,
     "img": "../imgs/product-7.png",
     "amount": 1,
     "class": "feat"
   },
   {
     "id": "8",
     "title": "JBL Portable",
     "price": 20.00,
     "img": "../imgs/product-8.png",
     "amount": 1,
     "class": "feat"
   },
   {
   "id": "9",
   "title": "Echo Protable",
   "price": 15.00,
   "img": "../imgs/product9.png",
   "amount": 1,
   "class": "best"
  },
  {
    "id": "10",
    "title": "Samsung Smart",
    "price": 34.00,
    "img": "../imgs/product-10.png",
    "amount": 1,
    "class": "best"

   },
   {
    "id": "11",
    "title": "Echo Protable",
    "price": 15.00,
    "img": "../imgs/product11.png",
    "amount": 1,
    "class": "best"
   },
   {
    "id": "12",
    "title": "Airtight Wireale",
    "price": 65.00,
    "img": "../imgs/product-12.png",
    "class": "best"
  },
  {
  "id": "13",
  "title": "Quace Brand",
  "price": 15.00,
  "img": "../imgs/product-13.png",
  "class": "best"
  },
  {
  "id": "14",
  "title": "Bluetooth Laptop",
  "price": 35.00,
  "img": "../imgs/product-14.png",
  "class": "best"

},
{
  "id": "15",
  "title": "Cradle Bluetooth",
  "price": 28.00,
  "img": "../imgs/product-15.png",
  "amount": 1,
  "class": "best"
},
{
  "id": "16",
  "title": "Canon Remote",
  "price": 16.00,
  "img": "../imgs/product-16.png",
  "amount": 1,
  "class": "best"
},
{
  "id": "17",
  "title": "Samsung Smart",
  "price": 34.00,
  "img": "../imgs/product-17.png",
  "amount": 1,
  "class": "arr"
},
{
  "id": "18",
  "title": "Airtight Wireale",
  "price": 65.00,
  "img": "../imgs/product-1.png",
  "class": "feat",
  "class": "arr"
},
{
  "id": "19",
  "title": "Quace Brand",
  "price": 15.00,
  "img": "../imgs/product-2.png",
  "class": "feat",
  "class": "arr"
},
{
"id": "20",
"title": "Quace Brand",
"price": 15.00,
"img": "../imgs/product-13.png",
"class": "arr"
},
{
"id": "21",
"title": "Bluetooth Laptop",
"price": 35.00,
"img": "../imgs/product-14.png",
"class": "arr"

},
{
"id": "22",
"title": "Cradle Bluetooth",
"price": 28.00,
"img": "../imgs/product-15.png",
"amount": 1,
"class": "arr"
},
{
"id": "23",
"title": "Canon Remote",
"price": 16.00,
"img": "../imgs/product-16.png",
"amount": 1,
"class": "arr"

},
{
"id": "24",
"title": "Samsung Smart",
"price": 34.00,
"img": "../imgs/product-17.png",
"amount": 1,
"class": "arr"
}

  ]

window.onscroll = function () {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");

  if(this.scrollY >= 500 ){
    navLinks.style.position = "fixed";
    navLinks.style.top = "0";
    navLinks.style.left = "0";
    navLinks.style.width = "100%";
  } else {
    navLinks.style.position = "";
  
  }
};


span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
footerArrow.forEach(arrow => {

  arrow.addEventListener("click", (e) => {

    let ul = e.target.parentElement.parentElement.nextElementSibling;
    setTimeout(() => {
      if(!ul.classList.contains('expand')) {
        ul.classList.add('expand');
        e.target.style.transform = " rotate(180deg)";
      } else if (ul.classList.contains('expand')) {
        ul.classList.remove('expand');
        e.target.style.transform = " rotate(0)";
  
      }
    }, 250)
  } )
})

closeShow.addEventListener('click', () => {

  if(showItem.classList.contains('active')) {
    showItem.classList.remove('active');
  }
})

arrow.addEventListener('click', () => {

  setTimeout(() => {

    if(!megaMenu.classList.contains('expand') ) {
      megaMenu.classList.add('expand');
      arrow.style.transform = " rotate(180deg)";
    } else if (megaMenu.classList.contains('expand')) {
      megaMenu.classList.remove('expand');
      arrow.style.transform = " rotate(0)";

    }
  }, 250)
})
toggler.addEventListener('click', () => {

  setTimeout(() => {

    if(!navLinks.classList.contains('active') && !layOut.classList.contains("show")) {
      navLinks.classList.add('active');
      layOut.classList.add("show");
    }
  }, 250)
})
closeNav.addEventListener('click', () => {

  if(navLinks.classList.contains('active') && layOut.classList.contains("show")) {
    navLinks.classList.remove('active');
    layOut.classList.remove("show");
  }
})

heartIcons.addEventListener('click', () => {

  setTimeout(() => {

    if(!wishlistCart.classList.contains('active')) {
      wishlistCart.classList.add('active');
    }
  }, 250)
})

closeWishlist.addEventListener('click', () => {

  if(wishlistCart.classList.contains('active')) {
    wishlistCart.classList.remove('active');
  }
})

function openCart() {
  shoppingBag.addEventListener('click', () => {

    setTimeout(() => {
  
      if(!cart.classList.contains('active') && !layOut.classList.contains("show")) {
        cart.classList.add('active');
        layOut.classList.add("show")
      }
    }, 250)
  })
}
openCart();
closeBtn.addEventListener('click', () => {

  if(cart.classList.contains('active') && layOut.classList.contains("show")) {
    cart.classList.remove('active');
    layOut.classList.remove("show");
  }
})
document.addEventListener('click', (e) => {

  const isCloest = e.target.closest('.cart');
  if(!isCloest && cart.classList.contains('active') && layOut.classList.contains("show")) {
    cart.classList.remove('active');
    layOut.classList.remove("show");
  }
})

myAccount.addEventListener('click', () => {

  setTimeout(() => {

    if(!login.classList.contains('show')) {
      login.classList.add('show')
    }
  }, 250)
})
document.addEventListener('click', (e) => {

  const isCloest = e.target.closest('.login-cart');
  if(!isCloest && login.classList.contains('show')) {
    login.classList.remove('show')
  }
})

search.addEventListener('click', () => {

  setTimeout(() => {

    if(!searchInput.classList.contains('show-mobile')) {
      searchInput.classList.add('show-mobile')
    }
  }, 250)
})
document.addEventListener('click', (e) => {

  const isCearch = e.target.closest('.search-input');
  if(!isCearch && searchInput.classList.contains('show-mobile')) {
    searchInput.classList.remove('show-mobile')
  }
})

let sliderImage =document.querySelectorAll(".slider-container .slide ");
let dots = document.querySelectorAll(".dots .dot");
let textContent = document.querySelectorAll(".text-content");
let currentSlide = 0;
let i;
showSlides();
function showSlides() {
  for(i =0; i < sliderImage.length; i++ ) {
    sliderImage[i].style.transform = " translateX(-100%)";
  }
  for(i =0; i < textContent.length; i++ ) {
    textContent[i].style.transform = " translateY(-110%)";
  }
  currentSlide++
  if(currentSlide > sliderImage.length) {
    currentSlide = 1
  }
  for(let i =0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
  }
  sliderImage[currentSlide-1].style.transform = " translateX(0)";
  setTimeout(() => {

    textContent[currentSlide-1].style.transform = " translateY(0)";
  },1000)
  dots[currentSlide-1].className += " active";
setTimeout(showSlides, 5000);
}



function getProducts() {

    
    items.forEach(item => {
      
      productItem.forEach(product => {
        product.innerHTML +=  `
        <div class="column ${item.class} col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-3" >
        <div class="item" data-id="${item.id}">
        <div class="img-container">
        <a href="#" class="product-link">
          <img class="img-fluid" src="${item.img.slice(3)}" alt="">
          </a>
          <div class="stars">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="time">
          <span class="days"></span>
          <span> :</span>
          <span class="hours"></span>
          <span> :</span>
          <span  class="minutes"></span>
          <span> :</span>
          <span  class="seconds"></span>
          </div>
        </div>
        <div class="info">
          <h5>${item.title}</h5>
          <div class="price">
            <span class="dollor">$<span>${item.price}</span></span>
          </div>
        </div>
        <div class="icons-cart">
          <div class="icon-cart eye" data-id="${item.id}"><i class="fa-regular fa-eye"></i></div>
          <div class="icon-cart heart"><i class="fa-regular fa-heart"></i></div>
        </div>
        <button class="add-cart btn-shape" data-id="${item.id}"><span>Add To Cart</span></button>
        </div>
    </div>
    `;
      })
      let showProduct = document.querySelectorAll(".eye");
      showProduct.forEach(show => {
        show.addEventListener("click", (e) => {

          e.preventDefault();

          showContainer.innerHTML = `  
         <div class="column col-lg-6 col-md-6 col-sm-6">
          <div class="img-container">
            <img src="${e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0].src}" alt="">
          </div>
        </div>
        <div class="column col-lg-6 col-md-6 col-sm-6">
          <div class="info mt-5">
            <h2>${e.target.parentElement.parentElement.parentElement.children[1].children[0].innerHTML}</h2>
            <div class="price">$${e.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0].innerHTML}</div>
            <div class="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>
          </div>
        </div>`
        if(!showItem.classList.contains('active')) {
          showItem.classList.add('active');
        }
       

        })
      })
      let wishList = document.querySelectorAll(".heart");
      wishList.forEach(wish => {
        wish.addEventListener("click", (e) => {

          e.preventDefault();
          wishPara.remove();

          wishlistTable.style.display = "table";

          wishSaved.innerHTML += `<tr>
          <td><div class="trash">
          <i class="fa-regular fa-trash-can"></i>
        </div></td>
        <td><div class="img-container">
          <img src="${e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0].src}" alt="">
        </div></td>
        <td>${e.target.parentElement.parentElement.parentElement.children[1].children[0].innerHTML}</td>
        <td>$${e.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0].innerHTML}</td>
        <td><button class="add-cart btn-shape" data-id="${item.id}"><span>Add To Cart</span></button>
        </td>
        </tr>`
          wishItem.innerHTML++;

          setTimeout(() => {

            if(!wishlistCart.classList.contains('active')) {
              wishlistCart.classList.add('active');
            }
          }, 250)
          
          setTimeout(() => {

            if(wishlistCart.classList.contains('active')) {
              wishlistCart.classList.remove('active');
            }
          }, 2000)

          wishlistConatiner.style.top = "0";
          wishlistConatiner.style.right = "0";
          wishlistConatiner.style.width = "600px";
          wishlistConatiner.style.height = "fit-content";
          

          let trashs = document.querySelectorAll(".wishlist-table .trash");
          trashs.forEach((trash) => {
  
            trash.addEventListener("click",function ()  {
  
              trash.parentElement.parentElement.remove();
  
              wishItem.innerHTML--;
              if(wishItem.innerHTML == "0") {
                wishlistTable.style.display = "none";
              }
            })
          })
          
        })
      })
      let sliderRated = document.querySelectorAll(".rated-products .row");
      let dotsRated = document.querySelectorAll(".rated-products .dots .dot");
      let currentRated = 0;
      function showRated() {
        for(let i =0; i < sliderRated.length; i++ ) {
          sliderRated[i].style.transform = " translateX(-100%)";
        }
        currentRated++;
        if(currentRated > sliderRated.length) {
          currentRated = 1;
        }
        for(let i =0; i < dotsRated.length; i++) {
          dotsRated[i].className = dotsRated[i].className.replace(" active","");
        }
        sliderRated[currentRated-1].style.transform = " translateX(0)";
        dotsRated[currentRated-1].className += " active";
      // setTimeout(showRated, 10000);
     
      }
      dotsRated.forEach(dot => {
        dot.onclick = showRated;
      })
      let sliderDeals = document.querySelectorAll(".special-deal .row");
      let dots = document.querySelectorAll(".special-deal .dots .dot");
      let currentDeal = 0;
      function showDeals() {
        for(let i =0; i < sliderDeals.length; i++ ) {
          sliderDeals[i].style.transform = " translateX(-100%)";
        }
        currentDeal++;
        if(currentDeal > sliderDeals.length) {
          currentDeal = 1;
        }
        for(let i =0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active","");
        }
        sliderDeals[currentDeal-1].style.transform = " translateX(0)";
        dots[currentDeal-1].className += " active";
      // setTimeout(showDeals, 10000);
     
      }
      dots.forEach(dot => {
        dot.onclick = showDeals;
      })
    const addButtons = document.querySelectorAll(".add-cart span");
    addButtons.forEach((button) => {
      let id = button.dataset.id;
      if(item.id === id) {
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        event.target.disabled = true;

          setTimeout(() => {
        
            if(!cart.classList.contains('active')) {
              cart.classList.add('active');
            }
          }, 250)

          setTimeout(() => {
  
            if(cart.classList.contains("active")) {
              cart.classList.remove("active")
            }
          }, 2000)
          paraCart.remove();
        cartBody.innerHTML +=  `<div class="row">
        <div class="col" >
          <div class="item-cart">
          <div class="content">
            <div class="img-container">
              <img class="img-fluid" src="${event.target.parentElement.parentElement.children[0].children[0].children[0].src}" alt="">
            </div>
            <div class="info">
              <h5>${event.target.parentElement.parentElement.children[1].children[0].innerHTML}</h5>
              <div class="price">
                <div class="num">${item.amount}<span>×</span></div>
                <span class="dollor">$<span class="price-item">${event.target.parentElement.parentElement.children[1].children[1].children[0].children[0].innerHTML}</span></span>
              </div>
              <div class="count">
                <span class="minus" data-id="${event.target.parentElement.parentElement.dataset.id}">-</span>
                <span class="num">${item.amount}</span>
                <span class="plus" data-id="${event.target.parentElement.parentElement.dataset.id}">+</span>
              </div>
            </div>
          </div>
          <div class="trash">
            <i class="fa-regular fa-trash-can"></i>
          </div>
          </div>
        </div>
        </div>`;
          showTotal();

        shippingMsg.innerHTML = "You are eligible for free shipping!";
        shipping.style.background ="#d4edda" ;
        shipping.style.color ="#155724" ;
        shippingIcon.innerHTML= `<i class="fa-solid fa-check"></i>`;

        

        let trashs = document.querySelectorAll(".trash");
        trashs.forEach((trash) => {

          trash.addEventListener("click",function removeItem()  {

            trash.parentElement.parentElement.remove();

            showTotal();
          })
        })

        const pluses = document.querySelectorAll(".plus");

        pluses.forEach(plus => {

          plus.addEventListener("click", (e) => {

            let addAmount = e.target;
            addAmount.previousElementSibling.innerText++;
            let amount =  parseInt(addAmount.previousElementSibling.innerText);

            function plus() {
  
              const total = [];
              const items = document.querySelectorAll(".price-item");
            
              items.forEach(item => {
            
                total.push(parseFloat(item.textContent));
              })
              const totalMoney = total.reduce(function(total,item){
            
                total += item ;
                return total;
            
              },0)
            
              const finalTotal = totalMoney.toFixed(2);
            
              document.querySelector(".total-item").innerHTML = finalTotal * amount;
              document.querySelector(".total").innerHTML = finalTotal * amount;
              document.querySelector(".total-count span").innerHTML =  amount ;
              document.querySelector(".num").innerHTML = `${amount} <span>×</span>`;
            
            }
            plus();

          })
        })
        const minuses = document.querySelectorAll(".minus");



        minuses.forEach(minus => {

          minus.addEventListener("click", (e) => {

         
            let lowAmount = e.target;
            lowAmount.nextElementSibling.innerText--;
            function minus() {
  
              let amount =  parseInt(lowAmount.nextElementSibling.innerText);
              const total = [];
              const items = document.querySelectorAll(".price-item");
            
              items.forEach(item => {
            
                total.push(parseFloat(item.textContent));
              })
              const totalMoney = total.reduce(function(total,item){
            
                total += item ;
                return total;
            
              },0)
            
              const finalTotal = totalMoney.toFixed(2);
            
              document.querySelector(".total-item").innerHTML = finalTotal * amount;
              document.querySelector(".total").innerHTML = finalTotal * amount;
              document.querySelector(".total-count span").innerHTML =  amount ;
              document.querySelector(".num").innerHTML = `${amount} <span>×</span>`;
            
            }
            minus();
            if(lowAmount.nextElementSibling.innerText <= 0) {

              e.target.parentElement.parentElement.parentElement.parentElement.remove();
              showTotal();
            }
            
          })
        })
      })
    })

    });
  }
getProducts();
function showTotal() {
  
  const total = [];
  const items = document.querySelectorAll(".price-item");

  let amount = document.querySelector(".num");
  items.forEach(item => {

    total.push(parseFloat(item.textContent));
  })
  const totalMoney = total.reduce(function(total,item){

    total += item ;
    return total;

  },0)

  const finalTotal = totalMoney.toFixed(2);

  document.querySelector(".total-item").innerHTML = finalTotal ;
  document.querySelector(".total").innerHTML = finalTotal;
  document.querySelector(".total-count span").innerHTML = total.length;

}


let days;
function countDown() {
  let countDown = new Date("May 31, 2023 23:59:59").getTime();

let counter = setInterval (() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDown - dateNow ;
    let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
     let hours = Math.floor(( dateDiff % ( 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor(( dateDiff % ( 1000 * 60 * 60 )) / (1000 * 60));
     let seconds = Math.floor(( dateDiff % ( 1000 * 60  )) / (1000));
    
    document.querySelectorAll(".days").forEach(day => {
      day.innerHTML = days < 10? `0${days}`: days;
    })
    document.querySelectorAll(".hours").forEach(hour => {
      hour.innerHTML = hours < 10? `0${hours}`: hours;
    })
    document.querySelectorAll(".minutes").forEach(mintue => {
      mintue.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    })
    document.querySelectorAll(".seconds").forEach(second => {
      second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    })
    if (dateDiff == 0) {
        clearInterval(counter);
    }
}, 1000)

}
countDown();

let sliderBrands = document.querySelectorAll(".brands .img-container");
let dotsBrands = document.querySelectorAll(".brands .dots .dot");
let currentBrands = 0;
function showBrands() {
  for(let i =0; i < sliderBrands.length; i++ ) {
    sliderBrands[i].style.transform = " translateX(-250px)";
  }
  currentBrands++;
  if(currentBrands > sliderBrands.length) {
    currentBrands = 1;
  }
  for(let i =0; i < dotsBrands.length; i++) {
    dotsBrands[i].className = dotsBrands[i].className.replace(" active","");
  }
  sliderBrands[currentBrands-1].style.transform = " translateX(0)";
  dotsBrands[currentBrands-1].className += " active";
setTimeout(showBrands, 5000);

}
dotsBrands.forEach(dot => {
  dot.onclick = showBrands;
})
showBrands();

let sliderLatest = document.querySelectorAll(".latest-blog .box ");
let dotsLatest = document.querySelectorAll(".latest-blog .dots .dot");
let currentLatest = 0;
function showLatest() {
  for(let i =0; i < sliderLatest.length; i++ ) {
    sliderLatest[i].style.display = "none";
  }
  currentLatest++;
  if(currentLatest > sliderLatest.length) {
    currentLatest = 1;
  }
  for(let i =0; i < dotsLatest.length; i++) {
    dotsLatest[i].className = dotsLatest[i].className.replace(" active","");
  }
  sliderLatest[currentLatest-1].style.display = "flex";
  dotsLatest[currentLatest-1].className += " active";
// setTimeout(showLatest, 5000);

}
dotsLatest.forEach(dot => {
  dot.onclick = showLatest;
})
// showLatest();



let switcherLis = document.querySelectorAll(".feature-product ul li");
let imgs = Array.from(document.querySelectorAll(".product-items .row .column"));

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}


function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}