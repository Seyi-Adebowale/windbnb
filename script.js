//Show full header
function showHeader() {
  const x = document.querySelector(".full-header");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Hide full header
function hideHeader() {
  const x = document.querySelector(".full-header");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//Show location input dropdown
function showLocationDropdown() {
  let y = document.querySelector(".location-dropdown");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
//Show guests input dropdown
function showGuestsDropdown() {
  let y = document.querySelector(".guests-dropdown");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
//Location input dropdown selector
function selectLocation(location) {
  document.getElementById("selectLocation").value = location;
}

const counterValue1 = document.getElementById("counter-value1");
const incrementBtn1 = document.getElementById("increment-btn1");
const decrementBtn1 = document.getElementById("decrement-btn1");
const counterValue2 = document.getElementById("counter-value2");
const incrementBtn2 = document.getElementById("increment-btn2");
const decrementBtn2 = document.getElementById("decrement-btn2");
const sum = document.getElementById("addGuests");
4
let counter1 = 0;
let counter2 = 0;
let totalCount = 0;
// To increment the value of counter
incrementBtn1.addEventListener("click", () => {
  counter1++;
  totalCount = counter1 + counter2;
  counterValue1.innerHTML = counter1;
  sum.value = totalCount + " guests";
});

// To decrement the value of counter
decrementBtn1.addEventListener("click", () => {
  counter1--;
  if (counter1 < 0) counter1 = 0;
  totalCount = counter1 + counter2;
  counterValue1.innerHTML = counter1;
  sum.value = totalCount + " guests";
});

// To increment the value of counter
incrementBtn2.addEventListener("click", () => {
  counter2++;
  totalCount = counter1 + counter2;
  counterValue2.innerHTML = counter2;
  sum.value = totalCount + " guests";
});
// To decrement the value of counter
decrementBtn2.addEventListener("click", () => {
  counter2--;
  if (counter2 < 0) counter2 = 0;
  totalCount = counter1 + counter2;
  counterValue2.innerHTML = counter2;
  sum.value = totalCount + " guests";
});

const staysContainer = document.querySelector(".stays-container");

async function getData() {
  let res = await fetch("../stays.json");
  let data = await res.json();
  data.forEach((element) => {
    const staysBox = document.createElement("div");
    staysBox.classList.add("stays-box");

    const city = document.createElement("p");
    city.classList.add("hidden", "city");

    const country = document.createElement("p");
    country.classList.add("hidden", "country");

    const superHost = document.createElement("p");
    superHost.classList.add("superhost");

    const title = document.createElement("p");
    title.classList.add("title");

    const rating = document.createElement("p");
    rating.classList.add("rating");

    const maxGuests = document.createElement("p");
    maxGuests.classList.add("max-guests", "hidden");

    const type = document.createElement("p");
    type.classList.add("type");

    const beds = document.createElement("p");
    beds.classList.add("beds");

    const photo = document.createElement("div");

    const staysText = document.createElement("div");
    staysText.classList.add("stays-text");

    const staysRating = document.createElement("div");
    staysRating.classList.add("stays-rating");

    const star = document.createElement("i");
    star.classList.add("fas", "fa-star");
    staysRating.append(star, rating);

    city.append(element.city);
    country.append(element.country);
    superHost.append(element.superHost);
    title.append(element.title);
    rating.append(element.rating);
    maxGuests.append(element.maxGuests);
    type.append(element.type);
    beds.append(element.beds + " beds");

    let img = document.createElement("img");
    img.src = element.photo;
    photo.append(img);
    photo.classList.add("stays-img");

    if (superHost.innerText === "false") {
      superHost.classList.add("hidden");
    } else {
      superHost.innerText = "SUPER HOST";
    }

    if (beds.innerText === "null beds") {
      beds.classList.add("hidden");
    }

    staysBox.append(
      photo,
      superHost,
      type,
      beds,
      staysRating,
      title,
      country,
      maxGuests,
      city
    );

    staysText.append(superHost, type, beds, staysRating);

    staysBox.insertBefore(staysText, staysBox.children[1]);

    staysContainer.append(staysBox);

    if (element.city != 'Helsinki') staysBox.classList.add('hidden')
  });
}

getData();


