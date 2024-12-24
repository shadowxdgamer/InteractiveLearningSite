
const questions = [{"type":"single-choice","text":"Quelle est la syntaxe générale d'une boucle for en C ?","options":[{"id":"01bfdf01-a3cc-470e-a9d7-e6a5005077b0","text":"for (initialisation; condition; incrémentation)","code":"","isCorrect":true},{"id":"d4601315-954b-414b-b648-bf18bb94e5f2","text":"for condition, incrémentation, initialisation","code":"","isCorrect":false},{"id":"c7f22dcf-85ad-4811-a7ed-f1501a27198c","text":"while (initialisation; condition; incrémentation)","code":"","isCorrect":false},{"id":"1bdbd4bb-66ce-4fd4-9081-bfb27ef77fa3","text":"do...while (condition; incrémentation; initialisation)","code":"","isCorrect":false}],"id":"f55e7120-9b9e-4c1c-8d00-fa103c43aa4e"},{"type":"single-choice","text":"Combien de fois cette boucle s'exécutera-t-elle ?","code":"for (int i = 0; i < 5; i++)","options":[{"id":"f35946cc-f57f-42f3-bd27-d1c076d58403","text":"4","code":"","isCorrect":false},{"id":"241be989-fa15-4ed7-8769-1e55929257ab","text":"5","code":"","isCorrect":true},{"id":"77fe1668-4598-4641-992b-9fbbe68d7932","text":"6","code":"","isCorrect":false},{"id":"431d520c-1779-436b-895c-d064533b99fb","text":"0","code":"","isCorrect":false}],"id":"6eb4b4ff-a374-4a8e-8284-e4c2f63ac2a2"},{"type":"single-choice","text":"Quelle sera la valeur finale de i après cette boucle en C ?","code":"for (int i = 0; i < 3; i++)","options":[{"id":"af449511-e623-4dc9-9c5c-540864fb4453","text":"2","code":"","isCorrect":false},{"id":"3b8561ea-e503-48be-a5da-6ecdc1a051d5","text":"3","code":"","isCorrect":false},{"id":"2c658932-e748-4808-a566-b2e1855293dd","text":"4","code":"","isCorrect":false},{"id":"79591d08-af5b-4cbc-b6ba-0ed390f9a1e6","text":"i est inaccessible en dehors de la boucle","code":"","isCorrect":true}],"id":"a1b136d8-17e8-46f1-b13b-a7720b600d0f"},{"type":"single-choice","text":"Que se passe-t-il si la condition d’une boucle `for` en C est toujours vraie ?","options":[{"id":"906b0d45-561e-4775-9cfd-48ca76cdb772","text":"La boucle s'exécute une seule fois","code":"","isCorrect":false},{"id":"57c787cb-3c1a-4fdf-ae56-f9be5ae9e103","text":"La boucle devient infinie","code":"","isCorrect":true},{"id":"a9d6e12c-9dee-4fa5-8cf5-dc1e3da4ecd8","text":"La boucle ne démarre pas","code":"","isCorrect":false},{"id":"600fc026-9ec3-4bb2-8457-e5c3d31db0c2","text":"Erreur de syntaxe","code":"","isCorrect":false}],"id":"75ac6c86-5d85-40c8-a7d9-f0e601f857a8"}];

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