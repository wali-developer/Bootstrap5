//Timer function

// The data/time we want to countdown to
var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m ";
  document.getElementById("secs").innerHTML = seconds + "s ";
}, 1000);

// function for tabs
function handleClick(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
