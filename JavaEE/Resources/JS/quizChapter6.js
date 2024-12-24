
const questions = [{"type":"multiple-choice","text":"Quel attribut dans la directive taglib permet d'identifier la bibliothèque de balises ?","options":[{"id":"17c62f0c-b7c6-46d1-825b-5a04f3a9e6de","text":"prefix","code":"","isCorrect":false},{"id":"a8e8759f-cd79-4c94-acb1-52c6856989f0","text":"uri","code":"","isCorrect":true},{"id":"9ebeb609-ef84-4cb7-8f31-8d17cbcd93af","text":"name","code":"","isCorrect":false},{"id":"1a8a5dba-cf6f-44c3-8b31-3358845f004e","text":"type","code":"","isCorrect":false}],"id":"40ce9926-b8f3-4ac2-a245-aab8de08c74d"},{"type":"single-choice","text":"Quel est l'objectif principal de la bibliothèque JSTL 'fmt' ?","options":[{"id":"3d2debb6-f389-44b7-9a7d-41c57c208fb2","text":"Gérer les requêtes SQL","code":"","isCorrect":false},{"id":"95d70b56-a41a-4d0f-8027-90c1f0ba162c","text":"Formater des données et gérer l'internationalisation","code":"","isCorrect":true},{"id":"e2213030-13a7-485c-babc-6bcedeed6e04","text":"Manipuler des documents XML","code":"","isCorrect":false},{"id":"f22d2de5-a6b5-42bb-83e4-948356db2541","text":"Gérer les boucles et conditions","code":"","isCorrect":false}],"id":"c94e145d-8ea4-427a-b4a4-7eccc8a078f1"},{"type":"multiple-choice","text":"Quelle bibliothèque JSTL permet d'exécuter des requêtes SQL dans une page JSP ?","options":[{"id":"07eb0563-cbad-4943-9aee-1461405ce513","text":"JSTL core","code":"","isCorrect":false},{"id":"2b2e469b-8e5a-421b-ab32-ecd0e0c91dc7","text":"JSTL functions","code":"","isCorrect":false},{"id":"47dae3cb-f7a4-4488-b4bd-fda62125cdcd","text":"JSTL SQL","code":"","isCorrect":true},{"id":"7be695c5-e40b-40d4-b41a-e4d8da06e557","text":"JSTL XML","code":"","isCorrect":false}],"id":"01f2931e-1397-44d1-9459-1214e9f545dc"},{"type":"multiple-choice","text":"Quel tag JSTL permet de parcourir les éléments d'une collection dans une page JSP ?","options":[{"id":"f37d60da-0292-471c-b2c4-a8101b769ecd","text":"c:if","code":"","isCorrect":false},{"id":"9ff2709a-ef57-44a9-a894-5d472d62b87c","text":"c:out","code":"","isCorrect":false},{"id":"56d36cec-6354-4521-8952-2c3602f2ef6e","text":"c:forEach","code":"","isCorrect":true},{"id":"70986528-9093-4e70-bd4f-f826213c14fe","text":"c:set","code":"","isCorrect":false}],"id":"967a292f-5c91-4bab-820f-ec203dd2acc4"},{"type":"single-choice","text":"Dans l'exemple d'un formulaire HTML, quel tag JSTL est utilisé pour marquer l'option sélectionnée dans un élément ?","code":"<select>","options":[{"id":"f95d6af5-fde6-418d-8946-d8081787c781","text":"c:set","code":"","isCorrect":false},{"id":"cf70311e-d958-4cad-921e-e457248ac71f","text":"c:out","code":"","isCorrect":false},{"id":"3e70ff42-2d02-46c8-883d-8223cc78f108","text":"c:forEach","code":"","isCorrect":false},{"id":"6eb9c36a-6514-4ad3-81af-a03e8f132189","text":"c:if","code":"","isCorrect":true}],"id":"4d809a61-a1b2-44f6-b428-45ec034f26df"}];

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