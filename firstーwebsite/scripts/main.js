const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Firefox_logo,_2017.svg") {
    myImage.setAttribute("src", "images/Hokusai_Dragon.jpg");
  } else {
    myImage.setAttribute("src", "images/Firefox_logo,_2017.svg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Enter your name");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("username", myName);
    myHeading.textContent = `Hello, ${myName} !`;
  }
}

if (!localStorage.getItem("username")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("username");
  myHeading.textContent = `Welcome back, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
