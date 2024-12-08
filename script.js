let timerInterval;

let isRunning = false;

let totalSeconds = 25 * 60;

const startPauseBtn = document.getElementById('start-pause');

const resetBtn = document.getElementById('reset');

const minutesSpan = document.getElementById('minutes');

const secondsSpan = document.getElementById('seconds');


function formatTime(seconds) {

  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');

  const secs = (seconds % 60).toString().padStart(2, '0');

  return { mins, secs };

}

function updateTimerDisplay() {

  const { mins, secs } = formatTime(totalSeconds);

  minutesSpan.textContent = mins;

  secondsSpan.textContent = secs;

}


startPauseBtn.addEventListener('click', () => {

  if (isRunning) {

    clearInterval(timerInterval);

    startPauseBtn.textContent = 'Start';

  } else {

    timerInterval = setInterval(() => {

      if (totalSeconds > 0) {

        totalSeconds--;

        updateTimerDisplay();

      } else {

        clearInterval(timerInterval);

        alert('Great job! Time for a break!');

      }

    }, 1000);

    startPauseBtn.textContent = 'Pause';

  }

  isRunning = !isRunning;

});

resetBtn.addEventListener('click', () => {

  clearInterval(timerInterval);

  totalSeconds = 25 * 60;

  updateTimerDisplay();

  startPauseBtn.textContent = 'Start';

  isRunning = false;

});

updateTimerDisplay();

// Habit Tracker: Add Habit

const habitList = document.getElementById('habit-list');

const newHabitInput = document.getElementById('new-habit-input');

const addHabitBtn = document.getElementById('add-habit-btn');

addHabitBtn.addEventListener('click', () => {

  const habitText = newHabitInput.value.trim();

  if (habitText) {

    const habitDiv = document.createElement('div');

    habitDiv.className = 'habit';

    habitDiv.innerHTML = `

      <label>

        <input type="checkbox"> ${habitText}

      </label>

    `;

    habitList.appendChild(habitDiv);

    newHabitInput.value = '';

  } else {

    alert('Please enter a habit!');

  }

});