function generateStory() {
    const form = document.getElementById("storyForm");
    const storyContainer = document.getElementById("storyContainer");
    const placeholders = storyContainer.getElementsByClassName("placeholder");

    for (let i = 0; i < form.elements.length - 1; i++) {
        const textBoxValue = form.elements[i].value;
        const storyHole = placeholders[i];

        if (textBoxValue.trim() === "") {
            storyHole.textContent = "«missing text»";
            storyHole.classList.add("missing");
        } else {
            storyHole.textContent = textBoxValue;
            storyHole.classList.remove("missing");
        }
    }
}

function resetFormAndStory() {
    const form = document.getElementById("storyForm");

    for (let i = 0; i < form.elements.length - 1; i++) {
        form.elements[i].value = "";
    }
    generateStory();
}

// Initialize the story with missing text when the page loads.
document.addEventListener("DOMContentLoaded", generateStory);