
const questions = [{"type":"multiple-choice","text":"Quelle couche d'une application est responsable de l'interaction utilisateur ?","options":[{"id":"399d9089-6a7c-4c01-9dc0-994ee868cad1","text":"Présentation","code":"","isCorrect":true},{"id":"af58c220-85a3-41d4-8223-f41a45696fc3","text":"Logique","code":"","isCorrect":false},{"id":"dd37d5c2-fb95-431d-b564-c2f65b554e42","text":"Données","code":"","isCorrect":false},{"id":"d77f8f6a-56f7-482e-a967-c534e428de4f","text":"Middleware","code":"","isCorrect":false}],"id":"a69be46a-adaa-4365-8fa7-6501d075ebc6"},{"type":"multiple-choice","text":"Quelles sont les principales couches d'une application ?","options":[{"id":"399d9089-6a7c-4c01-9dc0-994ee868cad1","text":"Présentation","code":"","isCorrect":true},{"id":"af58c220-85a3-41d4-8223-f41a45696fc3","text":"Logique","code":"","isCorrect":true},{"id":"dd37d5c2-fb95-431d-b564-c2f65b554e42","text":"Données","code":"","isCorrect":true},{"id":"d77f8f6a-56f7-482e-a967-c534e428de4f","text":"Middleware","code":"","isCorrect":false}],"id":"b8c7094b-cef3-4681-a4ec-060c07e6bdf2"},{"type":"single-choice","text":"Dans une architecture 2-tiers, qui gère les données ?","options":[{"id":"235f1002-c439-4b1a-876b-1c55cd35baa8","text":"Client","code":"","isCorrect":false},{"id":"bb35161b-dc8d-4955-a937-71b0a5421b6c","text":"Serveur applicatif","code":"","isCorrect":false},{"id":"7a048c7f-ddcb-409b-a6bf-83eca953b910","text":"Serveur de base de données","code":"","isCorrect":true},{"id":"2cdd86b3-af69-48ce-8279-a35b4755ec8d","text":"Middleware","code":"","isCorrect":false}],"id":"aeb22002-e23b-45f6-bbac-e1c71782ca7a"},{"type":"text","text":"Quelle est l'architecture où toutes les couches sont sur la même machine ?","correctAnswer":"1-Tier","id":"8a19978e-8538-4bd2-97ce-c09a29fc542b"},{"type":"single-choice","text":"Dans quelle architecture le client gère la majorité de la logique applicative ?","options":[{"id":"1fe80a57-f191-4d82-a689-31031b69fb64","text":"1-Tier","code":"","isCorrect":false},{"id":"14bde4fc-9e6e-4cdc-baab-4416ca4234c9","text":"2-Tiers","code":"","isCorrect":true},{"id":"64478859-c2f5-4abe-bf65-312f66177f95","text":"3-Tiers","code":"","isCorrect":false},{"id":"e085a793-2a6e-4f37-92f3-5ddabd253c61","text":"N-Tiers","code":"","isCorrect":false}],"id":"77c0d05b-b770-4ee4-9009-3d1531b3e931"},{"type":"multiple-choice","text":"Quels sont les avantages de l'architecture 3-tiers ?","options":[{"id":"c5111bcd-2919-45c2-a40c-7fefe9d0e9e1","text":"Client léger","code":"","isCorrect":true},{"id":"126695f4-c8f1-4dea-991a-eec1cf6c4978","text":"Logique centralisée","code":"","isCorrect":true},{"id":"bc7aad34-7d63-401d-871d-98a7bf15f304","text":"Forte dépendance côté serveur","code":"","isCorrect":false},{"id":"b82944db-db95-4333-a9aa-3dd6480e9eb0","text":"Flexibilité","code":"","isCorrect":true}],"id":"1b3e2716-c99f-4894-8fce-11b59605a38c"}];

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