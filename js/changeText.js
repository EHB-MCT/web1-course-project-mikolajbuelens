"use strict";

function changeIntro(size) {
    let introText = document.getElementById("intro");
    if (size.matches) {
      console.log("match");
      introText.innerHTML = "<span>Hallo world,<br>I'm Mikolaj<span>";
    }  else {
      console.log("not a match");
      
      introText.innerHTML =" console.log(<span>'Hallo world, I'm Mikolaj!'</span>);";
    }
  }
  let size = window.matchMedia("(max-width:685px)");
  changeIntro(size);
  size.addListener(changeIntro);