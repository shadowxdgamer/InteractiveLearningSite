The Quiz Generator is an interactive web application that allows you to create, customize, and export quizzes. 
You can create multiple-choice, single-choice, or text-answer questions with optional code snippets. 
The tool also supports translation between English and French and provides a modern, responsive design for both editing and exporting quizzes.
Features :
Create quizzes with multiple types of questions:
Text answers
Multiple-choice questions
Single-choice questions
Add optional code snippets to questions.
Save and edit existing questions.
Export quizzes to an interactive HTML format.
Modern and responsive UI design.
Support for English and French languages.

Installation and Usage :

Requirements:
Node.js installed on your system.

1.Install Vite globally:
npm install -g vite
2.Install dependencies:
npm install
3.Run the development server:
npm run dev

Build for Production:
To generate a production build, run:
npm run build
File Structure
src/: Contains the source code.
components/: Reusable React components like QuestionForm, QuizHeader, etc.
lib/: Logic for quiz generation and export.
i18n/: Translation files for English and French.
public/: Static assets (images, fonts, etc.).
dist/: Production-ready build (after running npm run build).

