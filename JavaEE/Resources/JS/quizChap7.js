
const questions = [{"type":"text","text":"JEE est l'acronyme de …………….","correctAnswer":"Java Enterprise Edition","id":"e30bb0ea-14b1-4ba1-bb3b-af425e16c49e"},{"type":"single-choice","text":"Quel serveur s’occupe de l’exécution des composants SERVLET /JSP?","options":[{"id":"f27e9e12-4529-477c-8f60-87dcdf0e003d","text":"Tomcat","code":"","isCorrect":true},{"id":"1a228183-ccac-4557-a339-0257bdefe504","text":"Apache HTTP Server","code":"","isCorrect":false},{"id":"512c3bd1-a6b8-486c-996b-0839d3f5b3a5","text":"WildFly","code":"","isCorrect":false}],"id":"7b5bb70f-5da6-435d-9129-df4b753b5b11"},{"type":"text","text":"Donnez un exemple de serveur d'application Java EE.","correctAnswer":"WildFly","id":"ecdcb2d5-7bf2-4c8b-89c3-f66ba3baa27b"},{"type":"multiple-choice","text":"Quels sont les composants métier dans une application Java EE ?","options":[{"id":"476748cd-8a64-407f-8eb7-0242451f2b2c","text":"Servlets","code":"","isCorrect":false},{"id":"afeb259e-d16b-4ff3-9b6c-3ed021eba780","text":"JSP","code":"","isCorrect":false},{"id":"160f6d4d-846c-4786-a8d9-11db92f1dee4","text":"EJB","code":"","isCorrect":true},{"id":"8c352226-bb9d-41a7-960b-6ef16cdf8e6b","text":"JavaBeans","code":"","isCorrect":false}],"id":"99b6edd0-dcdf-43bb-9bd3-4e3e31a4cee5"},{"type":"single-choice","text":"Le modèle 3-tiers d'une architecture n-tiers se compose de :","options":[{"id":"87e1d87a-899a-446a-8c69-763cfa68e011","text":"Interface utilisateur, serveur de persistance, serveur d'application","code":"","isCorrect":true},{"id":"717d4c2d-d04d-44cc-b86e-61202faebb34","text":"Interface utilisateur, base de données, serveur d'application","code":"","isCorrect":false},{"id":"c098a872-e024-4558-99d9-59f7e9f95a5a","text":"Serveur de présentation, serveur de données, serveur d'API","code":"","isCorrect":false}],"id":"6d341a56-6b0f-4cec-b5fd-cb7bfa56d454"},{"type":"multiple-choice","text":"Dans une architecture n-tiers, quels sont les rôles du serveur d'application ?","options":[{"id":"84f413cc-80b6-47fc-9071-0aa9497ae264","text":"Gérer l'interface utilisateur","code":"","isCorrect":false},{"id":"1e5e4b86-694b-4b76-b9e0-00f9382c90a2","text":"Gérer la logique métier","code":"","isCorrect":true},{"id":"88355e8b-45e8-4f03-8ebb-5ec8ea4cbea5","text":"Stocker les données","code":"","isCorrect":false},{"id":"ec61d34f-bab0-4cf2-a9bd-5a312a59e855","text":"Gérer les sessions utilisateurs","code":"","isCorrect":true}],"id":"9e34fb54-7239-45b0-aa7e-89bef4054b9e"},{"type":"text","text":"Quel fichier contient les Servlets et JSP dans une application Java EE ?","correctAnswer":"web.xml","id":"cdbc8bcf-cde8-4b56-9916-0af34760175a"},{"type":"single-choice","text":"Le modèle client/serveur repose sur :","options":[{"id":"499e300b-b79c-4d68-8e8f-ce75382f2909","text":"L'exécution locale des traitements sur le serveur","code":"","isCorrect":false},{"id":"78a7bbbe-1792-4a48-bc95-00cf53e9fdf2","text":"La répartition des traitements entre client et serveur","code":"","isCorrect":true},{"id":"ec5b6c1b-0454-4a53-b8f0-e1d65d36bde0","text":"L'utilisation exclusive d'un serveur pour tous les traitements","code":"","isCorrect":false}],"id":"4e19ab69-d462-44f8-9b11-37d81ca1d722"},{"type":"single-choice","text":"Quelle est la différence entre JavaEE, Java et Javascript ?","options":[{"id":"32dd0f82-c4d5-48a1-98e0-7119c485f7d3","text":"JavaEE est utilisé pour les applications d'entreprise, Java est un langage de programmation, et JavaScript est pour les sites web.","code":"","isCorrect":true},{"id":"8ca352d5-e437-4f00-b39c-dc68a2339b9a","text":"JavaEE et Java sont des frameworks, tandis que JavaScript est un langage.","code":"","isCorrect":false},{"id":"4c8df7b8-fa20-483e-aa18-9affcba35b93","text":"Java et JavaEE sont la même chose, mais JavaScript est différent.","code":"","isCorrect":false}],"id":"d1b9820f-11d4-42c2-a0e9-48e283708f0a"},{"type":"single-choice","text":"Sélectionnez le bon extrait de code","options":[{"id":"af248104-eb62-4a36-99d2-248919fdebe7","text":"A","code":" import java.io.*;\n            import javax.servlet.*;\n            import javax.servlet.http.*;\n            \n            public class HelloWorld extends HttpServlet {\n                public void doGet(HttpServletRequest request, HttpServletResponse response)\n                    throws ServletException, IOException {\n                    response.setContentType(\"text/html\");\n                    PrintWriter out = response.getWriter();\n                    out.println(\"\"<h1>Hello World</h1>\"\");\n                }\n            }","isCorrect":true},{"id":"8d450a92-be0e-40bd-b9fa-b7d3d3782860","text":"B","code":"import java.io.*;\n                import javax.servlet.*;\n                import javax.servlet.http.*;\n                \n                public class ExampleServlet{\n                    public void doGet(HttpServletRequest request, HttpServletResponse response)\n                    throws ServletException, IOException {\n                        response.setContentType(\"text/html\");\n                        PrintWriter out = response.getWriter();\n                        out.println(\"\"<h1>Hello World</h1>\"\");\n                    }\n            }","isCorrect":false},{"id":"1c1e02f9-e09b-4ed1-997a-d5407d6b7a7a","text":"C","code":"import java.io.*;\n            import javax.servlet.*;\n            import javax.servlet.http.*;\n            \n            public class MyServlet extends HttpServlet {\n                public void doPost(HttpServletRequest request, HttpServletResponse response)\n                throws ServletException, IOException {\n                    PrintWriter out = response.getWriter();\n                    System.out.println(\"<h1>Hello World</h1>\");\n                }\n            }","isCorrect":false}],"id":"19d8abe7-e176-4e54-82f6-3fa1067aaa67"},{"type":"single-choice","text":"De quel type de page s'agit-il ?","code":"<%@ page import=\"java.util.*\" %>\n                <%@ page language=\"java\" contentType=\"text/html; charset=ISO-8859-1\"\n                pageEncoding=\"ISO-8859-1\"%>\n                <!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n                \"http://www.w3.org/TR/html4/loose.dtd\">\n                <html>\n                <head>\n                <meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">\n                <title>AREL V6.0</title>\n                </head>\n                <body>\n                <h1 align=\"center\">L'école virtuelle de l'EISTI</h1>\n                <form method=\"GET\" action=\"select-promo\">Sélectionner la promo à\n                afficher : <select name=\"promo\" size=\"1\">\n                <option>ing1</option>\n                <option>ing2</option>\n                </select><input type=\"SUBMIT\" /></form>\n                <h2>Liste des étudiants :</h2>\n                <% \n                List<String> promoList = (List<String>)request.getAttribute(\"promo\");\n                Iterator it = promoList.iterator();\n                while(it.hasNext()) {\n                out.print(\"<br />\" + it.next());\n                }\n                %>\n                </body></html>\n                ","options":[{"id":"068cce40-a3f8-4cbd-876b-36eb9ad79b8e","text":"page servlet","code":"","isCorrect":false},{"id":"482d62ac-0c11-4585-ab74-c48ee651a011","text":"page jsp","code":"","isCorrect":true},{"id":"9553ea16-cdd2-48d5-bda3-f0e1decef00d","text":"class java","code":"","isCorrect":false}],"id":"b28aba43-626f-4119-8dfd-e12812608889"},{"type":"multiple-choice","text":"Que précise la directive suivante dans la page JSP ?","code":"                <%@ page language=\"java\" contentType=\"text/html; charset=ISO-8859-1\" %>\n","options":[{"id":"712a9c25-d833-4a67-9daa-b99f7546ba35","text":"Il définit le format d'encodage de la page et le type MIME de la réponse.","code":"","isCorrect":true},{"id":"8b8ef370-1797-4bea-a499-79f3ac9c87d4","text":"Il importe les classes Java dans la page JSP.","code":"","isCorrect":false},{"id":"93579b0c-1fc8-434d-8bba-695c7e136641","text":"Il précise la langue utilisée ainsi que le type de contenu et l'encodage des caractères de la réponse.","code":"","isCorrect":true},{"id":"e7af3549-ba99-482b-9495-06d6fcd3b13c","text":"Il contrôle le comportement de mise en cache de la page.","code":"","isCorrect":false}],"id":"028863fc-8558-49f2-96bc-43e5f7484e69"},{"type":"text","text":"Quelle méthode est utilisée pour récupérer l'attribut nommé « promo » dans la page JSP ?","correctAnswer":"request.getAttribute()","id":"529288ed-b93d-4e97-80b4-0d6f992bb9cd"}];

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