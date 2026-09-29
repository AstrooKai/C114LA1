// Function to evaluate the score
function evaluateScore(scoreInput) {
    // Check if the score input is empty or null
    if (scoreInput === null || scoreInput.trim() === "") {
        return "Your score cannot be blanked!";
    }

    // Convert the score input to a number
    let numericScore = Number(scoreInput);

    // Check if the score input is a valid number
    if (isNaN(numericScore)) {
        return "Please input a valid numerical score";
    }

    // Check if the score input is within the valid range
    if (numericScore <= 0 || numericScore > 100) {
        return "Your score must be between 1 and 100.";
    }

    // Determine the remark based on the score
    if (numericScore >= 90) { // Check if the score is 90 or above
        return "Excellent";
    } else if (numericScore >= 75) { // Check if the score is 75 or above
        return "Passed";
    } else { // If the score is below 75
        return "Failed";
    }
}

document.getElementById("startBtn").addEventListener("click", function () {
    // Display the welcome message
    alert("Welcome to the Student Score Evaluator!");

    // Declare the variable for the student's name
    let studentName;

    // Set the initial prompt for the student's name
    // namePrompt stores the prompt message for the student's name, it updates based on the input
    let namePrompt = "Please enter your name:";

    // Keep asking for the name until it's valid
    while (true) {
        studentName = prompt(namePrompt);

        // Check if the student name input is null
        if (studentName === null) {
            alert("Evaluation cancelled.");
            return;
        }

        // Check if the student name input is empty
        if (studentName.trim() === "") {
            // Update the prompt message for the student's name
            namePrompt = "Your name cannot be blanked! Please re-enter your name:";
        } else {
            // Exit the loop if the student name input is valid
            break;
        }
    }

    let studentScore;
    let remark;

    // Set the initial prompt for the student's score
    // scorePrompt stores the prompt message for the student's score, it updates based on the input
    let scorePrompt = "Please enter your score:";

    // Keep asking for the score until it's valid
    while (true) {
        studentScore = prompt(scorePrompt);

        // Check if the student score input is null
        if (studentScore === null) {
            alert("Evaluation cancelled.");
            return;
        }

        remark = evaluateScore(studentScore);

        // Check if the remark is valid
        if (remark === "Excellent" || remark === "Passed" || remark === "Failed") {
            // Exit the loop if the remark is valid
            break;
        } else {
            // Update the prompt message for the student's score
            scorePrompt = remark + " Please enter your score:";
        }
    }

    // Ask if the user wants to continue
    let continueEvaluation = confirm("Do you want to continue with the evaluation?");

    // If the user does not want to continue, exit the function
    if (!continueEvaluation) {
        alert("Evaluation cancelled.");
        return;
    }

    // Display the final evaluation result
    document.getElementById("nameOutput").innerText = studentName;
    document.getElementById("scoreOutput").innerText = studentScore;
    document.getElementById("remarkOutput").innerText = remark;
    document.getElementById("resultBox").classList.remove("hidden");
});