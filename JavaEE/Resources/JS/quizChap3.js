
const questions = [{"type":"single-choice","text":"Qu'est-ce qu'un servlet ?","options":[{"id":"d3c0a6f1-3ad2-44cc-b0af-02d06f849e05","text":"Un type de code JavaScript côté client","code":"","isCorrect":false},{"id":"55ada210-01db-4450-a1ce-6bf7cee0c419","text":"Une classe Java qui traite les requêtes et génère des réponses côté serveur","code":"","isCorrect":true},{"id":"d9e0bf49-83bf-409d-90c9-37e7341ff9aa","text":"Un framework pour créer des pages web","code":"","isCorrect":false},{"id":"8523608b-88a2-4a41-8873-60b9530e8cd6","text":"Un framework JavaScript utilisé dans les navigateurs","code":"","isCorrect":false}],"id":"e25e2867-3953-46a0-a2e6-e12e119f97b7"},{"type":"multiple-choice","text":"Quelle méthode est généralement utilisée pour traiter les requêtes HTTP GET dans un servlet ?","options":[{"id":"c02c8e91-ee60-4f38-9ecb-09d21616b128","text":"doPost()","code":"","isCorrect":false},{"id":"de915f00-8b65-400a-a8ff-17bb9b0def15","text":"doGet()","code":"","isCorrect":true},{"id":"96a0bbc6-0d73-4efb-88e9-2b5a4a65d103","text":"init()","code":"","isCorrect":false},{"id":"3457059b-c58f-448f-a676-6518e785c5c4","text":"service()","code":"","isCorrect":false}],"id":"e8361641-0330-488b-9538-5382969f8c85"},{"type":"single-choice","text":"Quelle affirmation est vraie concernant le cycle de vie d'un servlet ?","options":[{"id":"60c3955f-492a-41b8-b5cc-f2432180dd11","text":"Une nouvelle instance du servlet est créée pour chaque requête HTTP","code":"","isCorrect":false},{"id":"23227619-3c0a-45da-a1fe-18936db804e0","text":"Le servlet est détruit immédiatement après avoir traité une requête","code":"","isCorrect":false},{"id":"f96bc78c-9510-4460-9d51-601c16f54fb8","text":"Une seule instance du servlet est créée, et plusieurs threads peuvent traiter différentes requêtes","code":"","isCorrect":true},{"id":"199c27cb-9e7f-4338-a641-de968cae1f82","text":"Le servlet est initialisé uniquement lorsque le serveur redémarre","code":"","isCorrect":false}],"id":"448f295f-86de-43d7-91e2-f38eb1184836"},{"type":"single-choice","text":"Quel est le principal objectif de JSP (JavaServer Pages) ?","options":[{"id":"6637cb93-dcc1-4880-9681-77223a345979","text":"Simplifier la création de pages web dynamiques avec du code Java intégré","code":"","isCorrect":true},{"id":"fbd83279-ec69-43ee-a90c-265d23dbcde0","text":"Traiter les requêtes et réponses HTTP côté serveur","code":"","isCorrect":false},{"id":"33bc538a-718a-4aeb-a962-88738d0212fb","text":"Créer des applications Java côté client","code":"","isCorrect":false},{"id":"da1a807b-2c35-49e9-a9b0-539bc610887f","text":"Traiter les bases de données","code":"","isCorrect":false}],"id":"89b7a731-7770-455d-993d-f124c19c9f0e"},{"type":"multiple-choice","text":"Que fait l'annotation @WebServlet(\"/Serv1\") dans un servlet ?","options":[{"id":"c5c60c8f-643c-499d-94b7-133ab847b300","text":"Elle spécifie le motif d'URL que le servlet va gérer","code":"","isCorrect":true},{"id":"1a556c3a-8e94-49d5-b268-78739abd375b","text":"Elle marque le servlet comme une version obsolète","code":"","isCorrect":false},{"id":"7c002f9b-b4d6-4609-b856-8f01a7afa251","text":"Elle compile automatiquement le servlet","code":"","isCorrect":false},{"id":"be352cf4-44b2-4c69-a65d-7899ae2df8f8","text":"Elle rend le servlet disponible pour toutes les URL","code":"","isCorrect":false}],"id":"2c637428-5ae8-4f8e-8c9c-8c41069d93f0"},{"type":"single-choice","text":"Comment un fichier JSP est-il compilé et exécuté ?","options":[{"id":"ecfe02ea-3fa6-4753-bd13-149579ce1b25","text":"Les fichiers JSP sont compilés directement en HTML par le navigateur côté client","code":"","isCorrect":false},{"id":"8def16fc-d6f5-44a9-b6ef-c3c0fba9b344","text":"Les fichiers JSP sont exécutés directement par le navigateur sans interaction avec le serveur","code":"","isCorrect":false},{"id":"7d1315d2-ed94-4a85-9d68-b9933c56b6dd","text":" Les fichiers JSP sont exécutés par la machine virtuelle Java (JVM) du client","code":"","isCorrect":false},{"id":"6b8f5aad-6690-43e8-9782-170a73d8767a","text":"Le fichier JSP est d'abord converti en servlet par le serveur, puis compilé et exécuté","code":"","isCorrect":true}],"id":"c21b16c4-feda-450c-a7f3-f0e5d079380c"},{"type":"single-choice","text":"Quel est le rôle du fichier web.xml dans une application web Java ?","options":[{"id":"c8bb10da-c53e-48c7-ac1c-c9235a17a4fb","text":"Il spécifie la structure HTML des pages web","code":"","isCorrect":false},{"id":"b1161f2b-1b81-4147-9ee6-2ea2689d8b7a","text":"Il déclare les servlets, filtres et mappings pour l'application web","code":"","isCorrect":true},{"id":"29afbcbb-037f-4d40-bba2-c19ffcf92a1d","text":"Il contient le code Java pour traiter les requêtes HTTP","code":"","isCorrect":false},{"id":"13edb6fc-d140-4f32-8cc3-48b56ae93c2b","text":"Il est utilisé pour gérer les sessions utilisateur","code":"","isCorrect":false}],"id":"141ced25-b6d4-4665-af86-2293aae9c97b"},{"type":"multiple-choice","text":"Quelle méthode est appelée lors de la première initialisation d'une page JSP ?","options":[{"id":"d88f8ac4-a346-428d-a1e8-d45282d7c87e","text":"_jspInit()","code":"","isCorrect":true},{"id":"23d1411f-7904-4ff9-aab6-91b471b6f672","text":"init()","code":"","isCorrect":false},{"id":"eab4d966-b90a-4c83-93f2-13a35eaed8d6","text":"_jspService()","code":"","isCorrect":false},{"id":"f1b3dfa9-b486-483b-9aef-2a972627bd5a","text":"doGet()","code":"","isCorrect":false}],"id":"6849d41f-dc94-4993-b427-ba57313c1d50"},{"type":"single-choice","text":"Quelle est la principale différence entre Servlets et JSP ?","options":[{"id":"7a16b4c5-652c-4dee-92c0-8c245f79e489","text":"Les servlets sont des composants côté client, tandis que JSP est un composant côté serveur","code":"","isCorrect":false},{"id":"d5dd6448-81c4-4d84-9f4a-f332eff4fffc","text":"Les servlets sont utilisés pour gérer les bases de données, tandis que JSP est utilisé pour les requêtes HTTP","code":"","isCorrect":false},{"id":"6e4c66bf-61f4-4a9b-8800-394904d7edce","text":"Les servlets sont utilisés pour la logique côté serveur, tandis que JSP est utilisé pour la présentation (contenu HTML)","code":"","isCorrect":true},{"id":"b31a974c-ffa4-4321-9237-2e000418e097","text":"Les servlets sont écrits en Java, tandis que JSP est écrit en Python","code":"","isCorrect":false}],"id":"8598227e-85f8-4900-9309-d481bed368c9"},{"type":"single-choice","text":"Dans une page JSP, quel est le mécanisme pour afficher dynamiquement une valeur sur la page ?","options":[{"id":"a4f6bfea-47b3-484a-81c5-e3d74971cda9","text":"A","code":"<%= expression %>","isCorrect":false},{"id":"b5202760-c728-4f80-a479-ce646be807dc","text":"B","code":"<jsp:output>expression</jsp:output>","isCorrect":false},{"id":"c872af92-451e-4f6c-8a5e-a5a277cab5ab","text":"C","code":"<jsp:print>expression</jsp:print>","isCorrect":false},{"id":"2c5a3796-bfa9-430c-b02a-1ad5ec194098","text":"D","code":"<%= print(expression) %>","isCorrect":false}],"id":"a1ce2ec1-78b2-47be-a5d0-c1113443c34a"}];

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