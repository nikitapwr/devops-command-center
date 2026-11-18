// DEPLOYMENT SIMULATION

const deployButton = document.getElementById("deploy-btn");
const deploymentStatus = document.getElementById("deployment-status");
const deploymentMessage = document.getElementById("deployment-message");

deployButton.addEventListener("click", function () {

    deployButton.disabled = true;
    deployButton.textContent = "Deploying...";

    deploymentStatus.textContent = "◉ Deployment in progress...";
    deploymentStatus.style.color = "#facc15";

    deploymentMessage.textContent =
        "Building application and preparing release...";

    setTimeout(function () {

        deploymentStatus.textContent = "● Deployment successful";
        deploymentStatus.style.color = "#4ade80";

        deploymentMessage.textContent =
            "Your application has been successfully deployed!";

        deployButton.disabled = false;
        deployButton.textContent = "Deploy Again ↗";

    }, 2500);

});


// TASK COMPLETION COUNTER

const checkboxes = document.querySelectorAll(
    '.task input[type="checkbox"]'
);

const taskCount = document.getElementById("task-count");

function updateTaskCount() {

    const completed = document.querySelectorAll(
        '.task input[type="checkbox"]:checked'
    ).length;

    taskCount.textContent = completed + " / " +
        checkboxes.length + " completed";

}

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", updateTaskCount);

});

updateTaskCount();


// SIDEBAR ACTIVE NAVIGATION

const navigationLinks = document.querySelectorAll(".nav-link");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});