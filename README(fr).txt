Site d'apprentissage interactif :
Seule la partie JEE du site est entièrement fonctionnelle avec son propre quiz. Je vais brièvement documenter certaines choses importantes sur l'architecture du site au cas où vous auriez besoin de modifier des parties.

----Dossiers JEE/asd&c/prog_struct :----- 
C'est ici que se trouvent les pages HTML pour chaque partie correspondante du site. La convention de nommage utilisée est ChapterX_Y_Z_NameOfCourse.html.

X : Numéro du chapitre
Y : Sous-chapitre
Z : Sous-sous-chapitre (vous pouvez continuer autant que vous le souhaitez)
Nom_Du_Cours : Comme il l'indique, il s'agit du nom du cours dont le document traite.

---Dossier Ressources-----

Bootstrap :

La bibliothèque Bootstrap est stockée ici. Toutes les pages référencent ce dossier afin qu'elles puissent utiliser le style Bootstrap. Cela est utilisé comme sauvegarde car certaines fonctions supplémentaires ne fonctionnent que si une connexion Internet est établie.

CSS :
Contient 2 fichiers pour le moment.
IndexCSS.css (déprécié) : Utilisé uniquement par Index.html, qui n'est pas utilisé.
lessonpagesCSS.css : Fichier CSS global utilisé par tous les fichiers HTML.

Images :
Composé de sous-répertoires pour chaque type de leçon (pour l'instant juste JEE). Il contient toutes les images utilisées par cette section du site.

jQuery :
L'emplacement de la bibliothèque jQuery est utilisé par la barre latérale pour garder la barre latérale des chapitres ouverte après avoir changé de page et est utilisée dans le script de notation du quiz. Certaines des pages tirent du CDN, donc c'est bien de l'avoir comme sauvegarde en cas de non-connectivité Internet.

JS :
Contient 2 scripts pour le moment :

quizScript.js : S'occupe de calculer le score de l'utilisateur à partir de la page Chapter7_testJEE.html.
sideBarOpen.js : S'occupe de garder la hiérarchie des sous-menus ouverte après être passé d'une page à une autre.

-----NOTES IMPORTANTES--------

Certaines fonctions peuvent ne pas fonctionner correctement s'il n'y a pas de connexion Internet. Par exemple, Popper, qui est utilisé par Bootstrap, n'est pas extrêmement fiable dans l'installation locale de Bootstrap, donc j'ai importé le script CDN sur toutes les pages au cas où cela ne fonctionnerait pas. Veuillez vous assurer que vous avez une connexion Internet fonctionnelle.

\m/