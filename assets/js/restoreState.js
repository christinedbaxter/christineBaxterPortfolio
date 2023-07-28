// Get the required elements from the DOM
const projectTypeToggle = document.getElementsByClassName('expandable');

// Function to expand/collapse Data Analytics/Full Stack Web Development sections
function toggleProjectTypes(event) {
    let projTypeElement = event.target.nextElementSibling;  // retrieve the div, not the button
    projTypeElement.classList.toggle('expanded');
}

// Event listener for Data Analytics/Full Stack Web development toggles
for (let i = 0; i < projectTypeToggle.length; i++) {
    projectTypeToggle[i].addEventListener('click', toggleProjectTypes);
}