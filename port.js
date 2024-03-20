const contact = document.getElementById("contact");
const msg = document.getElementById("messageme");
const message = document.getElementById("message");
const email = document.getElementById("email");
const contactIcon = document.getElementsByClassName("contacts-icon");
const notif = document.getElementById("notif");
const notiferr = document.getElementById("notif-err");
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
        console.log(json + "add red card mtf");
        notiferr.classList.add("active22");
        setTimeout(() => {
          notiferr.classList.add("reverseAnimation");
          // Wait for a delay before rejecting the Promise
          setTimeout(() => {
            Promise.reject("Error after no BOT/AI check");
          }, 1000);
        }, 1500);
        // setTimeout(() => {
        //   notiferr.classList.add("reverseAnimation");
        //   return Promise.reject(new Error("Error after no BOT/AI check"));
        // }, 1500);
        // setTimeoutAsync(1500).then(() => {
        //   notiferr.classList.add("reverseAnimation");
        //   throw new Error("Error after no BOT/AI check");
        // });
        // result.innerHTML = json.message;
      }
    })
    .then(function () {
      form.reset();
      return setTimeoutAsync(2000);
    })
    .then(() => {
      notif.classList.add("reverseAnimation");
      return setTimeoutAsync(2000);
    })
    .then(() => {
      if (notif.classList.contains("reverseAnimation"))
        notif.classList.remove("reverseAnimation");
      if (notif.classList.contains("active22"))
        notif.classList.remove("active22");
      if (notiferr.classList.contains("reverseAnimation"))
        notiferr.classList.remove("reverseAnimation");
      if (notiferr.classList.contains("active22"))
        notiferr.classList.remove("active22");
    })
    .catch((error) => {
      console.log(error + "add red card mtf catch error");
      if (notif.classList.contains("reverseAnimation"))
        notif.classList.remove("reverseAnimation");
      if (notif.classList.contains("active22"))
        notif.classList.remove("active22");
      if (notiferr.classList.contains("reverseAnimation"))
        notiferr.classList.remove("reverseAnimation");
      if (notiferr.classList.contains("active22"))
        notiferr.classList.remove("active22");
      // result.innerHTML = "Something went wrong!";
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
