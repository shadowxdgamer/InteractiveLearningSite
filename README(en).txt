Interactive Learning Site:
Only the JEE part of the site is fully functional with its own quiz. I will briefly document some important things about the site's architecture in case you need to change parts of it.

----JEE/asd&c/prog_struct folders:----- This is where the HTML pages for each corresponding part of the site reside. The naming convention used is ChapterX_Y_Z_NameOfCourse.html.

X: Number of chapter
Y: Subchapter
Z: Sub-subchapter (you can keep going as much as you'd like)
Name_Of_Course: As it entails, this is the name of the course that the document is about.

---Resources Folder-----

Bootstrap:

The Bootstrap library is stored here. All of the pages reference this folder so that they can use the Bootstrap styling. This is used as a backup because some extra functions only work if an internet connection is established.

CSS:
Contains 2 files for now.
IndexCSS.css (deprecated): Only used by Index.html, which is not being used.
lessonpagesCSS.css: Global CSS file that is used by all HTML files.

Images:
Made up of subdirectories for each lesson type (for the moment just JEE). It contains all images used by that section of the site.

jQuery:
The jQuery library location is used by the sidebar to keep the chapters sidebar open after changing pages and is used in the score quiz script. Some of the pages pull from the CDN, so it's good to have it as a backup in case there isn't internet connectivity.

JS:
Contains 2 scripts for the moment:

quizScript.js: Takes care of calculating the score of the user from the page Chapter7_testJEE.html.
sideBarOpen.js: Takes care of keeping the hierarchy of the submenus open after going from one page to another.

-----IMPORTANT NOTES--------

Some of the functions may not work properly if there isn't an internet connection. For example, Popper, which is used by Bootstrap, is not extremely reliable in the local installation of Bootstrap, so I imported the CDN script on all pages just in case it doesn't work. Please make sure you have a working internet connection.

\m/