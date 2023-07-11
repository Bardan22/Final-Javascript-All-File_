// FirstName
const validFname = () => {
  const fName = document.getElementById("firstname").value;
  // checking if firstname is empty
  if (fName === "") {
    displayMsg("Firstname is required", "fnamemsg", "red");
    return false;
  }
  //   checking if firstname has more than 2 letters
  else if (fName.length < 3) {
    displayMsg(
      "first name must contain more than 2 letters",
      "fnamemsg",
      "red"
    );
    return false;
  }
  // checking if firstname contains only letters using 'regax'...
  //   regex -> Regular Expression
  // Ram -> true
  // Ram10 -> false
  // skindfs@#$% -> false
  else if (!fName.match(/^[A-Za-z]+$/)) {
    displayMsg(
      "Firstname must not contain numbers or special characters",
      "fnamemsg",
      "red"
    );
  } else {
    displayMsg("firstName is valid", "fnamemsg", "green");
    return true;
  }
};

// LastName...
const validLname = () => {
  const lName = document.getElementById("lastname").value;
  // checking if lastname is empty
  if (lName === "") {
    displayMsg("Lastname is required", "lnamemsg", "red");
    return false;
  }
  // checking lastname 2 letters
  else if (lName.length < 3) {
    displayMsg("Last name must contain more than 2 letters", "lnamemsg", "red");
    return false;
  }
  // regex...
  else if (!lName.match(/^[A-Za-z]+$/)) {
    displayMsg(
      "Last Name must not contain numbers or special characters",
      "lnamemsg",
      "red"
    );
    return false;
  } else {
    displayMsg("Last Name is valid", "lnamemsg", "green");
    return true;
  }
};

// Email...
const validEmail = () => {
  const email = document.getElementById("email").value;
  // checking if email is empty
  if (email === "") {
    displayMsg("Email is required", "emailmsg", "red");
    return false;
  }
  // it is not required for email...
  // } else if (email.length < 3) {
  //   displayMsg("Email must not contain more than 2 letters", "emailmsg", "red");
  //   return false;
  else if (
    !email.match(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo|hotmail|icloud)\.com$/)
  ) {
    displayMsg("Email is not valid", "emailmsg", "red");
    return false;
  } else {
    displayMsg("Email is valid", "emailmsg", "green");
    return true;
  }
};

// password
const validPassword = () => {
  const password = document.getElementById("password").value;

  if (password === "") {
    displayMsg("Password is required", "passwordmsg", "red");
    return false;
  } else if (password.length < 8) {
    displayMsg(
      "Password must contain more than 8 letters",
      "passwordmsg",
      "red"
    );
    return false;
  } else if (
    !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/)
  ) {
    displayMsg(
      "Password must contain atleast 1 uppercase, 1 lowercase and 1 special character and more than 8 characters",
      "passwordmsg",
      "red"
    );
    return false;
  } else {
    displayMsg("Password is valid", "passwordmsg", "green");
    return true;
  }
};

// const password = document.getElementById("password");
// const box = document.getElementById("box");
// const checkbox = document.getElementById("cbox");

// checkbox.addEventListener("click", () => {
//   const pass = password.value;
//   box.textContent = pass;
// });

// Confirm password
const validCPassword = () => {
  const cpassword = document.getElementById("cpassword").value;
  const password = document.getElementById("password").value;
  if (cpassword === "") {
    displayMsg("Confirm Password field cannot be blank", "cpasswordmsg", "red");
    return false;
  }
  // else if (password === "") {
  //   displayMsg("Password is required", "cpasswordmsg", "red");
  // }
  else if (!(cpassword === password)) {
    displayMsg("Confirm password is not matched", "cpasswordmsg", "red");
    return false;
  } else {
    displayMsg("Confirm password is matched", "cpasswordmsg", "green");
    return true;
  }
};

// display message function
const displayMsg = (msg, id, color) => {
  document.getElementById(id).innerText = msg;
  document.getElementById(id).style.color = color;
};

// show hide password
const showHide = document.querySelector(".bx");
const cbtnShow = document.querySelector(".box");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

showHide.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    showHide.classList.remove("bx-low-vision");
    showHide.classList.add("bx-show");
  } else {
    password.type = "password";
    showHide.classList.remove("bx-show");
    showHide.classList.add("bx-low-vision");
  }
});

cbtnShow.addEventListener("click", () => {
  if (cpassword.type === "password") {
    cpassword.type = "text";
    cbtnShow.classList.remove("bx-low-vision");
    cbtnShow.classList.add("bx-show");
  } else {
    cpassword.type = "password";
    cbtnShow.classList.remove("bx-show");
    cbtnShow.classList.add("bx-low-vision");
  }
});

const validForm = () => {
  if (
    validFname() &
    validLname() &
    validEmail() &
    validPassword() &
    validCPassword()
  ) {
    alert("Successfully form Submitted");
    return true;
  } else {
    alert("Form validation is failed");
    return false;
  }
};
