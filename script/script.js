const modal = document.querySelector('#dialog');
const btnShow = document.querySelector('#btnShow')
const memoryGame = document.querySelector('.memory__game');
const btnPlayAgain = document.querySelector('#playAgain');
const btnCloseCard = document.querySelector('#btnCloseCard');
let idTheme = document.querySelector('#idTheme');
let cardWrapper = document.querySelectorAll('.memory__card');

console.log('memoryGame: ', memoryGame);
let animePictures = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
                    41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
                    81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,
                    121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140];
// console.log('animePictures: ', animePictures);
let cardSuit = 0;
let win = 12;

// animePictures.splice(1, 1);
// console.log('animePictures: ', animePictures);

function mathRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue;
}

function frameworkCards() {
    cardSuit = 1;
    let linkframeworkCards = `
<div class="memory__card" data-framework="react">
    <img class="front__face" src="./img/react.svg" alt="React">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="react">
    <img class="front__face" src="./img/react.svg" alt="React">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="angular">
    <img class="front__face" src="./img/angular.svg" alt="Angular">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="angular">
    <img class="front__face" src="./img/angular.svg" alt="Angular">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="aurelia">
    <img class="front__face" src="./img/aurelia.svg" alt="Aurelia">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="aurelia">
    <img class="front__face" src="./img/aurelia.svg" alt="Aurelia">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="ember">
    <img class="front__face" src="./img/ember.svg" alt="Ember">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="ember">
    <img class="front__face" src="./img/ember.svg" alt="Ember">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="vue">
    <img class="front__face" src="./img/vue.svg" alt="Vue">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="vue">
    <img class="front__face" src="./img/vue.svg" alt="Vue">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="backbone">
    <img class="front__face" src="./img/backbone.svg" alt="Backbone">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>

<div class="memory__card" data-framework="backbone">
    <img class="front__face" src="./img/backbone.svg" alt="Backbone">
    <img class="back__face" src="./img/js-badge.svg" alt="Memory Card">
</div>
`

memoryGame.insertAdjacentHTML('beforeend', linkframeworkCards);
}

function clearScreen() {
    // idTheme.outerHTML = ' <div id="idTheme" class="theme"><h2>Жопа не работает</h2></div>';
    idTheme.outerHTML = '';
}

function animeCards() {
    cardSuit = 2;
    let [num1, num2, num3, num4, num5, num6] = [null, null, null, null, null, null];
    let suitNum = mathRandom(1, 58);
    let k = [num1, num2, num3, num4, num5 , num6];
    // console.log('k: ', k);
    currentAnimePictures = animePictures.slice();
    // console.log('currentAnimePictures: ', currentAnimePictures);


    function randomPictures() {
        for (let i = 0; i < +(k.length); i++) {
            j = mathRandom(1, currentAnimePictures.length - 1);
            // console.log('currentAnimePictures.length: ', currentAnimePictures.length);
            // console.log('j: ', j);
            k[i] = currentAnimePictures[j];
            // console.log('currentAnimePictures[j]: ', currentAnimePictures[j]);
            currentAnimePictures.splice(j, 1);
        }
    }
    // suitNum = mathRandom(1, 58);
    randomPictures();
    // console.log('k: ', k);
    // console.log('currentAnimePictures: ', currentAnimePictures);

    function outToScreen(num1, num2, num3, num4, num5, num6, suitNum) {
        // clearScreen();

        // let linkAnimeCards = `
        //     <div class="theme">
        //         <div class="memory__card" data-framework="animeGirl_${num1}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num1}.jpg" alt="Anime Girl ${num1}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num1}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num1}.jpg" alt="Anime Girl ${num1}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num2}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num2}.jpg" alt="Anime Girl ${num2}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num2}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num2}.jpg" alt="Anime Girl ${num2}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num3}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num3}.jpg" alt="Anime Girl ${num3}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num3}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num3}.jpg" alt="Anime Girl ${num3}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num4}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num4}.jpg" alt="Anime Girl ${num4}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num4}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num4}.jpg" alt="Anime Girl ${num4}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num5}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num5}.jpg" alt="Anime Girl ${num5}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num5}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num5}.jpg" alt="Anime Girl ${num5}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num6}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num6}.jpg" alt="Anime Girl ${num6}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div>

        //         <div class="memory__card" data-framework="animeGirl_${num6}">
        //             <img class="front__face_anime" src="./img/animeGirl_${num6}.jpg" alt="Anime Girl ${num6}">
        //             <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
        //         </div> 
        //     </div>`


        idTheme.outerHTML = `
            <div id="idTheme" class="theme">
                <div class="memory__card" data-framework="animeGirl_${num1}">
                    <img class="front__face_anime" src="./img/animeGirl_${num1}.jpg" alt="Anime Girl ${num1}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num1}">
                    <img class="front__face_anime" src="./img/animeGirl_${num1}.jpg" alt="Anime Girl ${num1}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num2}">
                    <img class="front__face_anime" src="./img/animeGirl_${num2}.jpg" alt="Anime Girl ${num2}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num2}">
                    <img class="front__face_anime" src="./img/animeGirl_${num2}.jpg" alt="Anime Girl ${num2}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num3}">
                    <img class="front__face_anime" src="./img/animeGirl_${num3}.jpg" alt="Anime Girl ${num3}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num3}">
                    <img class="front__face_anime" src="./img/animeGirl_${num3}.jpg" alt="Anime Girl ${num3}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num4}">
                    <img class="front__face_anime" src="./img/animeGirl_${num4}.jpg" alt="Anime Girl ${num4}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num4}">
                    <img class="front__face_anime" src="./img/animeGirl_${num4}.jpg" alt="Anime Girl ${num4}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num5}">
                    <img class="front__face_anime" src="./img/animeGirl_${num5}.jpg" alt="Anime Girl ${num5}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num5}">
                    <img class="front__face_anime" src="./img/animeGirl_${num5}.jpg" alt="Anime Girl ${num5}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num6}">
                    <img class="front__face_anime" src="./img/animeGirl_${num6}.jpg" alt="Anime Girl ${num6}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div>

                <div class="memory__card" data-framework="animeGirl_${num6}">
                    <img class="front__face_anime" src="./img/animeGirl_${num6}.jpg" alt="Anime Girl ${num6}">
                    <img class="back__face_anime" src="./img/suit_${suitNum}.jpg" alt="Memory Card">
                </div> 
            </div>`
        
    // memoryGame.insertAdjacentHTML('beforeend', linkAnimeCards);
    // memoryGame.replaceWith(..."");
    // console.log('memoryGame: ', memoryGame);
    
    // memoryGame.insertAdjacentHTML('beforeend', linkAnimeCards);
    }

    outToScreen(k[0], k[1], k[2], k[3], k[4], k[5], suitNum);
    idTheme = document.querySelector('#idTheme');
};

animeCards();

let cards = document.querySelectorAll('.memory__card');

function cardToFlip(objCard) {
    objCard.forEach(card => {
        card.addEventListener('click', flipCard)

        // card.addEventListener('touchstart', function(event) {
        //     if (event.targetTouches.length == 1) {
        //     let myclick=event.targetTouches[0]; flipCard
        //     }
        // }, false);
    })

}

cardToFlip(cards);

console.log('cards: ', cards);

// function cardToBig(objCard) {
//     function classToCardBig() {
//         this.classList.toggle('big');
//     };

//     objCard.forEach(card => {
//         // card.ondblclick = () => alert('2');
//         // // card.onclick = () => alert('1');
//         // card.onfocus = () => alert('3');
//         // card.oncontextmenu = () => alert('4');

//         card.addEventListener('dblclick', classToCardBig)
//         card.addEventListener('contextmenu', classToCardBig)
//     })};

function cardToBig(objCard) {
    function classToCardBig() {
        this.classList.toggle('big');
    };

    
    objCard.forEach(card => {
        card.addEventListener('dblclick', classToCardBig);
        card.addEventListener('contextmenu', classToCardBig);
    

        // let ldelay;
        // let betw={};
        // card.addEventListener('touchstart', function(event) {
        // event.preventDefault();
        // event.stopPropagation();
        // ldelay=new Date();
        // betw.x=event.changedTouches[0].pageX;
        // betw.y=event.changedTouches[0].pageY;
        // }, false);
        // /*Ловим отпускание пальца*/
        // card.addEventListener('touchend', function(event) {
        // let pdelay=new Date();
        // if(event.changedTouches[0].pageX==betw.x &&
        // event.changedTouches[0].pageY==betw.y &&
        // (pdelay.getTime()-ldelay.getTime())>800){
        //     classToCardBig
        // }
        // }, false);
})};

cardToBig(cards);



// card.addEventListener()
// cards.forEach(card => {
//     card.addEventListener('click', flipCard)
// })

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;



function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}


function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    firstCard.classList.add('open');
    secondCard.classList.add('open');

    resetBoard();
    
    win -= 2;
    if (win == 0) {
        modal.showModal();
    } 
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 900);

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


function shuffle() {
    let q = [1,2,3,4,5,6,7,8,9,10,11,12];
    cards.forEach(card => {
        // let randomPos = Math.floor(Math.random() * 12);
        let randomPos = mathRandom(0, q.length-1);
        // console.log('randomPos: ', randomPos);
        card.style.order = q[randomPos];
        q.splice(randomPos, 1);
        // console.log('card.style.order: ', card.style.order);
    });
};

shuffle();

// function funcWin() {
//     let obj  = document.querySelectorAll('idTheme');
//     if (obj.forEach(card => {
//         card.classList.contains('open')
//     })) {
//         modal.showModal();
//     }
// };


/// if(this.classList.contains('active'))    

// cards.forEach(card => {
//     card.addEventListener('click', flipCard)
// })


btnPlayAgain.onclick = () => {
    hasFlippedCard = false;
    lockBoard = false;


    // clearScreen();

    animeCards();
    win = 12;
    // randomPictures();
    cards = document.querySelectorAll('.memory__card');
    shuffle()
    cardToFlip(cards);
    modal.close();
}


// console.log('memoryGame Text: ', memoryGame.textContent);
// console.log('memoryGame outerHTML: ', memoryGame.outerHTML);



// btnShow.onclick = () => {
//     modal.showModal();
// }

modal.addEventListener('click', ({target}) => {
    if (target.classList.contains('modal')) {
        modal.close();
        // alert('1')
    }
})


// cards.forEach(card => {
//     card.addEventListener('click', ({target}) => {
//         if (!target.classList.contains('container')) {
//             card.classList.remove('big');
//         }
//     })
// })