var tupacmodal = document.getElementById("2pac-modal");

var tupacbtn = document.getElementById("2pac-modal-btn");

var span = document.getElementsByClassName("close")[0];

tupacbtn.onclick = function() {
  tupacmodal.style.display = "block";
}

span.onclick = function() {
  tupacmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == tupacmodal) {
    tupacmodal.style.display = "none";
  }
}

var snoopmodal = document.getElementById("snoop-modal");

var snoopbtn = document.getElementById("snoop-modal-btn");

var snoopspan = document.getElementsByClassName("snoopclose")[0];

snoopbtn.onclick = function() {
  snoopmodal.style.display = "block";
}

snoopspan.onclick = function() {
  snoopmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == snoopmodal) {
    snoopmodal.style.display = "none";
  }
}
