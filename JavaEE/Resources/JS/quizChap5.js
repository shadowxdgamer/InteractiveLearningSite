const questions = [
  {
    "type": "multiple-choice",
    "text": "Quel est le principal objectif d'un JavaBean ?",
    "options": [
      {
        "id": "1",
        "text": "Représenter un composant d'interface graphique",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "Stocker et manipuler des données",
        "code": "",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "Gérer la session de l'utilisateur",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "Gérer les requêtes et réponses HTTP",
        "code": "",
        "isCorrect": false
      }
    ],
    "id": "eeea0d30-0023-441c-ae16-b5b5b6f00b8a"
  },
  {
    "type": "multiple-choice",
    "text": "Laquelle des options suivantes est une exigence pour qu'une classe soit considérée comme un JavaBean ?",
    "options": [
      {
        "id": "1",
        "text": "La classe doit avoir des champs publics.",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "La classe doit implémenter l'interface `Serializable`.",
        "code": "",
        "isCorrect": true
      },
      {
        "id": "3",
        "text": "La classe doit étendre une superclasse spécifique.",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "La classe doit avoir des constructeurs privés.",
        "code": "",
        "isCorrect": false
      }
    ],
    "id": "c64b9c08-b957-4c46-bd75-f29217b6dd58"
  },
  {
    "type": "multiple-choice",
    "text": "Que fait la balise `getProperty` dans JSP lorsqu'elle utilise un JavaBean ?",
    "options": [
      {
        "id": "1",
        "text": "Elle définit un JavaBean.",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "Elle définit une propriété dans un JavaBean.",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "Elle récupère la valeur d'une propriété d'un JavaBean.",
        "code": "",
        "isCorrect": true
      },
      {
        "id": "4",
        "text": "Elle crée une nouvelle instance d'un JavaBean.",
        "code": "",
        "isCorrect": false
      }
    ],
    "id": "729c1dbe-b00d-472d-bc4b-d29b757aa8ca"
  },
  {
    "type": "multiple-choice",
    "text": "Quel scope est utilisé pour partager des données entre tous les utilisateurs d'une application dans un environnement Java EE ?",
    "options": [
      {
        "id": "1",
        "text": "Page Scope",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "2",
        "text": "Request Scope",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "Session Scope",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "Application Scope",
        "code": "",
        "isCorrect": true
      }
    ],
    "id": "d2f6b9b0-35c8-4089-b0ad-4927da72d1b1"
  },
  {
    "type": "multiple-choice",
    "text": "Dans une classe JavaBean, quel est le rôle des méthodes getter et setter ?",
    "options": [
      {
        "id": "1",
        "text": "Récupérer et modifier les propriétés privées du bean.",
        "code": "",
        "isCorrect": true
      },
      {
        "id": "2",
        "text": "Initialiser le JavaBean avec des valeurs par défaut.",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "3",
        "text": "Rendre le JavaBean sérialisable.",
        "code": "",
        "isCorrect": false
      },
      {
        "id": "4",
        "text": "Attribuer un identifiant unique au JavaBean.",
        "code": "",
        "isCorrect": false
      }
    ],
    "id": "0bfe20e7-7f60-4215-9381-0c1c8b7e0131"
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