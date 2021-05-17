// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

class Personnage{
    constructor(age,nom,ville){
        this.age=age;
        this.nom=nom;
        this.ville=ville;
        this.sePresenter = () =>{
            console.log(`Bonjour, je m'appelle ${this.nom}!`)
        }
    }
   
};

let kev = new Personnage(25, "baluba", "bruxelles");
let bkl = new Personnage(6, "BB", "Namur");

kev.sePresenter();





// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1


// ## EXO1
// ## Traduire le code suivant en class et en instances

class Lieux{
    constructor(nom,contenu, ingredients){
        this.nom=nom;
        this.contenur=contenu;
        this.ingredients=ingredients;
    }
}

// ### lieux
// ### let maison = {
// ###   nom: "maison",
// ###   contenu: [],
// ### };
let maison = new Lieux("maison",[])


 
// ### let epicerie = {
// ###   nom: "epicerie",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
 let epicerie = new Lieux("epicerie", [], []);

// ### let cuisine = {
// ###   nom: "cuisine",
// ###   contenu: [],
// ###   ingredients: [],
// ### };
let cuisine = new Lieux("cusine", [],[]);

// ### ingredients

class Ingredients{
    constructor(nom, etat, prix){
        this.nomI=nom;
        this.etat=etat;
        this.prix=prix;
    }
}
// ### let poivron = {
// ###   nom: 'poivron',
// ###   etat: 'entier',
// ###   prix:  1 ,
// ###  };

let poivron = new Ingredients("poivron", "entier", 1);
// ###  let oignon = {
// ###   nom: 'oignon',
// ###   etat: 'entier',
// ###   prix:  2 ,
// ###  };
let oignon = new Ingredients("oignons", "entier", 2);
// ###  let oeuf = {
// ###   nom: 'oeuf',
// ###   etat: 'entier',
// ###   prix:  4 ,
// ###  };
let oeuf = new Ingredients("oeuf", "entier", 4);
// ###  let epice = {
// ###   nom: 'epice',
// ###   etat: 'moulu',
// ###   prix:  3.25 ,
// ###  };
let epice = new Ingredients("epcie", "moulu", 3.25);
// ###  let paprika = {
// ###   nom: 'paprika',
// ###   etat: 'moulu',
// ###   prix:  1.5 ,
// ###  };
let paprika = new Ingredients("paprika", "moulu", 1.5);
// ###  let fromage = {
// ###   nom: 'fromage',
// ###   etat: 'coupé',
// ###   prix:  1.6 ,
// ###  };
let fromage = new Ingredients("fromage", "coupé", 1.6);
console.log(fromage);

// ### Personne

class Personne{
    constructor(nom, lieu, argent, panier){
        this.nomP=nom;
        this.lieu=lieu;
        this.argent=argent;
        this.panier=panier;
        this.se_deplacer = ()=>{

        }
    }
    
}
// ### let personnage = {
// ###  nom: "Maxime",
// ###  lieu: "néant",
// ###  argent: 100,
// ###  panier: [],
// ###  se_deplacer(x){
// ###  },
let personnage = new Personnage("Maxime", "neant", 100, [], se_deplacer());
console.log(personnage);

// ###  payer(x){
// ###  },
// ###  couper(x,y){
// ###  }
// ### }