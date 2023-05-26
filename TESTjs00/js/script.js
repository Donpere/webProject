let s1 = "SaL n AAuT";
let s2 = "Kayak";
let s3 = 'Georges'
let s4 = 'toIOt'

function palindrome(str1) {
	str1 = str1.toLowerCase(str1);
	let str2 = str1.split("").reverse().join("");
	if(str1 === str2)
		return true;
	else
		return false;
}

// on prefere cette ecriture
console.log(`${s1} is ${palindrome(s1)}`);

// a cette ecriture
console.log(s2 + ' is ' + palindrome(s2));
console.log(s3 + ' is ' + palindrome(s3));
console.log(s4 + ' is ' + palindrome(s4));

// console.log(24);


// constructeur objet
function person(age, nat, tail, statM, name){
	this.age = age;
	this.nat = nat;
	this.tail = tail;
	this.statM = statM;
	this.name = name;
}

// creation d'une nouvelle personn puis  
let john = new person(24, 'fr', 182, true);
// ajout d'une nouvelle propriete, si elle n'existe pas, elle se cree
john.name = 'John';
// WARNING : cette propriete name N'EST VALABLE QUE pour john ni elles n'est pas dans le prototype
// PAR AILLEURS EST INTERDIT : let john = new person(john.name = 'john', 24, 'fr', 182, true)

// creation d'une serie 

let paul = new person(24, 'fr', 182, true, 'paul')
console.log(paul)

console.log(paul.name)

let franck = new person(16, 'us', 166, false, 'franck')
let tom = new person(14, 'us', 216, false, 'tom')
let soizic = new person(22, 'gb', 156, true, 'soizic')
let petra = new person(17, 'ru', 172, false, 'petra')

// ajout posterieur d'une methode a l'objet personn
person.prototype.driver = function (){
	if(this.nat != 'us' && this.nat != 'fr')
		return (`Desole ${this.name}, nous ne connaissons pas la legislation en vigueur dans votre pays.`+ '<br>');
	else if(this.age >= 18 && (this.nat === 'fr' || this.nat === 'su'))
		return (`Bravo ${this.name}! Vous pouvez conduire`+ '<br>');
	else if(this.age >= 16 && this.nat === 'us')
		return (`Congrats ${this.name} ! You can drive`+ '<br>');
	else if(this.age >= 19 && this.nat === 'no')
		return (`Congrats ${this.name} ! You can drive`+ '<br>');

	else
		return (`Sorry ${this.name}, but you can't drive`+ '<br>')
}

// utilisation d'une balise (ici h1) pour afficher une liste
// d'appel a une fonction

let result = '';

result += paul.driver() + '<br>';
result += franck.driver() + '<br>';
result += tom.driver() + '<br>';
result += soizic.driver() + '<br>';

document.getElementById("jsComp1").innerHTML = result;

// idem avec une fonction externe a l'objet
// document.getElementById("jsComp1").innerHTML = driver(paul);
// console.log(driver(franck));
// document.getElementById("jsComp1").innerHTML = driver(tom);
// console.log(driver(soizic));

console.log(" ")

const AGE = 17;
const TIME = 8

let suzie = new person(12, 'su', 112, false, 'suzie');
let olga = new person(32, 'no', 162, true, 'olga');
let juan = new person(54, 'es', 178, true, 'juan');
let hamed = new person(42, 'ma', 175, false, 'hamed');

result += suzie.driver() +'<br>'
result += olga.driver() +'<br>'
result += juan.driver() +'<br>'
result += hamed.driver() +'<br>'


document.getElementById("jsComp2").innerHTML = result


// switch (expr) {
// 	case "Oranges":
// 	  console.log("Oranges : 0.59 € le kilo.");
// 	  break;
// 	case "Pommes":
// 	  console.log("Pommes : 0.32 € le kilo.");
// 	  break;
// 	case "Bananes":
// 	  console.log("Bananes : 0.48 € le kilo.");
// 	  break;
// 	case "Cerises":
// 	  console.log("Cerises : 3.00 € le kilo.");
// 	  break;
// 	case "Mangues":
// 	case "Papayes":
// 	  console.log("Mangues et papayes : 2.79 € le kilo.");
// 	  break;
// 	default:
// 	  console.log("Désolé, nous n'avons plus de " + expr + ".");
//   }
  
//   console.log("Autre chose ?");