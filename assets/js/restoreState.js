// Store the state variables
let isProjectTypeExpanded = false;
let activeProjectCard = null;

// Get the required elements from the DOM
const projectTypeSection = document.getElementById('projTypeName');
const projectTypeToggle = document.getElementById('projTypeToggle');
const projectCards = document.getElementsByClassName('card');
const backButton = document.getElementById('backButton');

// Function to expand/collapse Data Analytics section
function toggleProjectTypes() {
    isProjectTypeExpanded = !isProjectTypeExpanded;
    projectTypeSection.classList.toggle('expanded', isProjectTypeExpanded);
}

// Function to handle project card click
function handleProjectCardClick(cardIndex) {
    activeProjectCard = cardIndex;
    // Perform necessary actions when a project card is clicked
}

// Function to restore previous state
function restorePreviousState() {
    // Expand Data Analytics section if it was previously expanded
    projectTypeSection.classList.toggle('expanded', isProjectTypeExpanded);
    
    // Scroll or highlight the active project card if it exists
    if (activeProjectCard !== null) {
    projectCards[activeProjectCard].scrollIntoView({ behavior: 'smooth' });
    // Perform additional styling or highlighting as needed
    }
}

// Event listener for Data Analytics toggle
projectTypeToggle.addEventListener('click', toggleProjectTypes);

// Event listeners for project card clicks
for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].addEventListener('click', () => handleProjectCardClick(i));
}

// Event listener for back button
backButton.addEventListener('click', restorePreviousState);