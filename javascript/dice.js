const dice = document.getElementById("dice");
const diceBtn = document.getElementById("dice-btn");

// const roll = () => {
//   let rand1to6 = Math.trunc(Math.random() * 6) + 1;
//   //   console.log(rand1to6);
//   dice.innerHTML = `<img src = "img/${rand1to6}.png"/>`;
// };

// 1st way using addEventListener...
// diceBtn.addEventListener("click", roll);

// 2st way using addEventListener...
diceBtn.addEventListener("click", () => {
  let rand = Math.trunc(Math.random() * 6) + 1;
  dice.innerHTML = `<img src ='img/${rand}.png'/>`;
});
