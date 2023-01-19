

var timer = document.getElementById("timer");
var duration = 5; // duration in seconds

setInterval(updateTimer, 1000);

function updateTimer() {
	duration--;
	if ( duration < 1 ) {
		window.location = "logout.html";
	} else {
		timer.innerText = "Auto Logout In: " + formatTime(duration);
	}	
}

window.addEventListener("mousemove", resetTimer);

function resetTimer() {
	duration = 15;
}

function formatTime(timeInSeconds) {
	var minutes = Math.floor(timeInSeconds / 60);
	var seconds = timeInSeconds % 60;
	if ( minutes < 10 ) { minutes = "0" + minutes; }
	if ( seconds < 10 ) { seconds = "0" + seconds; }
	return minutes + ":" + seconds;
}
