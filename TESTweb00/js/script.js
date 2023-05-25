function perso(age,nat, nom) {
	this.age = age;
	this.nat = nat;
	this.nom = nom;
};

 let dom = new perso(50, 'fr', 'Dom');
 let jack = new perso(19, 'us', 'Jack');

 function permis(perso) {
    if (perso.age >= 18 && perso.nat === 'fr') {
        console.log('Tu peux conduire, ' + perso.nom);
    } else {
        console.log("C'est trop tôt, " + perso.nom);
    }
}


permis(dom)
permis(jack)


 console.log(dom)


 document.getElementById("txt").innerHTML="change";

 document.querySelector("p").innerHTML="dis"
 document.querySelector(".bd").innerHTML="donc"
 document.querySelector("#tt").innerHTML="toi"

 alert("On commence le programme");

// let monTexte = "Attention";
 
//  for (var i=0 ; i< 5; i++) {

//     alert(i + " " +monTexte);

// }
 
//  alert("C'est bientôt terminé");

// document.write("use write");


// ATTENTION 
// = pour attribuer une valeur
// == egal sans tenir compte du type
// exemple une chaine '4' == un number 4

// === strictement egal
// 4 === 4 est correct
// mais '4'=== 4 serait faux
