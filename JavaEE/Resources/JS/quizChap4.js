
const questions = [{"type":"single-choice","text":"Quel est le rôle principal du contrôleur dans l'architecture MVC ?","options":[{"id":"250005a2-83bd-4c14-ac4b-972ab09cffec","text":"Afficher les données à l'utilisateur","code":"","isCorrect":false},{"id":"05b8c511-9eb0-4af6-ace9-e8c20c4f7d6e","text":"Gérer les données et leur traitement","code":"","isCorrect":false},{"id":"017174de-417b-48b2-9c09-047f65c04b2f","text":"Intercepter les événements de l'interface utilisateur et interagir avec le modèle et la vue","code":"","isCorrect":true},{"id":"9a92eb3b-9e1a-404a-8e20-d9e192c910bd","text":"Stocker les données dans une base de données","code":"","isCorrect":false}],"id":"00847544-c664-476c-a26b-5d9175e51f82"},{"type":"single-choice","text":"Dans l'architecture MVC, où sont généralement gérées les données ?","options":[{"id":"be96c716-6aa5-4012-ad22-372197f6405f","text":"Dans la vue","code":"","isCorrect":false},{"id":"0e0a9762-50af-4fb0-881a-32f47ba47ac3","text":"Dans le modèle","code":"","isCorrect":true},{"id":"01741c3f-7b6f-44b6-b2b2-095e87e18f31","text":"Dans le contrôleur","code":"","isCorrect":false},{"id":"efeb1368-b8be-4bc7-a1f5-55cfaa7bbd7f","text":"Dans la servlet","code":"","isCorrect":false}],"id":"960d8e45-89c4-43ef-9959-861de7e4343b"},{"type":"single-choice","text":"Quel est le rôle de la vue dans l'architecture MVC ?","options":[{"id":"2251c91a-9e40-4807-8e92-43d417139742","text":"Interagir avec les données","code":"","isCorrect":false},{"id":"112b4c65-2a05-4378-8849-df1b8bfe18b1","text":"Interagir avec les événements de l'utilisateur","code":"","isCorrect":false},{"id":"349092e1-1537-4506-acfd-682f3af2abcf","text":"Afficher l'interface utilisateur","code":"","isCorrect":true},{"id":"c1dacecb-8d3c-4b0a-99f0-ee7c80a7c5ec","text":"Gérer la logique métier","code":"","isCorrect":false}],"id":"e3f46825-34dc-42e7-b940-ffb995b870c8"},{"type":"single-choice","text":"Dans une application Java EE utilisant le modèle MVC, quel objet joue généralement le rôle de contrôleur ?","options":[{"id":"88ca2c95-d02b-4337-8534-bd160496deb4","text":"Modèle","code":"","isCorrect":false},{"id":"35077885-fd86-4905-9b4f-a62cec94fd1f","text":"JSP","code":"","isCorrect":false},{"id":"10e55e90-e7eb-41a7-a688-968cb472d783","text":"Base de données","code":"","isCorrect":false},{"id":"6a3fd971-d9c7-4af5-87fc-ef6b31456cea","text":"Servlet","code":"","isCorrect":true}],"id":"67f29499-09f5-4f71-9fcd-33a02f410040"},{"type":"multiple-choice","text":"Quel objet est utilisé pour transférer une requête d'une servlet vers une JSP ?","options":[{"id":"4a9bfaf2-28b9-42ff-a811-cbc601873ec0","text":"RequestDispatcher","code":"","isCorrect":true},{"id":"e6fa2ea2-fef0-4394-9c88-9b56742cb58d","text":"HttpServletRequest","code":"","isCorrect":false},{"id":"6c753c5d-2f98-45af-90f9-1ad9f284f77d","text":"HttpServletResponse","code":"","isCorrect":false},{"id":"4a1a2d56-a406-44c7-b04f-5e60dfa14ce5","text":"ServletContext","code":"","isCorrect":false}],"id":"a6608413-270f-4612-98db-23571c869f33"},{"type":"single-choice","text":"Quel est l'objectif de la méthode forward() dans une servlet ?","options":[{"id":"7b46137d-7e99-410e-90c8-c727eab1fbc2","text":"Retourner une réponse HTTP au client","code":"","isCorrect":false},{"id":"d88fff0e-85d7-40e8-bfe5-6d2f1def08ed","text":"Rediriger la requête vers une autre ressource (par exemple, une JSP)","code":"","isCorrect":true},{"id":"4c20bc9b-4007-4ed7-b0ca-c4625e7e0894","text":"Modifier les attributs de la requête","code":"","isCorrect":false},{"id":"90e05863-ab70-48ac-9ed1-3439cb2fa681","text":"Intercepter une requête HTTP","code":"","isCorrect":false}],"id":"04927481-8151-418a-b000-e1e1669de26c"},{"type":"multiple-choice","text":"Quelle méthode est utilisée pour ajouter un attribut à une requête dans une servlet ?","options":[{"id":"840e7530-79f8-42d4-a648-ea3fef01ef8c","text":"getAttribute()","code":"","isCorrect":false},{"id":"625de743-6a62-46aa-8432-82cc8d08e32f","text":"setAttribute()","code":"","isCorrect":true},{"id":"038ade3c-468b-4a87-a84c-902fdfc5a8e3","text":"getParameter()","code":"","isCorrect":false},{"id":"d40ea513-5b98-44b1-b44d-cd2a8867f621","text":"setParameter()","code":"","isCorrect":false}],"id":"72d25d03-82a1-4fb9-8683-64d9f2b9ba9c"},{"type":"single-choice","text":"Quels types de données peuvent être transmis d'une servlet à une JSP à l'aide des attributs de requête ?","options":[{"id":"647df4be-5bb6-41fc-aa50-e6be5e48fc50","text":"Uniquement des chaînes de caractères","code":"","isCorrect":false},{"id":"ec2f7572-ea8c-4767-96d0-cc5a30828cd1","text":"Uniquement des nombres","code":"","isCorrect":false},{"id":"f45be5f6-07e1-4148-9218-7360e028a7c6","text":"Des objets Java de n'importe quel type","code":"","isCorrect":true},{"id":"799ac020-79ca-413c-bc2c-00be2e8b9ea1","text":"Uniquement des paramètres d'URL","code":"","isCorrect":false}],"id":"b4eea408-e66d-4412-99ba-a14328509abe"},{"type":"single-choice","text":"Comment une servlet récupère-t-elle un paramètre transmis via l'URL ?","options":[{"id":"671ecbe9-123b-4305-8f2f-ad546a50d242","text":"Avec la méthode setParameter()","code":"","isCorrect":false},{"id":"72e461ee-2a9d-4285-8798-33c56500a460","text":"Avec la méthode getAttribute()","code":"","isCorrect":false},{"id":"0a4c9152-056a-48ee-bf8b-7a68102ef29d","text":"Avec la méthode getParameter()","code":"","isCorrect":true},{"id":"3072a3b3-d2ce-46f2-9625-29255db29e3f","text":"Avec la méthode forward()","code":"","isCorrect":false}],"id":"b5c76dcd-0e78-42e0-a5f0-e712e1a073d3"},{"type":"multiple-choice","text":"Dans l'exemple de code, que fait la méthode :","code":"request.getRequestDispatcher(\"test.jsp\").forward(request, response);","options":[{"id":"2d93c333-0787-403e-82ed-29af17fec9c1","text":"Elle modifie les attributs de la requête avant de les envoyer à la JSP","code":"","isCorrect":false},{"id":"474b4c2d-6adc-42aa-9dfa-dc9dd05b4228","text":"Elle ajoute un paramètre à la requête","code":"","isCorrect":false},{"id":"d540ecbf-6ceb-4420-ae2a-6b4223aed2e8","text":"Elle initialise une nouvelle servlet","code":"","isCorrect":false},{"id":"cecedda2-fc4f-4dd9-a7d7-d1f1d41c48c4","text":"Elle redirige la requête vers la JSP spécifiée","code":"","isCorrect":true}],"id":"87dd68e2-3297-41c9-a130-78d51a1d053a"}];

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