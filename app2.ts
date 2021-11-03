let game:boolean = false

const as:number = 1;
const J:number = 10;
const Q:number = 10;
const K:number = 10;
let talia = [as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K,as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K]
//[as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];
let yourCards:number[] = [];
let enemyCards:number[] = [];


function start() {
  
   if(game == true) {console.log('Już zacząłeś !')}
  else {
  for (let i = 0; i <=1; i++)
    { 
        const card = Math.floor(Math.random() * (talia.length - 1));
        yourCards.push(talia[card]);
        talia.splice(card, 1);
    }  
      
 
 for (let i = 0; i <=1; i++)
    {
        const card = Math.floor(Math.random() * (talia.length - 1));
        enemyCards.push(talia[card]);
        talia.splice(card, 1);


    }

    let sum1 = 0;
    for (let i = 0; i < yourCards.length; i++) {
     sum1 += yourCards[i];
    }
    
    let sum2 = 0;
    for (let i = 0; i < enemyCards.length; i++) {
        sum2 += enemyCards[i];
    }
    
}
console.log(yourCards)
console.log(enemyCards)

return game = true   
}
console.log(yourCards)
console.log(enemyCards)


function nextcard() {
  if (game == true) {
    console.log("Gramy")
  } else { console.log("Nie uruchomiłeś gry")}
}

function check() {
  if(game == true) {
    console.log("możesz sprawdzić")
  } else {console.log ("Nie możesz sprawdzić")}
}