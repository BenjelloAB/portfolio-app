const contact = document.getElementById("contact");
const msg = document.getElementById("messageme");
const message = document.getElementById("message");
const email = document.getElementById("email");
const contactIcon = document.getElementsByClassName("contacts-icon");
const notif = document.getElementById("notif");
const form = document.getElementById("form");
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
form.addEventListener("submit", function (e) {
  console.log("subed");
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  // result.innerHTML = "Please wait..."

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        // result.innerHTML = "Form submitted successfully";
        notif.classList.add("active22");
      } else {
        console.log(response);
        console.log(json);
        // result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error + "add red card mtf");
      // result.innerHTML = "Something went wrong!";
    })
      .then(function () {
        form.reset();
        return new Promise(resolve => setTimeout(resolve, 3000));
      })
      .then(() => {
        notif.classList.add("reverseAnimation");
      })
      .then(() => {
        return new Promise(resolve => setTimeout(resolve, 3000));
      })
      .then(() => {
        notif.classList.remove("active22");
        notif.classList.remove("reverseAnimation");
      });
});

function removeActive() {
  notif.classList.remove("active22");
}
