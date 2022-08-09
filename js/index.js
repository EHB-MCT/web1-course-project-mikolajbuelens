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

// fade-in-out function used from https://christopheraue.net/design/fading-pages-on-load-and-unload

function fadeInPage() {
  if (!window.AnimationEvent) {
    return;
  }
  let fade = document.getElementById("fade");
  fade.setAttribute("class", "fade-out");
}

document.addEventListener("DOMContentLoaded", function () {
  if (!window.AnimationEvent) {
    return;
  }
  let anchors = document.getElementsByTagName("a");
  for (let x = 0; x < anchors.length; x += 1) {
    if (
      anchors[x].hostname !== window.location.hostname ||
      anchors[x].pahtname !== window.location.pathname
    ) {
      continue;
    }
    anchors[x].addEventListener("click", function (e) {
      let fade = document.getElementById("fade"),
        anchor = e.currentTarget;
      let listener = function () {
        window.location = anchor.href;
        fade.removeEventListener("animationend", listener);
      };
      fade.addEventListener("animationend", listener);
      event.preventDefault();
      fade.setAttribute("class", "fade-in");
    });
  }
});

window.addEventListener("pageshow", function (e) {
  if (!event.persisted) {
    return;
  }
  let fade = document.getElementById("fade");
  fade.removeAttribute("class", "fade-in");
});
