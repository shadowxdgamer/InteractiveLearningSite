document.addEventListener("DOMContentLoaded", function () {
    const questions = [];
    const questionTypeSelect = document.getElementById("questionType");
    const optionsContainer = document.getElementById("optionsContainer");
    const optionsList = document.getElementById("optionsList");
    const correctAnswerInput = document.getElementById("correctAnswer");
    const quizPreview = document.getElementById("quizPreview");

    // Shuffle array for randomization
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Toggle options container for radio/checkbox questions
    questionTypeSelect.addEventListener("change", () => {
        if (["radio", "checkbox"].includes(questionTypeSelect.value)) {
            optionsContainer.style.display = "block";
        } else {
            optionsContainer.style.display = "none";
        }
    });

    // Add an option input
    document.getElementById("addOption").addEventListener("click", () => {
        const optionInput = document.createElement("input");
        optionInput.type = "text";
        optionInput.placeholder = "Enter an option";
        optionInput.className = "form-control mb-2";
        optionsList.appendChild(optionInput);
    });

    // Add a new question
    document.getElementById("addQuestion").addEventListener("click", () => {
        const questionText = document.getElementById("questionText").value.trim();
        const questionType = questionTypeSelect.value;
        const correctAnswer = correctAnswerInput.value
            .split(",")
            .map(ans => ans.trim().toLowerCase());
        const options = Array.from(optionsList.querySelectorAll("input"))
            .map(input => input.value.trim().toLowerCase())
            .filter(Boolean);

        if (!questionText) {
            alert("Please enter a question.");
            return;
        }

        if ((questionType === "radio" || questionType === "checkbox") && options.length < 2) {
            alert("Please add at least two options.");
            return;
        }

        if (!correctAnswer.length) {
            alert("Please enter at least one correct answer.");
            return;
        }

        const question = { questionText, questionType, options, correctAnswer };
        questions.push(question);

        renderQuizPreview();

        // Reset form
        document.getElementById("questionText").value = "";
        questionTypeSelect.value = "text";
        correctAnswerInput.value = "";
        optionsContainer.style.display = "none";
        optionsList.innerHTML = "";
    });

    // Render the quiz preview
    function renderQuizPreview() {
        quizPreview.innerHTML = "";
        questions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.className = "mb-4";

            const label = document.createElement("label");
            label.innerHTML = `<strong>Question ${index + 1}:</strong> ${q.questionText}`;
            label.className = "form-label fw-bold";
            questionDiv.appendChild(label);

            if (q.questionType === "text" || q.questionType === "code") {
                const input = document.createElement("input");
                input.type = "text";
                input.name = `q${index}`;
                input.className = "form-control";
                questionDiv.appendChild(input);
            } else if (q.questionType === "radio") {
                q.options.forEach((opt, optIndex) => {
                    const radioWrapper = document.createElement("div");
                    radioWrapper.className = "form-check";

                    const radio = document.createElement("input");
                    radio.type = "radio";
                    radio.name = `q${index}`;
                    radio.value = opt;
                    radio.id = `q${index}_opt${optIndex}`;
                    radio.className = "form-check-input";

                    const optLabel = document.createElement("label");
                    optLabel.textContent = `${String.fromCharCode(65 + optIndex)}. ${opt}`;
                    optLabel.className = "form-check-label";
                    optLabel.setAttribute("for", `q${index}_opt${optIndex}`);

                    radioWrapper.appendChild(radio);
                    radioWrapper.appendChild(optLabel);
                    questionDiv.appendChild(radioWrapper);
                });
            } else if (q.questionType === "checkbox") {
                q.options.forEach((opt, optIndex) => {
                    const checkboxWrapper = document.createElement("div");
                    checkboxWrapper.className = "form-check";

                    const checkbox = document.createElement("input");
                    checkbox.type = "checkbox";
                    checkbox.name = `q${index}`;
                    checkbox.value = opt;
                    checkbox.id = `q${index}_opt${optIndex}`;
                    checkbox.className = "form-check-input";

                    const optLabel = document.createElement("label");
                    optLabel.textContent = `${String.fromCharCode(65 + optIndex)}. ${opt}`;
                    optLabel.className = "form-check-label";
                    optLabel.setAttribute("for", `q${index}_opt${optIndex}`);

                    checkboxWrapper.appendChild(checkbox);
                    checkboxWrapper.appendChild(optLabel);
                    questionDiv.appendChild(checkboxWrapper);
                });
            }

            quizPreview.appendChild(questionDiv);
        });
    }

    // Generate and download the quiz files
    document.getElementById("generateQuiz").addEventListener("click", () => {
        const quizHTML = generateHTML();
        const quizJS = generateJS();

        downloadFile("quiz.html", quizHTML);
        downloadFile("quiz.js", quizJS);

        alert("Quiz files generated!");
    });

    function generateHTML() {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Quiz</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Custom Quiz</h1>
        <form id="quizForm" class="mt-4">
        <div id="questionsContainer"></div>
        <button type="button" class="btn btn-primary" onclick="submitQuiz()">Submit</button>
        <button type="button" class="btn btn-secondary mt-2" id="retestButton" onclick="retest()">Retest</button>
        </form>
        <div id="feedback"></div>
    </div>
    <script src="quiz.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
    }

    function generateJS() {
        return `let questions = ${JSON.stringify(questions)};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayQuestions() {
    const container = document.getElementById("questionsContainer");
    container.innerHTML = "";
    shuffleArray(questions);
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "mb-4";

        const label = document.createElement("label");
        label.textContent = q.questionText;
        questionDiv.appendChild(label);

        if (q.questionType === "text") {
            const input = document.createElement("input");
            input.type = "text";
            input.id = "q" + index;
            input.className = "form-control";
            questionDiv.appendChild(input);
        } else if (q.questionType === "radio") {
            q.options.forEach((opt, optIndex) => {
                const radioWrapper = document.createElement("div");
                radioWrapper.className = "form-check";

                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "q" + index;
                radio.value = opt.toLowerCase();
                radio.id = "q" + index + "_opt" + optIndex;
                radio.className = "form-check-input";

                const optLabel = document.createElement("label");
                optLabel.textContent = opt;
                optLabel.className = "form-check-label";
                optLabel.setAttribute("for", "q" + index + "_opt" + optIndex);

                radioWrapper.appendChild(radio);
                radioWrapper.appendChild(optLabel);
                questionDiv.appendChild(radioWrapper);
            });
        }

        container.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "";

    questions.forEach((q, index) => {
        const userAnswer = document.querySelector(\`input[name="q\${index}"]:checked\`)?.value || document.getElementById("q" + index)?.value?.trim().toLowerCase();
        const isCorrect = q.correctAnswer.includes(userAnswer);
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = isCorrect ? "<span class='text-success'>✔ Correct</span>" : "<span class='text-danger'>✖ Incorrect</span>";
        resultDiv.innerHTML += \` - Correct Answer: \${q.correctAnswer.join(", ")}\`;
        feedback.appendChild(resultDiv);

        if (isCorrect) score++;
    });

    const modalBody = document.createElement("div");
    modalBody.innerHTML = \`You scored \${score} out of \${questions.length}.\`;
}

function retest() {
    displayQuestions();
}

document.addEventListener("DOMContentLoaded", displayQuestions);
`;
    }

    function downloadFile(filename, content) {
        const a = document.createElement("a");
        const blob = new Blob([content], { type: "text/plain" });
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    }
});
