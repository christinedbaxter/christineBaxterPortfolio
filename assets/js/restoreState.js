// Store the state variables
let isProjectTypeExpanded = false;
let activeProjectCard = null;
let activeProjectType = null;

// Get the required elements from the DOM
const projectTypeSection = document.getElementById('myProjectsRow');
const projectTypeAnalytics = document.getElementById('dataAnalytics');
const projectTypeFullStack = document.getElementById('fullStackWebDev');
const projectTypeToggle = document.getElementsByClassName('projType');
const projectCards = document.getElementsByClassName('card-container');

// Function to expand/collapse Data Analytics/Full Stack Web Development sections
function toggleProjectTypes(projTypeIndex) {
    activeProjectType = projTypeIndex;
    isProjectTypeExpanded = !isProjectTypeExpanded;
    projectTypeSection.classList.toggle('expanded', isProjectTypeExpanded);
    }

    // Should be null because we haven't modified the history stack yet
    console.log("History.state before pushState: ", history.state);
    
    // Store the current state in history
    history.pushState({ isProjectTypeExpanded: isProjectTypeExpanded, activeProjectCard: activeProjectCard }, "");


// Function to handle project card click
function handleProjectCardClick(cardIndex) {
    activeProjectCard = cardIndex;
    projectCards[cardIndex].scrollIntoView({ behavior: 'smooth' });

    // Perform necessary actions when a project card is clicked
    let coll = document.getElementsByClassName("collapsible");
    
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    // When the page is loaded...
    window.onload = function() {
        for (let i = 0; i < coll.length; i++) {
            if (localStorage.getItem(coll[i].id) == 'expanded') {
                coll[i].classList.add("active");
                let content = coll[i].nextElementSibling;
                content.style.display = "block";
            }
        }
    }

    // Store the current state in history
    history.pushState({ isProjectTypeExpanded: isProjectTypeExpanded, activeProjectCard: activeProjectCard }, "");
     // Now state has a value.
console.log("History.state after pushState: ", history.state);
}

// Function to restore previous state
function restorePreviousState(state) {
    // Set variables based on state
    if(state) {
        isProjectTypeExpanded = state.isProjectTypeExpanded;
        activeProjectCard = state.activeProjectCard;
    }

    // Expand Data Analytics section if it was previously expanded
    projectTypeSection.classList.toggle('expanded', isProjectTypeExpanded);

    // Scroll or highlight the active project card if it exists
    if (activeProjectCard !== null) {
    projectCards[activeProjectCard].scrollIntoView({ behavior: 'smooth' });
    // Perform additional styling or highlighting as needed
    }
}

// Event listener for Data Analytics/Full Stack Web development toggles
for (let i = 0; i < projectTypeToggle.length; i++) {
    projectTypeToggle[i].addEventListener('click', () => toggleProjectTypes(i));
}

// Event listeners for project card clicks
for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].addEventListener('click', () => handleProjectCardClick(i));
}

window.addEventListener("popstate", (event) => {
  console.log(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

// Event listener for popstate (back/forward navigation)
window.addEventListener('popstate', (event) => {
    restorePreviousState(event.state);
});


