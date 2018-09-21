// prototype clain inherit
function Father() {
    this.lastName = 't';        
    this.isHuman = true;
    this.card = {
        bank: '',
        ID: ''
    };
}

var father = new Father();
console.log(father.isHuman);                    // t
console.log(father.lastName);                   // true


function Son() {
    this.firstName = 'c';
}

Son.prototype = new Father();

var son = new Son();
console.log(son.lastName);                       // t
console.log(son.isHuman);                        // true 
console.log(son.firstName);                      // c

son.card.bank = 'BOC';

var son2 = new Son();
console.log(son2.card.bank);                    // BOC




// constructor inherit
function Father(name) {
    this.lastName = name;        
    this.isHuman = true;
    this.card = {
        bank: 'ICBC',
    };
}

function Son() {
    this.firstName = 'c';
    Father.call(this, 't');
}

var son = new Son();
console.log(son.card.bank);                         // 'ICBC'
console.log(son.lastName);                          // t
son.card.bank = 'BOC';
console.log(son.card.bank);                         // 'BOC'

var son2 = new Son();
console.log(son2.card.bank);                        // 'ICBC'





// classic inherit
function Father(name) {
    this.lastName = name;        
    this.isHuman = true;
    this.card = {
        bank: 'ICBC',
    };
}

function Son() {
    Father.call(this, 't');
}

