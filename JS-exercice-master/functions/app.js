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
}*/
//Exo 7

function ident(age, sexe){
	
	var sexe=confirme("Est tu un male?");
		if (sexe == true) {
			alert("Tu es un homme");
			return "Tu es un homme";
		}else {
			alert("Tu es une femme");
			return "Tu es une femme";
		}
	var age=prompt("Ton age?");
		if (age >=18) {
			alert("tu es majeur!");
		}else{
			alert("tu es mineur!");
		}
	var r =alert(sexe + " et " + age);
	return r;
}