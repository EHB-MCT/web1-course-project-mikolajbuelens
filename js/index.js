"use strict";

function toggle() {
  let hamburger = document.getElementById("ham");
  if (hamburger.style.display === "block") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}

// function displayNav(size) {
//   let hamburger = document.getElementById("ham");

//   if (size.matches) {
//     hamburger.style.display = "block";
//   } else {
//     hamburger.style.display = "none";
// // console.log("no macth");
//   }
//   // console.log("size is a match");
// }

// var size = window.matchMedia("(min-width:1150px)");
// displayNav(size);
// size.addListener(displayNav);




