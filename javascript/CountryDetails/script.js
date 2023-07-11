const flagImg = document.querySelector("img");
const inputCountry = document.querySelector("#countries");
const fetchBtn = document.querySelector("#fetch-btn");
const capital = document.querySelector("#capital");
const nativeName = document.querySelector("#native-name");
const population = document.querySelector("#population");
const area = document.querySelector("#area");
const region = document.querySelector("#region");
const subRegion = document.querySelector("#subregion");
const error = document.querySelector(".error");

// fetching API onclick of the button

fetchBtn.addEventListener("click", () => {
  const countryName = inputCountry.value;
  fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      flagImg.src = `${data[0].flags.png}`;
      capital.textContent = `${data[0].capital[0]}`;
      nativeName.textContent = `${data[0].altSpellings[0]}`;
      population.textContent = `${data[0].population}`;
      area.textContent = `${data[0].area}`;
      region.textContent = `${data[0].region}`;
      subRegion.textContent = `${data[0].subregion}`;
    })
    .catch((err) => console.log("Not Found"));
});
