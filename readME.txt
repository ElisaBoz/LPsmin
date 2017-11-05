
installer le projet :

git clone https://github.com/ElisaBoz/LPsmin.git

npm install




librairies inportées depuis npm: 
	bootstrap
    flexslider --> pas utilisé dans ce site
    jquery --> pour bootstrap
    parallax.js 
    popper.js --> pour bootstrap
    tilt.js --> pour le logo 


 Les personnages sont récupérés grâce à une bouble qui récupère l'url que chaque listes de 10 personnages.
 
 Problème : lorsque l'on appuie sur le bouton "plus de personnages", les anciens personnages sont récupérés à nouveau, ce qui créer des doublons.