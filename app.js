"use strict";
let game = false;
const as = 1;
const J = 10;
const Q = 10;
const K = 10;
let talia = [as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];
//[as, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K];
let yourCards = [];
let enemyCards = [];


function start() {
    if (game == true) {
        console.log('Już zacząłeś !');
    } else if (game == false ){
        for (let i = 0; i <= 1; i++) {
            const card = Math.floor(Math.random() * (talia.length - 1));
            yourCards.push(talia[card]);
            talia.splice(card, 1);
        }
        for (let i = 0; i <= 1; i++) {
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

      const msg1 = `Posidasz obecnie następujące karty ${yourCards} o łącznej wartości ${sum1}`;
       const objTo = document.getElementById('hand');
       const showMsg1 = document.createElement("p");
       showMsg1.classList.add("start")
       showMsg1.innerHTML = msg1;
       objTo.appendChild(showMsg1);


       const msg2 = `Przeciwnik posiada obecnie następujące karty X oraz ${enemyCards[1]} o wartości powyżej ${sum2-enemyCards[0]}`;
       const objTo2 = document.getElementById('enemy');
       const showMsg2 = document.createElement("p");
       showMsg2.innerHTML = msg2;
       objTo2.appendChild(showMsg2);

    console.log(yourCards);
   
    console.log(enemyCards);

    return game = true;
} else { refresh()}

}


console.log(yourCards);
console.log(enemyCards);


function nextcard() {
    if (game == true) {
        console.log("Gramy");
        const card = Math.floor(Math.random() * (talia.length - 1));
        yourCards.push(talia[card]);
        talia.splice(card, 1);
    
        let sum1 = 0;
        for (let i = 0; i < yourCards.length; i++)
        sum1 += yourCards[i];
    
        const msg1 = `Posidasz obecnie następujące karty ${yourCards} o łącznej wartości ${sum1}`;
        const objTo = document.getElementById('hand');
        const showMsg1 = document.createElement("p");
        showMsg1.innerHTML = msg1;
        objTo.appendChild(showMsg1);

        if (sum1 > 21){console.log('Przegrałeś')
        const wynik = `Przegrałeś ponieważ miałeś więcej niż 21`;
        const objTo = document.getElementById('result');
        const showResult = document.createElement("p");
        showResult.classList.add("loss")
        showResult.innerHTML = wynik;
        objTo.appendChild(showResult);
        return game = true;}

        

        const WhatToDoEnemy = Math.floor(Math.random() * (2 - 0))
        if (WhatToDoEnemy == 1) {
          let i = 0
          for (i = 0; i < 1; i++) {
            const card = Math.floor(Math.random() * (talia.length - 1));
            enemyCards.push(talia[card]);
            talia.splice(card, 1);}

            let sum2 = 0;
            for (let i = 0; i < enemyCards.length; i++) {
            sum2 += enemyCards[i];}

            const msg2 = `Przeciwnik posiada obecnie następujące karty X oraz ${enemyCards.slice(1)} o wartości powyżej ${sum2-enemyCards[0]}`;
            const objTo2 = document.getElementById('enemy');
            const showMsg2 = document.createElement("p");
            showMsg2.innerHTML = msg2;
            objTo2.appendChild(showMsg2);

            if (sum2 > 21){console.log('Wygrałeś')
            const wynik = `Wygrałeś ponieważ przeciwnik miał więcej niż 21`;
            const objTo = document.getElementById('result');
            const showResult = document.createElement("p");
            showResult.classList.add("win")
            showResult.innerHTML = wynik;
            objTo.appendChild(showResult);
            return game = true;}

        }

        if (1==1) {
          
        }


      }
    else {
        console.log("Nie uruchomiłeś gry");
    }
}


function check() {

  let sum1 = 0;
  for (let i = 0; i < yourCards.length; i++) {
      sum1 += yourCards[i];
  }
  let sum2 = 0;
  for (let i = 0; i < enemyCards.length; i++) {
      sum2 += enemyCards[i];
  }

    if (game == true) {
        if (sum1 > 21){console.log('Przegrałeś')
        const wynik = `Przegrałeś ponieważ miałeś więcej niż 21`;
        const objTo = document.getElementById('result');
        const showResult = document.createElement("p");
        showResult.classList.add("loss")
        showResult.innerHTML = wynik;
        objTo.appendChild(showResult);

        const msg2 = `Przeciwnik posiadał karty ${enemyCards} o wartości ${sum2}`;
        const objTo2 = document.getElementById('enemy');
        const showMsg2 = document.createElement("p");
        showMsg2.innerHTML = msg2;
        objTo2.appendChild(showMsg2);
      }
        else if (sum1 <=21 && sum1 > sum2) {console.log('Wygrałeś')
        const wynik = `Wygrałeś`;
        const objTo = document.getElementById('result');
        const showResult = document.createElement("p");
        showResult.classList.add("win")
        showResult.innerHTML = wynik;
        objTo.appendChild(showResult);

        const msg2 = `Przeciwnik posiadał karty ${enemyCards} o wartości ${sum2}`;
        const objTo2 = document.getElementById('enemy');
        const showMsg2 = document.createElement("p");
        showMsg2.innerHTML = msg2;
        objTo2.appendChild(showMsg2);
      } 
        else {console.log('Przegrałeś')
        const wynik = `Przegrałeś ponieważ przeciwnik miał lepszy wynik`;
        const objTo = document.getElementById('result');
        const showResult = document.createElement("p");
        showResult.classList.add("loss")
        showResult.innerHTML = wynik;
        objTo.appendChild(showResult);

        const msg2 = `Przeciwnik posiadał karty ${enemyCards} o wartości ${sum2}`;
       const objTo2 = document.getElementById('enemy');
       const showMsg2 = document.createElement("p");
       showMsg2.innerHTML = msg2;
       objTo2.appendChild(showMsg2);
      } 
    }else {
        console.log("Nie możesz sprawdzić");
    }

    return game = true;
}


function refresh () {
  window.location.reload(true)

}
