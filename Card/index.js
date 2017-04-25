
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

    getAll(){
        return this.cards;
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

    pickOndeSpecific(type){
        const arrTemp = []
        for(let i = 0; i < this.cards.length -1; i++){
            if(this.cards[i].type == type){
                arrTemp.push(this.cards[i]);
            }
        }
        const idx = Math.floor(Math.random() * arrTemp.length -1);
        return arrTemp[idx];
    }
}

const deckOfCard = new DeckOfCard();

console.log('============ ALL CARDS ============ ')
console.log(deckOfCard.getAll());
console.log('============ Pick One Random ============')
console.log(deckOfCard.pickOneRandom());
console.log('============ Pick One Unpicked ============')
console.log(deckOfCard.pickOneUnpicked());
console.log('============ Pick One Specific (Diamond) ============')
console.log(deckOfCard.pickOndeSpecific('DIAMOND'));