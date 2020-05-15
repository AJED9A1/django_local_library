var btn = document.getElementById("cbtnA");
var content = document.getElementById("contentA");

function displayGraphA() {
  document.getElementById("contentA").style.display = "block";
  document.getElementById("contentB").style.display = "none";
}

var btnB = document.getElementById("cbtnB");
var contentB = document.getElementById("contentB");

function displayGraphB() {
  document.getElementById("contentA").style.display = "none";
  document.getElementById("contentB").style.display = "block";
}
