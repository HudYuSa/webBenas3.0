const smallImageWrapper = document.querySelectorAll(".gallery__small-img-wrapper")
const gallerySmallImg = document.querySelector(".gallery__small-img")
const galleryBigImg = document.querySelector(".gallery__big-img")
const bigImages = document.querySelectorAll(".big-img")
const bigImg1 = galleryBigImg.querySelector(".big1")
const bigImg2 = galleryBigImg.querySelector(".big2")
const cardBigImg = galleryBigImg.querySelector(".card-big-image")
const main = document.querySelector(".main")

const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")


smallImageWrapper.forEach((wrapper, idx) => {
  wrapper.classList.add("img" + idx)
  // console.log(wrapper);

  wrapper.addEventListener("click", () => {
    galleryBigImg.style.animation = "none"
    setTimeout(() => {
      galleryBigImg.style.display = "block"

      bigImages.forEach(img => {
        // console.log(img);
        img.classList.remove("active-img")
        img.classList.remove("passive-img")
        if (
          wrapper.children[0].getAttribute("src") == img.getAttribute("src")
        ) {
          img.classList.remove("passive-img")
          img.classList.add("active-img")
        }
      })
      // bigImg1.setAttribute("src", wrapper.children[0].getAttribute("src"))
      galleryBigImg.style.transform = "scaleX(1)"
      galleryBigImg.style.animation = "book-open .5s ease-in 1 forwards"

    }, 5);
    // console.log(wrapper.children[0].getAttribute("src"));
  })
})

// next btn for big img
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation()
  for (let i = 0; i < bigImages.length; i++) {
    if (bigImages[i].classList.contains("big6")) {
      return
    } else if (bigImages[i].classList.contains("active-img")) {
      bigImages[i].classList.remove("active-img")
      bigImages[i + 1].classList.add("active-img")
      bigImages[i].classList.add("passive-img")
      bigImages[i + 1].classList.remove("passive-img")
      return
    }
  }

})
// prev-btn
prevBtn.addEventListener("click", (e) => {
  bigImages.forEach((bigImage, idx) => {
    e.stopPropagation()
    // console.log(bigImage);
    if (bigImage.classList.contains("active-img")) {
      // console.log(bigImages[idx - 1]);
      if (bigImage.classList.contains("big1")) {
        return
      }
      else {
        // bigImages[idx - 1].classList.remove("passive-img")
        bigImage.classList.remove("active-img")
        bigImages[idx - 1].classList.add("active-img")
        bigImage.classList.add("passive-img")
        bigImages[idx - 1].classList.remove("passive-img")
      }
    } else { return }
  })
})


cardBigImg.addEventListener("click", (e) => {
  e.stopPropagation()
})
galleryBigImg.addEventListener("click", (e) => {
  galleryBigImg.style.animation = "none"
  setTimeout(() => {
    galleryBigImg.style.animation = "book-open .5s ease-in reverse"
    galleryBigImg.style.transform = "scaleX(0)"
  }, .000000000001);
})


const cards = document.querySelectorAll(".card-img")
if (
  majorVersion > 57 && browserName == "Chrome" ||
  browserName == "Safari" && majorVersion > 12.1 ||
  browserName == "Opera" && majorVersion > 44
) {
  const cardOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0px 0px 0px 0px"
  }
  const cardObserver = new IntersectionObserver(function (entries, cardObserver) {
    entries.forEach(entry => {
      // console.log(entry.intersectionRatio, entry.isIntersecting, entry.target);
      if (!entry.isIntersecting) {
        return
      }
      // console.log(entry.target)
      else {
        entry.target.classList.add("scale-up")
      }
      cardObserver.unobserve(entry.target)
    })
  }, cardOptions)

  cards.forEach(card => {
    cardObserver.observe(card)
  })
  smallImageWrapper.forEach(img => {
    cardObserver.observe(img)
  })
}
else {
  cards.forEach(card => {
    card.style.transform = "scale(1)"
  })
  smallImageWrapper.forEach(img => {
    img.style.transform = "scale(1)"
  })
}


// document.write(''
//   + 'Browser name  = ' + browserName + '<br>'
//   + 'Full version  = ' + fullVersion + '<br>'
//   + 'Major version = ' + majorVersion + '<br>'
// )
// cardObserver.observe(cards[0])

// console.log(cards);
// console.log("harsdhf");
// cards.forEach(card => {
//   console.log(card);
// })
