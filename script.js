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


