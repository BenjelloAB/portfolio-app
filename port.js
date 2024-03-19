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
      return setTimeoutAsync(3000);
    })
    .then(() => {
      notif.classList.add("reverseAnimation");
      notif.addEventListener("animationend", () => {
        if (notif.classList.contains("reverseAnimation"))
          notif.classList.remove("reverseAnimation");
        if (notif.classList.contains("active22"))
          notif.classList.remove("active22");
      });
    });
});

function removeActive() {
  notif.classList.remove("active22");
}

function setTimeoutAsync(time) {
  return new Promise((resolve) => {
    return setTimeout(resolve, time);
  });
}
