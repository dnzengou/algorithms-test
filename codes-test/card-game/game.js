/* Creer la classe carte*/
class Carte {
    constructor(suite, rang, valeur) {
// modèle que nous utiliserons pour créer une carte
        this.suite = suite;
        this.rang = rang;
        this.valeur = valeur;
// le mot-clé 'this' pour faire référence à toute nouvelle instance de carte que nous faisons. Il indique que chaque carte que nous fabriquons aura une certaine propriété, qui sera définie sur tout ce que nous aurons passé lors de sa création.
    }
}


/*let myCarte = new Carte("Une Suite", "As", 10);
//constructor(suite, rang, valeur)

console.log(Carte);
console.log('instance de la classe Carte? ' + (myCarte instanceof Carte));*/


/* Creer la classe Deck*/
class Deck {
    constructor() {
        this.cards = [];    
    }
                       
    createDeck() {
    let suites = ['clubs', 'diamonds', 'hearts', 'spades'];
    let rangs = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    let valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < rangs.length; j++) {
            this.cards.push(new Carte(suites[i], rangs[j], valeurs[j]));
        }
    }
}
shuffleDeck() {
        
    }
}

// create a new deck instance named "d"
const d = new Deck();

// notice since our Deck class' constructor has no arguments, we do  // not need to pass anything into Deck()
d.createDeck();       // calling our function to fill our array
console.log(d.cards); // logging our cards array [this.cards]

