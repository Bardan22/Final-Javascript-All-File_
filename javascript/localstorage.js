const form = {
  firstName: "Bardan",
  lastName: "Nepali",
  email: "abc@gmail.com",
};

// convert into string...
const obj_To_Str = JSON.stringify(form);
localStorage.setItem("formData", obj_To_Str);
// converting str to obj and getItem
const Str_To_Obj = JSON.parse(localStorage.getItem("formData"));

console.log(Str_To_Obj);
const fname = document.getElementById("firstname");
fname.value = Str_To_Obj.firstName;
const lname = document.getElementById("lastname");
lastname.value = Str_To_Obj.lastName;
const email = document.getElementById("email");
email.value = Str_To_Obj.email;

// clear methods...
