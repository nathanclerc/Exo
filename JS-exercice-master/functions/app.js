//Exo 1
/*function vrai() {
//	return true;
}
//Exo 2
var str= "je suis une chaine";
function chaine(str){
return str;
} 
//Exo 3
var str="première chaine";
var str2="deuxième chaine";
function concaténation(str, str2){
	var res = str+str2;
	return res;
} 
//Exo 4

function compare(fNb, sNb){
	var fNb=prompt("Choisi un numéro");
	var sNb=prompt("Choisi un numéro");
	if (fNb > sNb) {
		alert("Le premier nombre est plus grand");
	}else if (fNb<sNb) {
		alert("Le premier nombre est plus petit");
	}else if (fNb == sNb) {
		alert("Les deux nombres sont identiques");
	}
} 
//Exo 5
function concat(str, nb){
	var nb=prompt("Choisi un numéro");
	var str = prompt("Choisi un mot");
	var res = nb.concat(str);
	alert(res);
	return res;
}
//Exo 6
function identite(nom, prenom, age){
	var nom = prompt("Ton nom?");
	var prenom = prompt("Ton prenom?");
	var age = prompt("Ton age?");
	var r="Bonjour, " + nom + " " + prenom + ", tu as " + age + " ans.";
	alert(r);
	return r;
}
//Exo 7

function ident(age, genre){
	var type ="homme" || "femme";
	var genre=prompt("De quel genre es tu? (homme ou femme)");
		if (genre == type) {
			var age=prompt("Ton age?");
			if (age >=18) {
				var statut="vous êtes majeur";
			}else{
			var statut="vous êtes mineur"
			}
		}
		else{
			alert("Veuillez rentrer un genre correct.");
			
		}
		var r =alert("Vous êtes un(e)" + genre + " et " + statut);
	return r;
} */
//Exo 9
function calcul(a, b, c){
	var a = prompt("entre un numéro");
	var b = prompt("entre un numéro");
	var c = prompt("entre un numéro");
	var r = Number(a) + Number(b) + Number(c);
	alert(r);
	return r;
}