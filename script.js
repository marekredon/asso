/*
panels[0].onclick = function () {        //[0] car c'est l'élément actif
// console.log("YEAH");        pour voir si le click sur l'active marche
}; */


const panels = document.querySelectorAll('.container > *'); 
// on atteint tous les enfants directs de .container

for(let panel of panels) {
  panel.addEventListener('click', function() {
    panels.forEach(p => p.classList.remove('active'));
    panel.classList.add('active');
  });
}



const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });



/* Déclaration de la variable globale switches qui */
/* pointe sur l'élément HTML des boutons avec la class="switches" */
let HtmlSwitches = document.getElementsByClassName('btnSwitch');

/* Déclaration de la variable globale style */
/* à laquelle on assigne via la méthode Javascript */
/* localStorage.getItem() un accès au stockage local */
/* On affiche son contenu dans la console */
/* à savoir le thème de couleur actif par défaut */
let style = localStorage.getItem('style');
// console.log(style);

/* S'il n'y avait pas de thème par défaut on force le thème Light */
if (style == null) {
    /* Si "style" est vide on applique le thème "Light" */
    setTheme('light'); // DECOMMENTER ICI POUR LE ELSE IF
    // setThemeBySwitch('light');
} else {
    /* Sinon on laisse le thème chargé */
    setTheme(style); // DECOMMENTER ICI POUR LE ELSE IF
    // setThemeBySwitch(style);
}
// console.log(style);
/* On crée une file d'attente de l'événement "click" */
/* Sur l'ensemble des boutons de la classe "btnSwitch" */
/* On appelle la fonction setTheme() avec en argument */
/* le thème sélectionné via l'ID de l'élément cliqué */
for (let Cmptr of HtmlSwitches) {
  Cmptr.addEventListener('click', function () {
    let theme = this.dataset.theme;
    // console.log('Thème choisi : ' + theme);
     setTheme(theme); // DECOMMENTER ICI POUR LE ELSE IF
     // setThemeBySwitch(theme);
  });
}

/* Cette fonction reçoit en argument, (theme), 
Le nom de la feuille sélectionnée par le clic 
des boutons "btnSwitch et vient l'appliquer à 
<link rel="stylesheet" id="switcher-id" href=""> 
 Dans la partie HEAD du document HTML */
function setTheme(theme) {
  if (theme == 'light') {
    document.getElementById('switcher-id').href = './themes/light.css';
  } else if (theme == 'sky') {
    document.getElementById('switcher-id').href = './themes/sky.css';
  } else if (theme == 'purple') {
    document.getElementById('switcher-id').href = './themes/purple.css';
  } else if (theme == 'dark') {
    document.getElementById('switcher-id').href = './themes/dark.css';
  } else { localStorage.setItem('style', theme); 
  }
}

/*
function setThemeBySwitch(theme){
  // console.log('Thème choisi : ' + theme);
  switch(theme){
    case 'sky':
        document.getElementById('switcher-id').href = './themes/sky.css';
        break;
    case 'purple':
        document.getElementById('switcher-id').href = './themes/purple.css';
        break;
    case 'dark':
        document.getElementById('switcher-id').href = './themes/dark.css';
        break;      
    default: document.getElementById('switcher-id').href = './themes/light.css';
  }
}
*/
