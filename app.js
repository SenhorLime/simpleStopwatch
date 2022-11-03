let [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
let timerLocal = document.querySelector('.showTimer');
let int = null;
let toggleBTN = document.querySelector('.toggleBTN');
let body = document.querySelector('body');

document.getElementById('startButton').addEventListener('click', () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
})

document.getElementById('pauseButton').addEventListener('click', () => {
  clearInterval(int);
})

document.getElementById('resetButton').addEventListener('click', () => {
  clearInterval(int);
  [millisecond, seconds, minutes, hours] = [0, 0, 0, 0];
  timerLocal.innerHTML = "00 : 00 : 00 : 000";
})

function displayTimer() {
  millisecond += 10;

  if (millisecond == 1000) {
    seconds ++;
    millisecond = 0;

    if (seconds == 60) {
      minutes ++;
      seconds = 0;


      if (minutes == 60) {
        hours ++;
        minutes = 0;
      }
    }
  }


  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = millisecond < 10 ? "00" + millisecond : millisecond < 100 ? "0" + millisecond : millisecond;

  timerLocal.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

toggleBTN.onclick = function(){
  body.classList.toggle('light');
}