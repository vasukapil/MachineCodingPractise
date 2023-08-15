var bar = document.getElementById("progress-bar");
var dynamicBar = document.getElementById("dynamic");
var progressPercentage = document.querySelector("#progress-bar p");

var startTime = Date.now();

var updateInterval = setInterval(function () {
  var elapsedTimeInSeconds = (Date.now() - startTime) / 1000;

  var progress = (elapsedTimeInSeconds / 5) * 100;
  if (progress > 100) {
    progress = 100;
    clearInterval(updateInterval);
  }

  //   bar.style.maxWidth = "800px"
  dynamicBar.style.width = progress + "%";
  dynamicBar.style.backgroundColor = "#9047ff";
  progressPercentage.textContent = Math.round(progress) + "%";
  progressPercentage.style.color = "#455265=";
}, 16);
