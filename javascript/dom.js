// DOM -> DOM stands for Document Object Model, It is a programming interface for HTML and XML. DOM represents the webpage so that the script can change the style, structure, content etc. The DOM represents each elements and text content as nodes.
// The DOM represents the structure of a webpage in a hierarchical (tree - like) structure/model where each elements, attributes, text content in the HTML document is represented as a "Node".

// Accessing the DOM nodes in javascript

// To access the nodes of DOM, we have several methods

// 1. method that access or select one node only.....---->>>

// .getElementByID  ->
// const div1 = document.getElementById("d-1");
// console.log(div1);

// .querySelector  ->
// querySelector selects the node by passing argument as CSS-selector
// selecting element using querySelector
// const heading1 = document.querySelector("h1");
// console.log(heading1);
// selecting by id using querySelector
// const div2 = document.querySelector("#d-2");
// console.log(div2);
// selecting by class using querySelector
// const para2 = document.querySelector(".para");
// console.log(para2);

// 2. methods that access or select multiple nodes.....--->>

// NodeList is the collection of HTML nodes which seems like an array but it is not array.

// .getElementsByClassName
// const paragraphs = document.getElementsByClassName("para");
// console.log(paragraphs); // NodeList, HTMLCollection

// .getElementByTagName
// const divs = document.getElementsByTagName("div");
// console.log(divs); // NodeList, HTMLCollection

// querySelectorAll
// queryselectorAll returns the nodelist of all the elements that matches the CSS-selector.

// const paragraphsByQS = document.querySelectorAll(".para");
// console.log(paragraphsByQS);

// day 2:............

const mainHeading = document.querySelector("#intro");
const list1 = document.querySelector(".fruit");

// Manipulating the DOM
// Style Manipulating

mainHeading.style.color = "red";
mainHeading.style.backgroundColor = "aqua";
mainHeading.style.textDecoration = "underline";

// if we don't store document in variable than we need to write as below...
// document.querySelector("#intro").style.color = "red";
// document.querySelector("#intro").style.backgroundColor = "aqua";
// document.querySelector("#intro").style.textDecoration = "underline";

list1.style.backgroundColor = "purple";
list1.style.color = "white";

// text Manipulation
// 2 way to see text content:

// 1 textContent :
console.log(mainHeading.textContent);
// 2 innerText :
console.log(mainHeading.innerText);

// Differences between textContent and innerText:
// textContent -> hidden text are also visible and it is faster.
// innerText -> hidden text are not visible and it is slower.

mainHeading.innerText = "Hello Master Javascript (ES6+)";

// Adding, Removing, replace, toggling class to the element or node.

// hidding...it hides the showing text..
// mainHeading.classList.add("hide");

// removing...it shows the hidden text..
// mainHeading.classList.remove("hide");

// replacing...text-transform uppercase..
// mainHeading.classList.replace("hide", "transform");

// Creating element using DOM ->

// const anotherHeading = document.createElement("h2");
// anotherHeading.textContent = "I was created via DOM manipulating";

// // appending Child
// document.body.appendChild(anotherHeading);

// ...
// const uList = document.querySelector("ul");
// const list = document.createElement("li");

// list.textContent = "Dragonfruit";
// list.classList.add(".fruit");

// uList.appendChild(list);

// const anotherlist = document.createElement("li");
// anotherlist.textContent = "Mango";
// anotherlist.classList.add("fruit");

// document.getElementById("ulist").appendChild(anotherlist);

// removing element/node using DOM
// anotherlist.remove();
// document.getElementById("ulist").remove();

// leaf node vs child node:
// leaf node: Leaf node doesn't have any branch node.

// handling events using DOM
// first way
// by attaching eventListener to the node

// syntax:
// accessedElement.addEventListener('event-type', callbackFunction)

// mouseEvent
// keyboardEvent

// eg:
// mainHeading.addEventListener("click", () => {
//   const text = mainHeading.textContent;
//   alert(text);
// });

// list1.addEventListener("click", () => {
//   const text = list1.textContent;
//   alert(text);
// });

// NodeList -> It is a array like datatype that stores node/html elements in a sequential order. It also has index starting from zero. It has 'lenght' property just like an array. It is different from array because it doesn't supports array method.

// const lists = document.querySelectorAll(".fruit");

// forEach method -> It is a method that iterates over the iterables like nodelist, array

// syntax:
// eg:

// lists.forEach((e, i, nl) => {
//   console.log(e.textContent);
// });

// showing all fruits in alert...
// lists.forEach((e) => {
//   e.addEventListener("click", () => {
//     let data = e.textContent;
//     alert(data);
//   });
// });

// lists.forEach((e) => {
//   e.addEventListener("click", () => {
//     let save = e.textContent;
//     let upper = save.toUpperCase();
//     e.textContent = upper;
//   });
// });

// Event -> An event is an action that takes place in a webpage.
// There are events like:
// Mouse Events
// - click
// - mouseover
// - mouseout
// - mousedown

// keyboard Events
// - Keyup
// - Ketdown ->

// - keypress

// From Events
// - submit
// - reset

// focus event
// - focus
// - blur

// Load event
// - load

// change event
// scroll
// resize
// error

// To handle events DOM has a method called .addEventListener which can be attached to any DOM nodes/element to listen the event and provide some functionality based on that event.

// To handle event we can use 'inlilne event handlers' as well. These are basically written with html tags as attribute.

// In alert...
// mainHeading.addEventListener("mouseover", () => {
//   let data = mainHeading.textContent;
//   alert(data);
// });

let originalText = mainHeading.textContent;

// toUpperCase:
mainHeading.addEventListener("mouseover", () => {
  const data = mainHeading.textContent;
  const upperCase = data.toUpperCase();
  mainHeading.textContent = upperCase;
});

// toLowerCase:
// mainHeading.addEventListener("mouseout", () => {
//   const data = mainHeading.textContent;
//   const lowerCase = data.toLowerCase();
//   mainHeading.textContent = lowerCase;
// });

// Back to Normal form:
mainHeading.addEventListener("mouseout", () => {
  mainHeading.textContent = originalText;
});

const lists = document.querySelectorAll(".fruit");
let word = lists.textContent;

// upperCase:
lists.forEach((e) => {
  e.addEventListener("mouseover", () => {
    const data = e.textContent;
    const upper = data.toUpperCase();
    e.textContent = upper;
  });
});

// lowerCase:
lists.forEach((e) => {
  e.addEventListener("mouseout", () => {
    const data = e.textContent;
    const lower = data.toLowerCase();
    e.textContent = lower;
  });
});

// wrong:
// lists.addEventListener("mouseout", () => {
//   // const data = e.textContent;
//   // const lower = data.toLowerCase();
//   lists.textContent = word;
// });
