
const questions = [
  {
    "type": "multiple-choice",
    "text": "Comment déclare-t-on une variable entière en C ?",
    "code": "",
    "options": [
      { "id": "1", "text": "float", "code": "", "isCorrect": false },
      { "id": "2", "text": "char", "code": "", "isCorrect": false },
      { "id": "3", "text": "int", "code": "", "isCorrect": true },
      { "id": "4", "text": "string", "code": "", "isCorrect": false }
    ],
    "id": "q1"
  },
  {
    "type": "multiple-choice",
    "text": "Quel mot-clé est utilisé pour définir une constante en C ?",
    "code": "",
    "options": [
      { "id": "1", "text": "define", "code": "", "isCorrect": false },
      { "id": "2", "text": "const", "code": "", "isCorrect": true },
      { "id": "3", "text": "static", "code": "", "isCorrect": false },
      { "id": "4", "text": "final", "code": "", "isCorrect": false }
    ],
    "id": "q2"
  },
  {
    "type": "multiple-choice",
    "text": "Comment représente-t-on un caractère en C ?",
    "code": "",
    "options": [
      { "id": "1", "text": "int", "code": "", "isCorrect": false },
      { "id": "2", "text": "char", "code": "", "isCorrect": true },
      { "id": "3", "text": "string", "code": "", "isCorrect": false },
      { "id": "4", "text": "float", "code": "", "isCorrect": false }
    ],
    "id": "q4"
  },
  {
    "type": "multiple-choice",
    "text": "Quelle opération correspond à 'mod' en algorithmique ?",
    "code": "",
    "options": [
      { "id": "1", "text": "Addition", "code": "", "isCorrect": false },
      { "id": "2", "text": "Modulo", "code": "", "isCorrect": true },
      { "id": "3", "text": "Division entière", "code": "", "isCorrect": false },
      { "id": "4", "text": "Soustraction", "code": "", "isCorrect": false }
    ],
    "id": "q5"
  },
  {
    "type": "multiple-choice",
    "text": "Quel type représente un nombre réel en C ?",
    "code": "",
    "options": [
      { "id": "1", "text": "int", "code": "", "isCorrect": false },
      { "id": "2", "text": "float", "code": "", "isCorrect": true },
      { "id": "3", "text": "char", "code": "", "isCorrect": false },
      { "id": "4", "text": "bool", "code": "", "isCorrect": false }
    ],
    "id": "q6"
  },
  {
    "type": "multiple-choice",
    "text": "Quelle bibliothèque contient la fonction printf ?",
    "code": "",
    "options": [
      { "id": "1", "text": "math.h", "code": "", "isCorrect": false },
      { "id": "2", "text": "string.h", "code": "", "isCorrect": false },
      { "id": "3", "text": "stdio.h", "code": "", "isCorrect": true },
      { "id": "4", "text": "conio.h", "code": "", "isCorrect": false }
    ],
    "id": "q7"
  },
  {
    "type": "multiple-choice",
    "text": "Quelle fonction permet de lire une entrée utilisateur en C ?",
    "code": "",
    "options": [
      { "id": "1", "text": "printf", "code": "", "isCorrect": false },
      { "id": "2", "text": "scanf", "code": "", "isCorrect": true },
      { "id": "3", "text": "getchar", "code": "", "isCorrect": false },
      { "id": "4", "text": "puts", "code": "", "isCorrect": false }
    ],
    "id": "q8"
  },
  {
    "type": "multiple-choice",
    "text": "Quel opérateur d'affectation est utilisé pour l'incrémentation en C ?",
    "code": "",
    "options": [
      { "id": "1", "text": "+=", "code": "", "isCorrect": true },
      { "id": "2", "text": "++", "code": "", "isCorrect": true },
      { "id": "3", "text": "--", "code": "", "isCorrect": false },
      { "id": "4", "text": "=", "code": "", "isCorrect": false }
    ],
    "id": "q9"
  },
  {
    "type": "multiple-choice",
    "text": "Quel est le résultat de 13 mod 5 ?",
    "code": "",
    "options": [
      { "id": "1", "text": "2", "code": "", "isCorrect": false },
      { "id": "2", "text": "3", "code": "", "isCorrect": true },
      { "id": "3", "text": "5", "code": "", "isCorrect": false },
      { "id": "4", "text": "1", "code": "", "isCorrect": false }
    ],
    "id": "q10"
  }
];

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