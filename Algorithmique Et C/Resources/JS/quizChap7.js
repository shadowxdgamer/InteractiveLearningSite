
const questions = [{"type":"single-choice","text":"Quel est le rôle de la fonction Asc(c) ?","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Retourne le caractère correspondant au code ASCII de c.","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Retourne le code ASCII du caractère c.","code":"","isCorrect":true},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Retourne le prédécesseur du caractère c.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Retourne le successeur du caractère c.","code":"","isCorrect":false}],"id":"1d8dd985-0ad5-4798-9db8-e4fddbc056ae"},{"type":"single-choice","text":"En langage C, comment convertit-on un caractère en majuscule ?\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) char c = tolower(c);","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) char c = toupper(c);","code":"","isCorrect":true},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) char c = upper(c);","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) char c = convertToUpper(c);","code":"","isCorrect":false}],"id":"00d90e47-d5d5-4fb4-b3d2-4d53d3c505ee"},{"type":"multiple-choice","text":"Que fait l'algorithme suivant ?","code":"char c = 'a'; \nc = c + 1;\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Il convertit c en majuscule.","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Il affiche le successeur du caractère c.","code":"","isCorrect":true},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Il affiche le prédécesseur du caractère c.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Il calcule le code ASCII du caractère c.","code":"","isCorrect":false}],"id":"c5acd134-67ad-4639-a15b-b9b939b8b2ba"},{"type":"single-choice","text":"Quelle fonction permet de concaténer deux chaînes de caractères en C ?","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) strcat()","code":"","isCorrect":true},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) strlen()","code":"","isCorrect":false},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) strcmp()","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) strcpy()","code":"","isCorrect":false}],"id":"5ddfa816-4492-414f-8697-ecf464bb6164"},{"type":"single-choice","text":"Quel est le résultat de la comparaison suivante en C ?","code":"strcmp(\"hello\", \"bonjour\");\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) La chaîne \"hello\" est inférieure à \"bonjour\".","code":"","isCorrect":true},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) La chaîne \"hello\" est supérieure à \"bonjour\".","code":"","isCorrect":false},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) La comparaison retourne zéro.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) La comparaison échoue.","code":"","isCorrect":false}],"id":"7cd683d7-d4a5-46ac-9712-bbf96bc6206a"},{"type":"single-choice","text":"En algorithmique, que fait l'expression Car(i) ?\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Retourne le code ASCII du caractère i.","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Retourne le caractère dont le code ASCII est égal à i.","code":"","isCorrect":true},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Retourne le successeur du caractère i.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Retourne le prédécesseur du caractère i.","code":"","isCorrect":false}],"id":"42637fd3-8d85-474c-8318-bc137236685d"},{"type":"single-choice","text":"Que fait l'algorithme suivant en C ?","code":"char c;\nscanf(\" %c\", &c);\nprintf(\"Prédécesseur : %c\\n\", c - 1);\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Affiche le successeur du caractère c.","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Affiche le prédécesseur du caractère c.","code":"","isCorrect":true},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Affiche la valeur ASCII du caractère c.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Affiche le code ASCII du caractère c.","code":"","isCorrect":false}],"id":"2085f842-582b-4d3f-bc08-c6ad589386e5"},{"type":"single-choice","text":"Quel est le rôle de la fonction strlen() en C ?\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Retourne la longueur de la chaîne.","code":"","isCorrect":true},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Concatène deux chaînes de caractères.","code":"","isCorrect":false},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Copie une chaîne dans une autre.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Compare deux chaînes de caractères.","code":"","isCorrect":false}],"id":"3f47acba-1855-4a1f-b653-dd867a6b38a1"},{"type":"single-choice","text":"Quelle est la sortie de l'algorithme suivant en C ?","code":"char chaine[] = \"Salut\";\nprintf(\"%s\\n\", chaine);\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Affiche \"Salut\\n\".","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Affiche \"S\\n\".","code":"","isCorrect":false},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Affiche une erreur.","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Affiche \"Salut\".","code":"","isCorrect":true}],"id":"22147a45-7e59-4771-81ef-9dafb91e8f2b"},{"type":"single-choice","text":"Quel est le rôle de la fonction strcpy() en C ?","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Concatène deux chaînes.","code":"","isCorrect":false},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Retourne la longueur d'une chaîne.","code":"","isCorrect":false},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Copie une chaîne dans une autre.","code":"","isCorrect":true},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Compare deux chaînes.","code":"","isCorrect":false}],"id":"26e63f9f-7640-4432-8852-6d94f62aa6dd"},{"type":"single-choice","text":"Quelle est la sortie de l'algorithme suivant ?","code":"char c = 'a';\nif (c >= 'a' && c <= 'z') {\n    printf(\"C'est une minuscule\\n\");\n}\n","options":[{"id":"3c0d7630-d24d-47e2-880c-95131fdc2a25","text":"a) Affiche \"C'est une minuscule\".","code":"","isCorrect":true},{"id":"7bc8014e-c05c-48b8-be06-619b3ed17f4e","text":"b) Affiche \"C'est une majuscule\".","code":"","isCorrect":false},{"id":"eb3508e1-f439-4f31-822a-6cd07357cb0f","text":"c) Affiche \"C'est une voyelle\".","code":"","isCorrect":false},{"id":"d3278c79-e435-420c-8472-4ecc6dedf5b2","text":"d) Aucun affichage.","code":"","isCorrect":false}],"id":"abe7bb4f-cd88-48a4-aae1-4bb1672d7586"}];

// Utility function to escape HTML
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const t = {
  yourAnswer: "Votre réponse",
  noAnswer: "(Pas de réponse)",
  correctAnswer: "Réponse correcte",
  incorrectAnswer: "Réponse incorrecte",
  placeholders: {
    textAnswer: "Tapez votre réponse ici"
  },
  scoreText: "Vous avez obtenu"
};

let shuffledQuestions = [...questions];

function shuffleQuestions() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function renderQuiz() {
  shuffleQuestions();
  const quizElement = document.getElementById('quiz');
  if (!quizElement) return;

  quizElement.innerHTML = shuffledQuestions.map((question, index) => {
    const inputName = `question-${index}`;
    const codeHtml = question.code ? `<pre class="code">${escapeHtml(question.code)}</pre>` : '';
    let answersHtml = '';

    if (question.type === 'text') {
      answersHtml = `
        ${codeHtml}
        <input type="text" name="${inputName}" placeholder="${t.placeholders.textAnswer}" />
      `;
    } else if (question.options) {
      answersHtml = question.options.map((option, optIndex) => `
        <div>
          <input type="${question.type === 'multiple-choice' ? 'checkbox' : 'radio'}" 
                 name="${inputName}" 
                 value="${optIndex}" 
                 id="${inputName}-${optIndex}" />
          <label for="${inputName}-${optIndex}">
            ${option.text}
            ${option.code ? `<pre class="code">${escapeHtml(option.code)}</pre>` : ''}
          </label>
        </div>
      `).join('');
      answersHtml = `${codeHtml}${answersHtml}`;
    }

    return `
      <div class="question">
        <span class="question-number">Question ${index + 1}</span>
        <h3>${question.text}</h3>
        ${answersHtml}
        <div id="feedback-${index}" class="answer-feedback" style="display: none;"></div>
      </div>
    `;
  }).join('');
}

function disableInputs() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.disabled = true);
}

function enableInputs() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.disabled = false);
}

function checkAnswers() {
  let correctCount = 0;

  shuffledQuestions.forEach((question, index) => {
    const inputName = `question-${index}`;
    const feedbackElement = document.getElementById(`feedback-${index}`);

    if (!feedbackElement) return;

    let isCorrect = false;
    let userAnswer = '';

    if (question.type === 'text') {
      const input = document.querySelector(`input[name="${inputName}"]`);
      userAnswer = input?.value.trim() || '';
      isCorrect = userAnswer.toLowerCase() === (question.correctAnswer?.toLowerCase() || '');
    } else if (question.options) {
      const selectedInputs = document.querySelectorAll(`input[name="${inputName}"]:checked`);
      const selectedIndices = Array.from(selectedInputs).map(input => Number(input.value));

      if (question.type === 'multiple-choice') {
        isCorrect = question.options.every((option, idx) =>
          option.isCorrect === selectedIndices.includes(idx)
        );
        userAnswer = selectedIndices.map(i => question.options[i].text).join(', ');
      } else {
        const selectedInput = selectedInputs[0];
        if (selectedInput) {
          const selectedIndex = Number(selectedInput.value);
          isCorrect = question.options[selectedIndex]?.isCorrect || false;
          userAnswer = question.options[selectedIndex]?.text || '';
        }
      }
    }

    const correctAnswer = question.type === 'text'
      ? question.correctAnswer || t.noAnswer
      : question.options
          .filter(option => option.isCorrect)
          .map(option => option.text)
          .join(', ');

    feedbackElement.style.display = 'block';
    feedbackElement.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackElement.innerHTML = `
      <p><strong>${isCorrect ? '✓ ' + t.correctAnswer : '✗ ' + t.incorrectAnswer}</strong></p>
      <p>${t.yourAnswer}: ${userAnswer || t.noAnswer}</p>
      ${!isCorrect ? `<p>${t.correctAnswer}: ${correctAnswer}</p>` : ''}
    `;

    if (isCorrect) correctCount++;
  });
  disableInputs();
  showResults(correctCount, shuffledQuestions.length);
}

function showResults(correct, total) {
  const overlay = document.getElementById('modal-overlay');
  const scoreText = document.getElementById('score-text');
  const scoreBarFill = document.getElementById('score-bar-fill');

  if (!overlay || !scoreText || !scoreBarFill) return;

  scoreText.innerText = `${t.scoreText} ${correct} / ${total}`;
  scoreBarFill.style.width = `${(correct / total) * 100}%`;
  overlay.style.display = 'flex';
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

function retestQuiz() {
  enableInputs();
  renderQuiz();
}

// Initialize the quiz
renderQuiz();