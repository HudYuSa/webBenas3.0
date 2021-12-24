const menuBtn = document.querySelector(".hamburger")
const navigation = document.querySelector(".navigation")
const body = document.body
const homeLink = navigation.querySelector(".home")
const aboutLink = navigation.querySelector(".about")
const menuLink = navigation.querySelector(".our-menu")
const contactLink = navigation.querySelector(".contact")
const header = document.querySelector(".body__header")
const otherHeader = document.querySelector(".header-other-page")
const mainHero = document.querySelector(".main__hero")
// header.style.animation = "slide-in3 1s ease 1 forwards"
// otherHeader.style.animation = ""

// event untuk navigasi di layar kecil
if (body.offsetWidth < 780) {
  navigation.style.overflow = "hidden"
  navigation.style.height = "0%"
}
else {
  navigation.style.overflow = "visible"
  navigation.style.height = "100%"
}

// console.log(navigation.style.height);
menuBtn.addEventListener("click", () => {
  // animation for navigation
  // open
  if (navigation.style.height === "0%") {
    // navigation.classList.remove("slide-out")
    // navigation.classList.add("slide-in")
    navigation.style.height = "100%"
    body.style.overflow = "hidden"
  }
  // close
  else {
    // navigation.classList.remove("slide-in")
    // navigation.classList.add("slide-out")
    navigation.style.height = "0%"
    body.style.overflow = "visible"
  }

  // animation for navigation link
  homeLink.classList.toggle("text-reveal1")
  aboutLink.classList.toggle("text-reveal2")
  menuLink.classList.toggle("text-reveal3")
  contactLink.classList.toggle("text-reveal4")

  // console.log(navigation.style.height);
})

// event listener untuk scroll
let checker = false
window.addEventListener("scroll", () => {
  // event listener untuk navbar
  if (window.scrollY > 100 && !otherHeader) {
    checker = true
    header.style.animation = "minPadding .5s ease 1 forwards"

  } else if (checker == true && !otherHeader) {

    header.style.animation = "plusPadding .5s ease 1 forwards"
  }
})


if (
  majorVersion > 57 && browserName == "Chrome" ||
  browserName == "Safari" && majorVersion > 12.1 ||
  browserName == "Opera" && majorVersion > 44
) {
  const navOptions = {
    threshold:1
  }
  const navigationObserver = new IntersectionObserver(function (entry, observer) {
    entry.forEach(entry => {
      // console.log(entry.boundingClientRect);
      // mainHeroMargin = entry.boundingClientRect.height
      // console.log(mainHeroMargin);
      if (!entry.isIntersecting) {
        checker = true
        otherHeader.style.animation = "slide-in-header .5s ease 1 forwards"
      }
      else {
        if (checker) {
          otherHeader.style.animation = "slide-out-header .5s ease 1 forwards"
        }
      }
    })
  }, navOptions)

  if (otherHeader) {
    navigationObserver.observe(mainHero)
  }
} else {
  if (otherHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        otherHeader.style.animation = "slide-in-header .5s ease 1 forwards"
      } else {
        otherHeader.style.animation = "slide-out-header .5s ease 1 forwards"
      }
    })
  }
}