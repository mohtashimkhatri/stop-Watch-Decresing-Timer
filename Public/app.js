  /* stop Watch Sart */
  let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

function displayTimer() {
  milliseconds += 10;
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});
  
  /* stop Watch End */

 /* decresing Timer Start  */
 window.onload = function() {
  var timerDisplay = document.getElementById('timer');
  var minutes = prompt('enter  Your Timer start Time'); // Starting minutes
  var seconds = 0; // Starting seconds

  function updateTimer() {
      // Display the current time
      timerDisplay.innerHTML = formatTime(minutes) + ":" + formatTime(seconds);

      // Check if the timer has reached 00:00
      if (minutes === 0 && seconds === 0) {
          clearInterval(timerInterval); // Stop the timer
          alert("Timer has ended!"); // Show an alert or perform any other action
      } else {
          // Decrease the time by 1 second
          if (seconds === 0) {
              minutes--;
              seconds = 59;
          } else {
              seconds--;
          }
      }
  }

  // Helper function to format time with leading zeros
  function formatTime(time) {
      return time < 10 ? "0" + time : time;
  }

  // Start the timer
  var timerInterval = setInterval(updateTimer, 1000);
};


 /* decresing Timer end */




