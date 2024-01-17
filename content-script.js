// Function to convert decimal odds to percentage
function convertOddsToPercentage(odds) {
    return (1 / odds) * 100;
}

// Function to update odds elements on the page
function updateOddsElements() {
    let oddsElements = document.querySelectorAll('.odds-class'); // Replace '.odds-class' with the actual class/identifier

    oddsElements.forEach(element => {
        let odds = parseFloat(element.innerText);
        if(!isNaN(odds)) {
            let percentage = convertOddsToPercentage(odds);
            element.innerText = `${percentage.toFixed(2)}%`;
        }
    });
}

// Call the function on initial load
updateOddsElements();

// Optional: Use MutationObserver to handle dynamic content
// More complex, involves setting up an observer to watch for changes in the DOM
