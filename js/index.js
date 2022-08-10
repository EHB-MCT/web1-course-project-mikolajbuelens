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

function changeIntro(size) {
  let introText = document.getElementById("intro");
  if (size.matches) {
    console.log("match");
    introText.innerHTML = "<span>Hallo world,<br>I'm Mikolaj<span>";
  }  else {
    console.log("not a match");
    
    introText.innerHTML ="  console.log(<span>'Hallo world, I'm Mikolaj!'</span>);";
    //   "console.log(<span>'Hallo world, I'm Mikolaj!'</span>);";
  }
}
let size = window.matchMedia("(max-width:565px)");
changeIntro(size);
size.addListener(changeIntro);


