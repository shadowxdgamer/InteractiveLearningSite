
const questions = [{"type":"single-choice","text":"Quelle est la caractéristique principale des tableaux en programmation ?","options":[{"id":"42c004a3-363c-46d3-ba07-81481cbfcef3","text":"Les tableaux sont non contigus en mémoire.","code":"","isCorrect":false},{"id":"889d5b7a-7182-499f-9fbf-d394cfcfde03","text":"Les tableaux peuvent contenir des types de données différents.","code":"","isCorrect":false},{"id":"65260c6d-1801-4b7b-93a5-fcb4b0a7c36c","text":"Les tableaux sont contigus en mémoire et stockent des éléments du même type.","code":"","isCorrect":true},{"id":"d7275f2e-b73f-41fd-b464-93cf0e3442d5","text":" Les tableaux sont uniquement utilisés pour stocker des entiers.","code":"","isCorrect":false}],"id":"af2154d3-d5b8-48e9-9d8a-de8fc4acbade"},{"type":"single-choice","text":"Dans quel langage de programmation les tableaux commencent-ils à l'index 0 ?","options":[{"id":"540d7aa8-ece9-469d-922d-affe67765ac7","text":"Algorithmique","code":"","isCorrect":false},{"id":"67e840a1-56ef-45d8-b2d3-2b3c7bad822e","text":"C","code":"","isCorrect":true}],"id":"88127f24-9d5b-4e6d-838e-051aa38d96ed"},{"type":"multiple-choice","text":"Quelle est la déclaration correcte d'un tableau d'entiers de 4 éléments en C ?","options":[{"id":"8ef71257-64f5-48c5-8d0d-20247c616eff","text":"int arr[4];","code":"","isCorrect":true},{"id":"6b658f2a-6168-4ad0-a657-ed935b15e2b4","text":"int arr(4);","code":"","isCorrect":false},{"id":"6b5a32cd-213f-4620-aa99-ff60ab5c58d0","text":"int arr{4};","code":"","isCorrect":false},{"id":"798abea9-b955-4898-9f5d-02d4cd2089a6","text":"int arr[1..4];","code":"","isCorrect":false}],"id":"05dc59e5-dee5-4070-a8e6-3a3ca4a24607"},{"type":"multiple-choice","text":"Que fait le code C suivant ?","code":"int T[5] = {3, 1, 4, 1, 5};\nprintf(\"%d\", T[3]);\n","options":[{"id":"e9b68af3-6702-4b91-aae1-263b31e442ab","text":"Affiche la valeur 1","code":"","isCorrect":false},{"id":"5afce5b2-6648-4bcd-b031-407218ac7172","text":"Affiche la valeur 5","code":"","isCorrect":false},{"id":"295fcacd-43e7-47dd-a342-0c14ccd5f61d","text":"Affiche la valeur 4","code":"","isCorrect":true},{"id":"2a627c29-5b00-45d3-9e0d-2f28bfb7fc36","text":"Affiche la valeur 3","code":"","isCorrect":false}],"id":"c28e0fc6-4744-40b4-9299-382d156147b0"},{"type":"single-choice","text":"Comment remplirait-on un tableau en algorithmique avec 100 éléments ?","options":[{"id":"0c2205c0-63ee-4697-a2d8-952752753bfb","text":"En utilisant une boucle for avec une variable d'index.","code":"","isCorrect":true},{"id":"3c12d002-08f0-4181-a89e-17deb62cb3ba","text":"En utilisant une boucle while avec une condition.","code":"","isCorrect":false},{"id":"6c499bc3-b119-4e2a-bcba-d9b21c84686b","text":"En lisant chaque élément manuellement sans boucle.","code":"","isCorrect":false},{"id":"2923c2cc-72f9-442d-9d87-b8e11fd40dda","text":"En déclarant explicitement les éléments.","code":"","isCorrect":false}],"id":"b1cbeac7-eef8-444a-9474-c87cf38577f9"},{"type":"single-choice","text":"Quelle est la fonction principale de l'algorithme de tri à bulles (bubble sort) ?","options":[{"id":"f3bbafd8-c319-4d02-b779-9c5b403e1f66","text":"Trier le tableau en insérant chaque élément à sa position correcte.","code":"","isCorrect":false},{"id":"0e31800d-2521-4c1a-8813-5d3e29e0f7a7","text":"Trier le tableau en sélectionnant le plus petit élément et en l'échangeant avec le premier élément.","code":"","isCorrect":false},{"id":"5ccda1c7-e32e-49a1-9ddc-2591f4b5b678","text":"Trier le tableau en le divisant en sous-tableaux plus petits et en triant chaque sous-tableau de manière récursive.","code":"","isCorrect":false},{"id":"7ef332a6-a685-4829-8e81-96e768ea3e92","text":"Trier le tableau en échangeant à plusieurs reprises des éléments adjacents si leur ordre est incorrect.","code":"","isCorrect":true}],"id":"396fbbfd-8533-4b27-a51c-d66b9d69e60f"},{"type":"multiple-choice","text":"Que se passe-t-il après chaque passage dans l'algorithme de tri par sélection ?","options":[{"id":"88c2a0b6-66f9-4b39-b1ab-61f38927ac9f","text":"L'élément le plus grand est placé à sa position correcte.","code":"","isCorrect":false},{"id":"b1807a89-3dc8-440e-9c6f-ae7ebbde0839","text":"L'élément le plus petit est placé à sa position correcte.","code":"","isCorrect":true},{"id":"41c71b0f-edd0-465e-8451-3fb77070c304","text":"Les éléments sont échangés jusqu'à ce que le tableau soit entièrement trié.","code":"","isCorrect":false},{"id":"7b83e409-633c-47a6-9750-f3f8862a570b","text":"Le tableau est divisé en sous-tableaux.","code":"","isCorrect":false}],"id":"e3425cbb-fdc7-48c0-83e2-35c9c1176648"},{"type":"multiple-choice","text":"Quel prérequis est nécessaire pour que l'algorithme de recherche binaire fonctionne correctement ?","options":[{"id":"5a0ca5d2-c249-42da-ae7d-3f6a02141193","text":"Le tableau doit être trié par ordre décroissant.","code":"","isCorrect":false},{"id":"97bf6bf5-ae68-4203-9f7a-0e2854f6c101","text":" Le tableau doit être trié par ordre croissant.","code":"","isCorrect":true},{"id":"f8ef0ea1-8c4c-490b-a4c6-b2efbbe02164","text":"Le tableau peut être dans n'importe quel ordre.","code":"","isCorrect":false},{"id":"8b4fc489-7fda-4c22-aa93-cb7973140470","text":"Le tableau doit contenir des éléments uniques.","code":"","isCorrect":false}],"id":"32eb6305-468d-4bb8-951a-b7cb110beacc"},{"type":"single-choice","text":"Comment déclarerait-on une matrice 3x4 de réels en algorithmique ?","options":[{"id":"29aa95d8-c22f-4418-adfb-958bfc760b78","text":"Tab[1..3, 1..4] de float","code":"","isCorrect":false},{"id":"1e10408a-9199-4329-be15-b92f0bec5fd1","text":"Tableau[1..3][1..4] de Réel","code":"","isCorrect":true},{"id":"9f2676ab-ba7c-4ed1-aade-90d7cc24a464","text":"Tableau[3..4] de float","code":"","isCorrect":false},{"id":"db290e47-6938-47c8-ac53-44e2a32dc70c","text":"Tableau[3, 4] de Réel","code":"","isCorrect":false}],"id":"10696a05-fbeb-4223-b0fc-fe9c558dfa42"},{"type":"multiple-choice","text":"Quel algorithme utilise le principe de comparer l'élément du milieu du tableau à l'élément recherché ?","options":[{"id":"168c26e5-b414-4dc9-884a-b84dc7eb8a47","text":"Recherche linéaire","code":"","isCorrect":false},{"id":"06cea75f-0bed-4898-93a9-ca9202f5cf06","text":"Tri par sélection","code":"","isCorrect":false},{"id":"8d73a004-74c7-4c78-8fe9-9621d464b54d","text":"Recherche binaire","code":"","isCorrect":true},{"id":"02f0ef06-972a-4d7c-ab15-f9bdd4139438","text":"Tri par insertion","code":"","isCorrect":false}],"id":"2973fd42-c647-4987-8622-1c6112e5fc35"}];

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