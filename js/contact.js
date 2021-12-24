const selectInput = document.querySelector(".select-input")
const countryList = document.querySelector(".country-list")
const countryName = document.querySelectorAll(".country-name")
// const body = document.body
// console.log(selectInput);
// console.log(countryList);


let focused
let listPopUp = (element => {
  element.addEventListener("focusin", function listPopUp() {
    countryList.style.opacity = "1"
    countryList.style.pointerEvents = "auto"
    focused = true
    // console.log(focused);
    // countryName.forEach(country => {
    //   country.setAttribute("tabindex", "0")
    // })
    // console.log(countryName[0]);
  })
  element.addEventListener("keydown", function listPopUp() {
    countryList.style.opacity = "1"
    countryList.style.pointerEvents = "auto"
    focused = true
  })
})
let listPupDown = (element => {
  element.addEventListener("focusout", function listPopDown() {
    countryList.style.opacity = "0"
    countryList.style.poiterEvents = "none"
    focused = false
    // console.log(focused);
    // countryName.forEach(country => {
    //   country.removeAttribute("tabindex")
    // })
    // console.log(countryName[0]);
  })
})
listPopUp(selectInput)
listPupDown(selectInput)
// listPopUp(countryList)
// listPupDown(countryList)

function createLi(text) {
  const li = document.createElement("li")
  li.setAttribute("class", "country-name")
  li.setAttribute("id", "country")
  const t = document.createTextNode(text)
  // li.textContent = text
  li.appendChild(t)
  // li.setAttribute("class", text)
  return li
}
let allCountry = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

// setTimeout(() => {
//   allCountry.forEach(country => {
//     createLi(country)
//   })
//   console.log(countryName);
// }, 500);
let list = []
for (let i = 0; i < allCountry.length; i++) {
  list[i] = createLi(allCountry[i])
  countryList.appendChild(list[i])
}

const filterList = (keyword) => {
  // yang lebih singkat
  list.forEach((li) => li.classList.add("filtered"))
  // .filter((list) => !list.textContent.toLowerCase().includes(keyword))
  list
    .filter((li) => li.textContent.toLowerCase().includes(keyword))
    .forEach((li) => li.classList.remove("filtered"))
}

// console.log(list);
list.forEach(li => {
  li.addEventListener("click", (() => {
    console.log(li.textContent)
    selectInput.value = li.textContent
  }))
})

// tabindex
window.addEventListener("keydown", ((e) => {
  if (focused) {
    if (e.key === "Escape") {
      countryList.style.opacity = "0"
      countryList.style.pointerEvents = "none"
    }

    const keyword = selectInput.value.trim().toLowerCase()
    filterList(keyword)
  }
  console.log(e.key);
}))

// google map

const bodyPage = document.body
const map = document.querySelector("iframe")
//  if(body.offset)
// map.setAttribute("height", "500")
console.log(map);
// pake event listener resize
// bodyPage.addEventListener("resize", (() => {
if (bodyPage.offsetWidth < 480) {
  map.setAttribute("height", "200")
}

// }))
const a = 3
console.log(a);