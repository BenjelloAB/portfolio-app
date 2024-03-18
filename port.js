const contact = document.getElementById("contact");
const msg = document.getElementById("messageme");
const message = document.getElementById("message");
const email = document.getElementById("email");
const contactIcon = document.getElementsByClassName("contacts-icon");
console.log(contactIcon);
const name = document.getElementById("name");
let clickedOnMsg = false;

// msg.addEventListener("click", () => {
//   clickedOnMsg = true;
//   contact.classList.toggle("active");
// });
contactIcon[0].addEventListener("click", (event) => {
  clickedOnMsg = true;
  contact.classList.toggle("active");
  event.stopPropagation(); // Prevent this click event from triggering the document's click event
});
msg.addEventListener("click", (event) => {
  clickedOnMsg = true;
  contact.classList.toggle("active");
  event.stopPropagation(); // Prevent this click event from triggering the document's click event
});

document.addEventListener("click", (event) => {
  if (!contact.contains(event.target) && clickedOnMsg) {
    contact.classList.remove("active");
    clickedOnMsg = false; // Reset flag after outside click
  }
});
// contact.addEventListener("submit", (e) => {
//   console.log("subed");
//   //   e.preventDefault();
//   message.value = "";
//   email.value = "";
//   name.value = "";
// });
// document.addEventListener('click', event => {
//     const isClickInside = specifiedElement.contains(event.target)

//     if (!isClickInside) {
//       // The click was OUTSIDE the specifiedElement, do something
//     }
//   })
// document.addEventListener("click", (event) => {
// //   console.log(event);
//   if (!contact.contains(event.target) && clickedOnMsg) {
//     contact.classList.remove("active");
//     clickedOnMsg = false; // Reset flag after outside click
//   }
// });
// msg.addEventListener("click", () => {
//   contact.classList.toggle("active");
// });

// console.log(contact.classList.contains("active"))
// if (contact.classList.contains("active")) {
//   document.addEventListener("click", (event) => {
//     if (!contact.contains(event.target)) {
//       contact.classList.remove("active");
//     }
//   });
// }
