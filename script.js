var boutonValue2 = document.getElementById("bouton2");
var dominos = [domValue =[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,2],[2,3],[2,4],[2,5],
                    [2,6],[3,3],[3,4],[3,5],[3,6],[4,4],[4,5],[4,6],[5,5],[5,6],[6,6]]];
var joueur1 = [j1Value=[]];
var joueur2 = [j2Value=[]];
var boutonPioche = document.getElementById('pioche');
var pioche = false;
var tour = 0;

for (var i = 0; i != 28; i++) {
    dominos[i] = 'Domino' + i + '.png';
}
melanger(dominos);
console.log(dominos[0][1])


;
console.log(domValue);
joueur1 = dominos.slice(0,7);
j1Value = domValue.slice(0,7);
joueur2 = dominos.slice(7,14);
j2Value = domValue.slice(7,14);
dominos.splice(0,14);
domValue.splice(0,14);

do {
    if (tour === 0) {
        for(var i = 0; i < joueur1.length; i++) {
            document.getElementById("main").innerHTML = '<img src="' + joueur1.join('" /><img src="') + '" />';
        }
    }else if (tour === 1){
        for(var i = 0; i < joueur2.length; i++){
            document.getElementById("main").innerHTML = '<img src="' + joueur2.join('" /><img src="') + '" />';
        }
    }
} while(pioche = false);

boutonPioche.addEventListener('click', function() {
    if(tour === 1){
        joueur1.push(dominos[0]);
        dominos.splice(0,1);
        tour = 0;
        console.log(tour);
        for(var i = 0; i < joueur1.length; i++) {
            document.getElementById("main").innerHTML = '<img src="' + joueur1.join('" /><img src="') + '" />';
        }
    }else if(tour === 0) {
        joueur2.push(dominos[0]);
        dominos.splice(0,1);
        tour = 1;
        console.log(tour);
        for(var i = 0; i < 1; i++) {
            document.getElementById("main").innerHTML = '<img src="' + joueur2.join('" /><img src="') + '" />';
        }
    }
});

boutonValue2.addEventListener('click', function() {
    choixJoueurs.style.display = 'none';
    main.style.display = 'flex';
    containerPioche.style.display = 'block';
    for(var i = 0; i < joueur1.length; i++) {
        document.getElementById("main").innerHTML = '<img src="' + joueur1.join('" /><img src="') + '" />';
    }
});

function melanger(dominoPick) {
    var i = dominoPick.length, tempo, indexRandom;
  while ( i > 0) { 
        indexRandom = Math.floor(Math.random()*i);
        i--;
        tempo = dominoPick[i];
        dominoPick[i] = dominoPick[indexRandom];
        dominoPick[indexRandom] = tempo;
    }
    return dominoPick;
}
var check = document.getElementsByTagName("img")[0];
function placement() {
    console.log(check = 1);
}

for (var i = 0; i <= joueur1.length; i++){
    check.addEventListener('click', placement);}
