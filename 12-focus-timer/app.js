
let count = 10;
let interval = null;
const timerDisplay = document.querySelector('#timer');
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    timerDisplay.textContent = count;
    // Add a little animation class if needed
    timerDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        timerDisplay.style.transform = 'scale(1)';
    }, 100);
}

startBtn.addEventListener("click", () => {
    if (interval) return; // Already running

    interval = setInterval(() => {
        if (count > 0) {
            count--;
            updateDisplay();
        } else {
            clearInterval(interval);
            interval = null;
            timerDisplay.textContent = "Time's Up!";
            timerDisplay.style.color = "#ff4757";
        }
    }, 1000);
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    count = 10;
    updateDisplay();
    timerDisplay.style.color = "white";
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// Initial display
updateDisplay();
disableStop();

function disableStop() {
    stopBtn.disabled = true;
}