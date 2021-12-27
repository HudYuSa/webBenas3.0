
const hero = document.querySelector(".hero")
const heroFirst = document.querySelector(".heroFirst")
const heroSecond = document.querySelector(".heroSecond")
const heroThird = document.querySelector(".heroThird")
const titleH1 = document.querySelector(".hero-content__h1")
const titleH2 = document.querySelector(".hero-content__h2")
const switchBtn = document.querySelectorAll(".btn")

// getting style of hero
const heroFirstStyle = getComputedStyle(heroFirst)
const heroSecondStyle = getComputedStyle(heroSecond)
const heroThirdStyle = getComputedStyle(heroThird)

const btnFirst = document.querySelector(".btn-first")
const btnSecond = document.querySelector(".btn-second")
const btnThird = document.querySelector(".btn-third")

// main content
const otherPage = document.querySelector(".other-pages")
const aboutCard = document.querySelector(".about-card")
const ourMenuCard = document.querySelector(".our-menu-card")
const contactCard = document.querySelector(".contact-card")

// cara ngambil childrennya tinggal element.children[i]

const quickLook = document.querySelector(".quick-look")
const instaFeed = document.querySelector(".instagram-feed")
const footer = document.querySelector(".footer")

// ==========================
// globaleventlistener for dynamic element by class list
// ==========================
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.classList.contains(selector)) {
      callback(e)
    }
  })
}

// ==========================
// img animation function
// ==========================
// untuk ganti gambar manual
let switchImg = ((stylingCond1, stylingCond2, textFirst, textsecond, imgFirst, imgSecond, imgThird, title, subtitle) => {

  if (stylingCond1.opacity !== "0" || stylingCond2.opacity !== "0") {
    imgFirst.style.opacity = "1"
    imgSecond.style.opacity = "0"
    imgThird.style.opacity = "0"

    imgFirst.style.transition = "opacity 3s ease"
    imgSecond.style.transition = "opacity 3s ease"
    imgThird.style.transition = "opacity 3s ease"

    // heroFirst.classList.remove("fade-in-her")
    textFirst.classList.remove("slide-in-title")
    textsecond.classList.remove("slide-in-subTitle")
    textFirst.textContent = title
    textsecond.textContent = subtitle

    setTimeout(() => {
      // textFirst.style.opacity = "1"
      // textsecond.style.opacity = "1"
      textFirst.classList.add("slide-in-title")
      textsecond.classList.add("slide-in-subTitle")
    }, 1)
  }


})


let btnBackground = ((curent, side1, side2) => {
  curent.style.backgroundColor = "#777"
  side1.style.backgroundColor = "white"
  side2.style.backgroundColor = "white"

  curent.style.transition = "background-color 1s ease"
  side1.style.transition = "background-color 1s ease"
  side2.style.transition = "background-color 1s ease"
})

// ==========================
// change hero by click button
// ==========================
addGlobalEventListener("click", "btn", (e) => {
  // declare the button that are targetted
  const btnFirstTarget = e.target.classList.contains("btn-first")
  const btnSecondTarget = e.target.classList.contains("btn-second")
  const btnThirdTarget = e.target.classList.contains("btn-third")

  // First button trigger
  if (btnFirstTarget) {
    switchImg(heroSecondStyle, heroThirdStyle, titleH1, titleH2, heroFirst, heroSecond, heroThird, "BENA'S COFFEE", "Welcome to")
    titleH2.style.textAlign = "start"
    // change btn background color
    btnBackground(btnFirst, btnSecond, btnThird)
  }

  // second button trigger
  else if (btnSecondTarget) {
    switchImg(heroFirstStyle, heroThirdStyle, titleH1, titleH2, heroSecond, heroFirst, heroThird, "MORE THAN JUST", "A Coffee")
    titleH2.style.textAlign = "end"
    // change btn background color
    btnBackground(btnSecond, btnFirst, btnThird)

  }

  // third button trigger
  else if (btnThirdTarget) {
    switchImg(heroFirstStyle, heroSecondStyle, titleH1, titleH2, heroThird, heroFirst, heroSecond, "FEEL THE ULTIMATE", "Hapiness")
    titleH2.style.textAlign = "end"
    // change btn background color
    btnBackground(btnThird, btnFirst, btnSecond)

  }

  // console.log(window.scrollY);
})

// untuk ganti gambar otomatis
// semoga suatu saat bisa

let condition1 = [heroSecondStyle, heroThirdStyle, heroFirstStyle]
let condition2 = [heroThirdStyle, heroFirstStyle, heroSecondStyle]

let title = ["BENA'S COFFEE", "MORE THAN JUST", "FEEL THE ULTIMATE"]
let subtitle = ["Welcome to", "A Coffee", "Hapiness"]
let align = ["start", "end", "end"]

let imgFirst = [heroFirst, heroSecond, heroThird]
let imgSecond = [heroSecond, heroThird, heroFirst]
let imgThird = [heroThird, heroFirst, heroSecond]

let curentButton = [btnFirst, btnSecond, btnThird]
let sideButton1 = [btnSecond, btnThird, btnFirst]
let sideButton2 = [btnThird, btnFirst, btnSecond]


// ============
// auto image
// ============
setInterval(() => {
  let i;

  if (heroFirstStyle.opacity == "1") i = 1
  else if (heroSecondStyle.opacity == "1") i = 2
  else if (heroThirdStyle.opacity == "1") i = 0

  if (condition1[i].opacity !== "0" || condition2[i].opacity !== "0") {
    imgFirst[i].style.opacity = "1"
    imgSecond[i].style.opacity = "0"
    imgThird[i].style.opacity = "0"

    imgFirst[i].style.transition = "opacity 3s ease"
    imgSecond[i].style.transition = "opacity 3s ease"
    imgThird[i].style.transition = "opacity 3s ease"

    // heroFirst.classList.remove("fade-in-her")
    titleH1.classList.remove("slide-in-title")
    titleH2.classList.remove("slide-in-subTitle")
    titleH1.textContent = title[i]
    titleH2.textContent = subtitle[i]

    setTimeout(() => {
      titleH1.classList.add("slide-in-title")
      titleH2.classList.add("slide-in-subTitle")
    }, 100)

    titleH2.style.textAlign = align[i]

    btnBackground(curentButton[i], sideButton1[i], sideButton2[i])
  }
}, 10000);


// ==========================
// animation based on scroll
// ==========================

let cardAnimation = ((card, cardImg, cardDesc, direction) => {
  let inc = 0
  if (body.offsetWidth < 480) {
    inc = 100
  }
  else {
    inc = -100
  }

  if (window.scrollY > cardImg.offsetTop + card.offsetTop + inc) cardImg.classList.add("to-top-opacity")
  if (window.scrollY > cardDesc.offsetTop + card.offsetTop + inc) cardDesc.classList.add("card-slide-in-" + direction)

})

// animasi untuk link page lain
if (body.offsetWidth > 480 && body.offsetWidth < 780) {
  otherPage.style.opacity = "1"
  otherPage.style.transform = "translate(0px)"
  otherPage.style.transition = "opacity 1s ease,transform .5s ease"

  aboutCard.children[0].classList.add("to-top-opacity")
  aboutCard.children[1].classList.add("card-slide-in-right")
  ourMenuCard.children[1].classList.add("to-top-opacity")
  ourMenuCard.children[0].classList.add("card-slide-in-left")
  contactCard.children[0].classList.add("to-top-opacity")
  contactCard.children[1].classList.add("card-slide-in-right")
} else if (body.offsetWidth > 780) {
  otherPage.style.opacity = "1"
  otherPage.style.transform = "translate(0px)"
  otherPage.style.transition = "opacity 1s ease,transform .5s ease"

  aboutCard.children[0].classList.add("to-top-opacity")
  ourMenuCard.children[1].classList.add("to-top-opacity")
  contactCard.children[0].classList.add("to-top-opacity")

  setTimeout(() => {
    aboutCard.children[1].classList.add("to-top-opacity")
    ourMenuCard.children[0].classList.add("to-top-opacity")
    contactCard.children[1].classList.add("to-top-opacity")
  }, 500);
}

window.addEventListener("scroll", () => {

  if (body.offsetWidth < 480) {

    if (window.scrollY > 50) {
      otherPage.style.opacity = "1"
      otherPage.style.transform = "translate(0px)"
      otherPage.style.transition = "opacity 1s ease,transform .5s ease"
    }

    // about card animation
    cardAnimation(aboutCard, aboutCard.children[0], aboutCard.children[1], "left")

    // our-menu-card animation
    cardAnimation(ourMenuCard, ourMenuCard.children[1], ourMenuCard.children[0], "right")

    // contact-card animation
    cardAnimation(contactCard, contactCard.children[0], contactCard.children[1], "left")

    // animation for quick look etc
    if (window.scrollY > quickLook.offsetTop + 200 - document.body.clientHeight) {
      quickLook.classList.add("slide-up-animation")
    }
    if (window.scrollY > instaFeed.offsetTop + 200 - document.body.clientHeight) {
      instaFeed.classList.add("card-slide-in-left")
    }
    if (window.scrollY > footer.offsetTop + 200 - document.body.clientHeight) {
      footer.classList.add("height-grow")
    }
  } else {

    // animation for quick look etc
    if (window.scrollY > quickLook.offsetTop - body.offsetWidth) {
      quickLook.classList.add("slide-up-animation")
    }
    if (window.scrollY > instaFeed.offsetTop - body.offsetWidth) {
      instaFeed.classList.add("card-slide-in-left")
    }
    if (window.scrollY > body.offsetWidth - 100) {
      footer.classList.add("height-grow")
    }

  }
  console.log(window.scrollY);
})

console.log(aboutCard.offsetTop);
console.log(quickLook.offsetTop);
console.log(instaFeed.offsetTop);
console.log(footer.offsetTop);
console.log(body.offsetHeight);
console.log(body.offsetWidth);
//////////////////
//  quick look  //
//////////////////
if (body.offsetWidth < 480) {
  quickLook.style.marginBottom = body.offsetWidth * 50 / 100
} else if (body.offsetWidth > 480 && body.offsetWidth < 780) {
  quickLook.style.marginBottom = body.offsetWidth * 40 / 100
} else if (body.offsetWidth > 780 && body.offsetWidth < 980) {
  quickLook.style.marginBottom = body.offsetWidth * 30 / 100
} else if (body.offsetWidth > 980) {
  quickLook.style.marginBottom = body.offsetWidth * 40 / 100
} else {
  quickLook.style.marginBottom = body.offsetWidth * 50 / 100
}
console.log(quickLook.style);

const tabLink = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")

// console.log(tabLink);

let tabLinksAnimation = ((index) => {
  tabContent[index].style.opacity = "1"
  tabContent[index].style.zIndex = 1
  tabContent[index].style.animation = "opacityUp .5s ease-out forwards"
})
addGlobalEventListener("click", "tab-link", e => {
  const firstTabLink = e.target.classList.contains("tab-first-link")
  const secondTabLink = e.target.classList.contains("tab-second-link")
  const thirdTabLink = e.target.classList.contains("tab-third-link")

  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].classList.remove("curent-link")
  }
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.opacity = 0
    tabContent[i].style.zIndex = 0
    tabContent[i].style.animation = "none"
  }

  e.target.classList.add("curent-link")

  if (firstTabLink) {
    tabLinksAnimation(0)
  }
  else if (secondTabLink) {
    tabLinksAnimation(1)
  }
  else if (thirdTabLink) {
    tabLinksAnimation(2)
  }

})


const slider1 = new Swiper('.slider1', {

  loop: false,
  slidesPerView: 2,
  // spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 4
    }

  },
  centeredSlides: true,

  navigation: {
    prevEl: ".quick-look-prev",
    nextEl: ".quick-look-next",
  },

  freeMode: {
    enabled: true,
    sticky: true,
    // minimumVelocity: 1,
    momentumRatio: .2
  }
});

const slider2 = new Swiper('.slider2', {

  loop: false,
  slidesPerView: 2,
  // spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 4
    }

  },

  navigation: {
    prevEl: ".quick-look-prev",
    nextEl: ".quick-look-next",
  },
  centeredSlides: true,

  freeMode: {
    enabled: true,
    sticky: true,
    // minimumVelocity: 1,
    momentumRatio: .2
  }
});

const slider3 = new Swiper('.slider3', {

  loop: false,
  slidesPerView: 2,
  // spaceBetween: 5,
  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 4
    }

  },
  centeredSlides: true,
  navigation: {
    prevEl: ".quick-look-prev",
    nextEl: ".quick-look-next",
  },

  freeMode: {
    enabled: true,
    sticky: true,
    // minimumVelocity: 1,
    momentumRatio: .2
  }
});

// store image
let sliderImageOne = [
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/beans3_lRtZ6NWBa8jf.png?updatedAt=1637120228393",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/tresleches_9WnFmheXv.png?updatedAt=1637195267720",
  "https://ik.imagekit.io/hudyusuf/beans3_lRtZ6NWBa8jf.png?updatedAt=1637120228393",

]
let sliderImageTwo = [
  "https://ik.imagekit.io/hudyusuf/coffee-for-quick-look_copy_vqOc_wipc.png?updatedAt=1637195267574",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/coffee-for-quick-look_copy_vqOc_wipc.png?updatedAt=1637195267574",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
  "https://ik.imagekit.io/hudyusuf/coffee-for-quick-look_copy_vqOc_wipc.png?updatedAt=1637195267574",
  "https://ik.imagekit.io/hudyusuf/gmbr-kopi2_copy_74l_rZfwd.png?updatedAt=1637195267794",
]
let sliderImageThree = [
  "https://ik.imagekit.io/hudyusuf/beans5_zUD1dNZ3aP.png?updatedAt=1637120229644",
  "https://ik.imagekit.io/hudyusuf/beans9_QbPvk1ozs.png?updatedAt=1637120229136",
  "https://ik.imagekit.io/hudyusuf/beans2_v-eW7FALFv1.png?updatedAt=1637120227755",
  "https://ik.imagekit.io/hudyusuf/beans4_dUpSxS_9b.png?updatedAt=1637120227636",
  "https://ik.imagekit.io/hudyusuf/beans2_v-eW7FALFv1.png?updatedAt=1637120227755",
  "https://ik.imagekit.io/hudyusuf/beans9_QbPvk1ozs.png?updatedAt=1637120229136"
]
let ourMenuLink = "./our-menu.html"

// function to append image
let appendImage = ((slider, image) => {
  image.forEach((img) => {
    let imgLink;

    if (slider == slider1) imgLink = ourMenuLink
    else if (slider == slider2) imgLink = ourMenuLink
    else if (slider == slider3) imgLink = ourMenuLink

    slider.appendSlide(
      `<div class="swiper-slide">
        <div class= "inner-wrapper">
          <a href="${imgLink}" class="image-wrapper">
            <img src="${img}" alt="gambar biji">
            <div class ="slider-text">
              <h3>buy now</h3>
            </div>
          </a>
        </div>
      </div>`)
  })

})


// append the image to every slider

appendImage(slider1, sliderImageOne)
appendImage(slider2, sliderImageTwo)
appendImage(slider3, sliderImageThree)

const slider4 = new Swiper('.slider4', {

  loop: true,
  slidesPerView: 4,
  // spaceBetween: 5,
  breakpoints: {
    720: {
      slidesPerView: 6,
    },

  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    // dynamicBullets: 5,
  },

  // navigation: {
  //   prevEl: ".instagram-prev",
  //   nextEl: ".instagram-next",
  // },

  freeMode: {
    enabled: true,
    sticky: true,
    // minimumVelocity: 1,
    momentumRatio: .2
  }
});
let appendImgInsta = ((slider, img, link) => {

  img.forEach((img, index) => {
    slider.appendSlide(
      `<div class="swiper-slide insta-slide">
      <a href="${link[index]}" class="image-wrapper insta-image-link">
      <img src="${img}"
      alt="gambar biji">
      </a>
      </div>`
    )
  })
})


let sliderImageFour = [
  "https://ik.imagekit.io/hudyusuf/image1_HmeqkXlB7.png?updatedAt=1637726390300",
  "https://ik.imagekit.io/hudyusuf/image2_RsjNyw6yB.png?updatedAt=1637726390278",
  "https://ik.imagekit.io/hudyusuf/image3_2btGMn8ID.png?updatedAt=1637726390300",
  "https://ik.imagekit.io/hudyusuf/image4_EnndXfJ5qTx.png?updatedAt=1637726390713",
  "https://ik.imagekit.io/hudyusuf/image5_yACEodKiP.png?updatedAt=1637726391203",
  "https://ik.imagekit.io/hudyusuf/image1_HmeqkXlB7.png?updatedAt=1637726390300",
  "https://ik.imagekit.io/hudyusuf/image2_RsjNyw6yB.png?updatedAt=1637726390278",
  "https://ik.imagekit.io/hudyusuf/image3_2btGMn8ID.png?updatedAt=1637726390300"
]
let instagramLink = [
  "https://www.instagram.com/p/CWkrokbB9sP/",
  "https://www.instagram.com/p/CWcevxQBUX4/",
  "https://www.instagram.com/p/CQ-dYsUBxi_/",
  "https://www.instagram.com/p/CTwK8RABjPn/",
  "https://www.instagram.com/p/CRx48H1hfRa/",
  "https://www.instagram.com/p/CWkrokbB9sP/",
  "https://www.instagram.com/p/CWcevxQBUX4/",
  "https://www.instagram.com/p/CQ-dYsUBxi_/"
]
appendImgInsta(slider4, sliderImageFour, instagramLink)