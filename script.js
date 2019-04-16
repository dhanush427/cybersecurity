var div = document.getElementById("slidingDiv");
div.style.position = "absolute";
var left = document.body.offsetWidth;
div.style.left = left + "px";
var gap = 5;
var timer = window.setInterval(function() {
  div.style.left = left + "px";
  if (left - gap < 0) {
    left = 0;
  } else {
    left -= gap;
  }
  if (left == 0) {
    clearInterval(timer);
  }
}, 1);