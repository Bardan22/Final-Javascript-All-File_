let img_array = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg"];
let array_length = img_array.length;

let i = 0;
// accessing elements
const sliderImg = document.getElementById("image");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

// const slider = () => {
//   if (i === array_length - 1) {
//     i = 0;
//     sliderImg.src = `img3/${img_array[i]}`;
//   } else {
//     i++;
//     sliderImg.src = `img3/${img_array[i]}`;
//   }
// };
// nextBtn.addEventListener("click", slider);

// change into ternary Operator:

const slider = () => {
  i++;
  i %= array_length;
  //   i = 1 % 5 = 1
  //   i = 2 % 5 = 2
  //   i = 3 % 5 = 3
  //   i = 4 % 5 = 4
  //   i = 5 % 5 = 0
  sliderImg.src = `img3/${img_array[i]}`;
};
nextBtn.addEventListener("click", slider);

const sliderl = () => {
  i--;
  if (i < 0) {
    i = array_length - 1;
  }
  sliderImg.src = `img3/${img_array[i]}`;
};
prevBtn.addEventListener("click", sliderl);

// slider autoplay:
// setInterval(() => {
//   i++;
//   i %= array_length;
//   sliderImg.src = `img3/${img_array[i]}`;
// }, 3000);

// or short code...
let set = setInterval(slider, 1000);

const stops = () => {
  clearInterval(set);
};

const start = () => {
  set = setInterval(slider, 1000);
};
