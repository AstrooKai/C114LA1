function evaluateScore(scoreInput, nameInput) {
    if (nameInput === null || nameInput.trim() === "") {
        return "Invalid score";
    }

    if (scoreInput === null || scoreInput.trim() === "") {
        return "Invalid score";
    }

    let numericScore = Number(scoreInput);

    if (isNaN(numericScore)) {
        return "Invalid score";
    }

    if (numericScore <= 0 || numericScore > 100) {
        return "Invalid score";
    }

    if (numericScore >= 90 && numericScore <= 100) {
        return "Excellent";
    } else if (numericScore >= 75 && numericScore < 90) {
        return "Passed";
    } else {
        return "Failed";
    }
}

document.getElementById("startBtn").addEventListener("click", function () {
    // Display the welcome message
    alert("Welcome to the Student Score Evaluator!");

    // Ask the user to enter their name
    let studentName = prompt("Please enter your name:");

    // Ask the user to enter their score
    let studentScore = prompt("Please enter your score:");

    // Convert the score into a number
    let score = Number(studentScore);

    // Ask if the user wants to continue
    let continueEvaluation = confirm("Do you want to continue with the evaluation?");

    if (!continueEvaluation) {
        alert("Evaluation cancelled.");
        return;
    }

    let remark = evaluateScore(studentScore, studentName);

    document.getElementById("nameOutput").textContent = studentName || "N/A";
    document.getElementById("scoreOutput").textContent = studentScore === null || studentScore.trim() === "" ? "N/A" : studentScore;
    document.getElementById("remarkOutput").textContent = remark;
    document.getElementById("resultBox").classList.remove("hidden");
});
