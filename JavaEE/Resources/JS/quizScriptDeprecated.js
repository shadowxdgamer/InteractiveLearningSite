document.getElementById("submitQuiz").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission because the elements are not in a form tag

    //If you want to add more questions you should put the correct answers here and then if functions to check for their validity from line 24 going onwards
    //NOTE: the answers here are statically typed, I did not have enough time to impliment a way to have the questions be in a map and dynamically change each time the page
    //reloads but then again time constraints are a problem
    const correctAnswers = {
        q1: "Java Enterprise Edition",
        q2: "Tomcat", 
        q3: "WildFly",
        q4: ["EJB"], 
        q5: "Interface utilisateur, serveur de persistance, serveur d'application",
        q6: ["Gérer la logique métier", "Gérer les sessions utilisateurs"],
        q7: "web.xml",
        q8: "La répartition des traitements entre client et serveur",
        q9: "JavaEE est utilisé pour les applications d'entreprise, Java est un langage de programmation, et JavaScript est pour les sites web.",
        q10: "A",
        q11: "page jsp",
        q12: ["A", "C"],
        q13: "request.getAttribute()"
    };

    let score = 0;

    // Question 1
    const answer1 = document.getElementById("q1").value.trim();
    if (answer1.toLowerCase() === correctAnswers.q1.toLowerCase()) {
        score++;
    }

    // Question 2
    const answer2 = document.querySelector('input[name="q2"]:checked');
    if (answer2 && answer2.value === correctAnswers.q2) {
        score++;
        console.log("question 2 got through")
    }

    // Question 3
    const answer3 = document.getElementById("q3").value.trim();
    console.log(answer3)
    if (answer3.toLowerCase() === correctAnswers.q3.toLowerCase()) {
        score++;
    }

    // Question 4
    const answer4 = Array.from(document.querySelectorAll('input[name="q4"]:checked')).map(checkbox => checkbox.value);
    if (JSON.stringify(answer4.sort()) === JSON.stringify(correctAnswers.q4.sort())) {
        score++;
    }

    // Question 5
    const answer5 = document.querySelector('input[name="q5"]:checked');
    if (answer5 && answer5.value === correctAnswers.q5) {
        score++;
    }

    // Question 6
    const answer6 = Array.from(document.querySelectorAll('input[name="q6"]:checked')).map(checkbox => checkbox.value);
    if (JSON.stringify(answer6) === JSON.stringify(correctAnswers.q6)) {
        score++;
    }

    // Question 7
    const answer7 = document.getElementById("q7").value.trim();
    if (answer7.toLowerCase() === correctAnswers.q7.toLowerCase()) {
        score++;
    }

    // Question 8
    const answer8 = document.querySelector('input[name="q8"]:checked');
    if (answer8 && answer8.value === correctAnswers.q8) {
        score++;
    }

    // Question 9
    const answer9 = document.querySelector('input[name="q9"]:checked');
    if (answer9 && answer9.value === correctAnswers.q9) {
        score++;
    }

    // Question 10
    const answer10 = document.querySelector('input[name="q10"]:checked');
    if (answer10 && answer10.value === correctAnswers.q10) {
        score++;
    }

    // Question 11
    const answer11 = document.querySelector('input[name="q11"]:checked');
    if (answer11 && answer11.value === correctAnswers.q11) {
        score++;
    }

    // Question 12
    const answer12 = Array.from(document.querySelectorAll('input[name="q12"]:checked')).map(checkbox => checkbox.value);
    if (JSON.stringify(answer12) === JSON.stringify(correctAnswers.q12)) {
        score++;
    }

    // Question 13
    const answer13 = document.getElementById("q13").value.trim();
    if (answer13.toLowerCase() === correctAnswers.q13.toLowerCase()) {
        score++;
    }

    // Display score
    const scoreDisplay = document.getElementById("scoreDisplay");
    scoreDisplay.innerHTML = `<h4>Votre note : ${score} sur 13</h4>`
});

