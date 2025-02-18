const nameLeft = document.querySelector(".name-left");
const nameRight = document.querySelector(".name-right");

// Update overlay text and styling
function updateOverlay(element, value, defaultText) {
    if (value && value.trim()) {
        element.textContent = value;
        element.classList.add("has-content");
    } else {
        element.textContent = defaultText;
        element.classList.remove("has-content");
    }
}

// Handle incoming messages
window.addEventListener("message", (event) => {
    if (event.data.type === "update-variables") {
        const { name_left, name_right } = event.data.data;
        updateOverlay(nameLeft, name_left, "Enter left name");
        updateOverlay(nameRight, name_right, "Enter right name");
    }
});

window.parent.postMessage("iframe-ready", "*");
