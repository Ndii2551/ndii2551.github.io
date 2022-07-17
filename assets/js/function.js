// Collapsible Search Box
function openCollapsibleSrcbox() {
  document.getElementById("collapsible-srcbox-base").style.marginLeft = "0%";
  document.getElementById("collapsible-srcbox-in").focus();
}
function closeCollapsibleSrcbox() {
  document.getElementById("collapsible-srcbox-base").style.marginLeft = "100%";
}

// Collapsible Sidebar
function openCollapsibleSidebar() {
  document.getElementById("coll-sbar-base").style.marginLeft = "0%";
  document.getElementById("coll-sbar-content").style.marginLeft = "0%";
}
function closeCollapsibleSidebar() {
  document.getElementById("coll-sbar-base").style.marginLeft = "-100%";
  document.getElementById("coll-sbar-content").style.marginLeft = "-40%";
}
function sbDrpdwnon() {
  document.getElementById("sbar-prdct-dropdown").style.display = "block";
  document.getElementById("sbar-lb").style.display = "flex";
  document.getElementById("sbar-a-ic-off").style.transform = "rotate(90deg)";
  document.getElementById("sbar-a-off").style.display = "flex";
  document.getElementById("sbar-a-on").style.display = "none";
}
function sbDrpdwnoff() {
  document.getElementById("sbar-prdct-dropdown").style.display = "none";
  document.getElementById("sbar-lb").style.display = "none";
  document.getElementById("sbar-a-ic-on").style.transform = "rotate(0)";
  document.getElementById("sbar-a-off").style.display = "none";
  document.getElementById("sbar-a-on").style.display = "flex";
}


// Carousel Text
const txts = document.querySelector(".carousel-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;
