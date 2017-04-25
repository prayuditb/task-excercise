
class DeckOfCard {
    constructor(){
        // fill the cards
        this.cards = [];
        this.shuffled = [];
        let card_type = ['HEART','DIAMOND','CLUB','SPADE'];
        let card_number = ['ACE',2,3,4,5,6,7,8,9,10,'JACK','QUEEN','KING'];
        card_type.map(type => card_number.map(number => 
            this.cards.push({ type, number })
        ))

        // create shuffled deck card
        this.shuffled = this.cards;
        this.shuffle();
    }

    shuffle() {
        // Fisher–Yates shuffle algorithm
        const length = this.shuffled.length - 1;
        for(let i = 0; i < length; i++){
            let j = Math.floor(Math.random() * length);
            let temp = this.shuffled[i];
            this.shuffled[i] = this.shuffled[j];
            this.shuffled[j] = temp;
        }
        this.unpicked = this.shuffled;
    }

    pickOneRandom(){
        let i = Math.floor(Math.random() * this.shuffled.length -1);
        return this.shuffled[i];
    }

    pickOneUnpicked(){
        let i = Math.floor(Math.random() * this.unpicked.length - 1);
        let result = this.unpicked.splice(i,1);
        return result[0];
    }


}

const deckOfCard = new DeckOfCard();
for (let j = 0; j <= 52; j++){
    let i = deckOfCard.pickOneUnpicked();
    console.log(i);
}