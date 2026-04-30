const countValue = document.querySelector('.counter');
let count = parseInt(localStorage.getItem('counter_val')) || 0;

const updateDisplay = () => {
    countValue.innerText = count;
    localStorage.setItem('counter_val', count);
    
    // Visual feedback
    if (count > 0) countValue.style.color = "#00f2fe";
    else if (count < 0) countValue.style.color = "#ff003c";
    else countValue.style.color = "#344151";

    // Add a little pop animation
    countValue.style.transform = "scale(1.2)";
    setTimeout(() => {
        countValue.style.transform = "scale(1)";
    }, 100);
};

// Initial display
updateDisplay();

const increment = () => {
    count++;
    updateDisplay();
};

const decrement = () => {
    count--;
    updateDisplay();
};

const reset = () => {
    if(confirm("Are you sure you want to reset the counter?")) {
        count = 0;
        updateDisplay();
    }
};