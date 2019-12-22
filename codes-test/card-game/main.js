class Card {
    constructor(suite, rang, valeur) {
        this.suite = suite;
        this.rang = rang;
        this.valeur = valeur;
    }
}
class Deck {
    constructor() {
        this.cards = [];    
    }      
    createDeck() {
        let suites = ['trefles', 'carreaux', 'coeurs', 'pics'];
        let rangs = ['as', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'valet', 'reine', 'roi'];
        let valeurs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suites.length; i++) {
            for (let j = 0; j < rangs.length; j++) {
                this.cards.push(new Card(suites[i], rangs[j], valeurs[j]));
            }
        }
    }
    shuffleDeck() {
       let location1, location2, tmp;
       for (let i = 0; i < 1000; i++) {
           location1 = Math.floor((Math.random() * this.cards.length));
           location2 = Math.floor((Math.random() * this.cards.length));
           tmp = this.cards[location1];
           this.cards[location1] = this.cards[location2];
           this.cards[location2] = tmp;
        }
    }
}
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}
class Game {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start(NomjoueurUn, NomjoueurDeux) {
        this.players.push(new Player(NomjoueurUn));
        this.players.push(new Player(NomjoueurDeux));
        let d = new Deck();
        d.createDeck();
        d.shuffleDeck();    
        this.players[0].playerCards = d.cards.slice(0, 26);
        this.players[1].playerCards = d.cards.slice(26, 52);
    }
}let boardGame = new Game();
boardGame.start('Dez', 'Eugene');console.log(boardGame.players);
