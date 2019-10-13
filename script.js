var hrhand = document.getElementById("hr");
var minhand = document.getElementById("min");
var sechand = document.getElementById("sec");

//Updates every second
setInterval(function(){

  var time = new Date();
  var hr = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  
  sechandAngle = sec*6;
  minhandAngle = min*6;
  hrhandAngle = hr*30 + (min/60)*30;

  mech(hrhandAngle, hrhand);
  mech(minhandAngle, minhand);
  mech(sechandAngle, sechand);
}, 1000)

//Rotation of the hands

function mech(angle,hand) {
  if (angle == 0) {
    //This is to avoid the hand to spin all the way around anti-clockwise.
    hand.style.transform = "rotate(360deg)";
    setTimeout(function(){hand.style.transition = "none";
    hand.style.transform = "rotate(0deg)";},700) 
  } else {
    hand.style.transition = "transform 0.1s";
    hand.style.transform = `rotate(${angle}deg)`;
  }
}


