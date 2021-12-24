

const slider1 = new Swiper('.slider1', {

  loop: true,
  // initialSlide: currentSlide
  slidesPerView: 3,
  // spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    720: {
      slidesPerView: 4.5
    }

  },
  centeredSlides: true,
  freeMode: {
    enabled: true,
    sticky: true,
    momentumRatio: .2
  },

  autoplay: {
    delay: 5000,
  }
})
const slider2 = new Swiper('.slider2', {

  loop: true,
  // initialSlide: currentSlide
  slidesPerView: 3,
  // spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    720: {
      slidesPerView: 4.5
    }

  },
  centeredSlides: true,
  freeMode: {
    enabled: true,
    sticky: true,
    momentumRatio: .2
  },

  autoplay: {
    delay: 5000,
  }
})
const slider3 = new Swiper('.slider3', {

  loop: true,
  slidesPerView: 3,
  // spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    720: {
      slidesPerView: 4.5
    },
  },
  centeredSlides: true,
  freeMode: {
    enabled: true,
    sticky: true,
    momentumRatio: .2
  },

  autoplay: {
    delay: 5000,
  }
})

let sliderImgOne = [
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794"
]
let sliderImgTwo = [
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
]
let sliderImgThree = [
  "https://ik.imagekit.io/hudyusuf/beans5_zUD1dNZ3aP.png?updatedAt=1637120229644",
  "https://ik.imagekit.io/hudyusuf/beans9_QbPvk1ozs.png?updatedAt=1637120229136",
  "https://ik.imagekit.io/hudyusuf/beans8_lvANjfuWj.png?updatedAt=1637120229508",
  "https://ik.imagekit.io/hudyusuf/beans7_HF_MXEMq5_.png?updatedAt=1637120228263",
  "https://ik.imagekit.io/hudyusuf/beans3_lRtZ6NWBa8jf.png?updatedAt=1637120228393",
  "https://ik.imagekit.io/hudyusuf/beans4_dUpSxS_9b.png?updatedAt=1637120227636"
]

let appendImg = (slider, image, text) => {
  image.forEach(img => {
    slider.appendSlide(
      `<div class="swiper-slide main-slider">
        <div class="swiper-card">
          <div class="card-img">
            <img src= "${img}" alt="card-img">
          </div>
          <div class="card-desc">
            <h2 class="product-name">${text}</h2>
            <h3 class="product-price">Rp 25.00</h3>
          </div>
        </div>
      </div>`)
  })
}

appendImg(slider1, sliderImgOne, "cappucinno")
appendImg(slider2, sliderImgTwo, "tresleches")
appendImg(slider3, sliderImgThree, "sumatera kerinci")

// =================
// big img animation
// =================
const menuBigImg = document.querySelector(".full-menu__big-img")
// console.log(menuBigImg);
const smallImg = document.querySelectorAll(".menu-img-wrapper")
// console.log(smallImg);
const prevBtn = menuBigImg.querySelector(".prev-btn")
const nextBtn = menuBigImg.querySelector(".next-btn")
const swiperImg = document.querySelector(".slider4")
const bigImgSwiper = document.querySelector(".big-images-wrapper")
const eachSlide = document.querySelectorAll(".big-img-slide")
let currentSlide
smallImg.forEach(img => {
  img.children[0].addEventListener("click", (e) => {
    swiperImg.classList.add("scale-up-rotate")
    swiperImg.classList.remove("scale-up-rotate-reverse")
    menuBigImg.style.opacity = "1"
    menuBigImg.style.pointerEvents = "auto"
    // menuBigImg.style.transform = "scale(1)"

    // for intialixze the first big image
    // switch (img) {
    //   case img.classList.contains("img1"):
    //     currentSlide = 0
    //     break;
    //   case img.classList.contains("img2"):
    //     currentSlide = 1
    //     break;
    //   case img.classList.contains("img3"):
    //     currentSlide = 2
    //     break;
    //   case img.classList.contains("img4"):
    //     currentSlide = 3
    //     break;

    //   default:
    //     currentSlide = 0
    //     break;
    // }

    if (e.target.classList.contains("img1")) { currentSlide = 1 }
    else if (e.target.classList.contains("img2")) { currentSlide = 2 }
    else if (e.target.classList.contains("img3")) { currentSlide = 3 }
    else if (e.target.classList.contains("img4")) { currentSlide = 4 }
    else { return }

    console.log(e.target)
    console.log(currentSlide);
  })
})
console.log(currentSlide);
menuBigImg.addEventListener("click", () => {
  swiperImg.classList.add("scale-up-rotate-reverse")
  swiperImg.classList.remove("scale-up-rotate")
  menuBigImg.style.opacity = "0"
  menuBigImg.style.pointerEvents = "none"
  // setTimeout(() => {
  //   menuBigImg.style.transform = "scale(0)"
  // }, 500);

})
let stopPropagation = ((element) => {
  element.addEventListener("click", e => {
    e.stopPropagation()
    console.log(1);
  })
})
// stop propagation
stopPropagation(prevBtn)
stopPropagation(nextBtn)
eachSlide.forEach(slide => {
  stopPropagation(slide)
})

const slider4 = new Swiper('.slider4', {
  slidesPerView: 1,

  spaceBetween: 20,
  navigation: {
    prevEl: ".prev-btn",
    nextEl: ".next-btn"
  },
  centeredSlides: true,
  breakpoints: {
    720: {
      slidesPerView: 1.2,
    },
    1000: {
      slidesPerView: 2.5
    }

  },

  freeMode: {
    enabled: true,
    sticky: true,
    // minimumVelocity: 1,
    momentumRatio: .2
  }
})
let sliderImgFour = [
  "https://ik.imagekit.io/hudyusuf/menu2_sb_8n0Ypb.png?updatedAt=1639043331387",
  "https://ik.imagekit.io/hudyusuf/menu3_ttffcu-co.png?updatedAt=1639043331384",
  "https://ik.imagekit.io/hudyusuf/menu1_2jQOijkje.png?updatedAt=1639043332020",
  "https://ik.imagekit.io/hudyusuf/menu4_TMIv9v6rU.png?updatedAt=1639043331907"
]
// let appendBigImg = (slider, image) => {
//   image.forEach(img => {
//     slider.appendSlide(
//       `<div class="swiper-slide img-host">
//         <div class="card-img big-img-card">
//           <img src="${img}" alt="card-img">
//         </div>
//       </div> `)
//   })
// }
// appendBigImg(slider4, sliderImgFour)
