var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var email = document.querySelector(".email");
var country = document.querySelector(".country");
var bio = document.querySelector(".bio");
var phone = document.querySelector(".phone");
var affiliation = document.querySelector(".affiliation");
var occupation = document.querySelector(".occupation");
var cat = document.querySelector(".catName");
var gadget = document.querySelector(".gadget");
var talent = document.querySelector(".talent");
var drink = document.querySelector(".drink");
var power = document.querySelector(".power");
var weapon = document.querySelector(".weapon");
var comments = document.querySelector(".comment");
var submit = document.querySelector(".submit");

submit.addEventListener("click", function log(){
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(country.value);
  console.log(bio.value);
  console.log(phone.value);
  console.log(affiliation.value);
  console.log(occupation.value);
  console.log(cat.value);
  console.log(gadget.value);
  console.log(talent.value);
  console.log(drink.value);
  console.log(power.value);
  console.log(weapon.value);
  console.log(comments.value);
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  country.value = "";
  bio.value = "";
  phone.value = "";
  affiliation.value = "";
  occupation.value = "";
  cat.value = "";
  gadget.value = "";
  talent.value = "";
  drink.value = "";
  power.value = "";
  weapon.value = "";
  comments.value = "";

});
