// Get the id of the <path> element and the length of <path>
var timeline = document.getElementById("timeline");
var length = timeline.getTotalLength();

// The start position of the drawing
timeline.style.strokeDasharray = length;

// Hide the timeline by offsetting dash. Remove this line to show the timeline before scroll draw
timeline.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  timeline.style.strokeDashoffset = length - draw;
}
