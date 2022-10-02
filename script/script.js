const memoryGame = document.querySelector('.memory__game');
let cardSuit = 0;

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
</div>`

memoryGame.insertAdjacentHTML('beforeend', linkframeworkCards);
}

function animeCards() {
    cardSuit = 2;
    let linkAnimeCards = `
    <div class="memory__card" data-framework="animeGirl_1">
        <img class="front__face_anime" src="./img/animeGirl_1.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_1">
        <img class="front__face_anime" src="./img/animeGirl_1.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_2">
        <img class="front__face_anime" src="./img/animeGirl_2.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_2">
        <img class="front__face_anime" src="./img/animeGirl_2.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_3">
        <img class="front__face_anime" src="./img/animeGirl_3.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_3">
        <img class="front__face_anime" src="./img/animeGirl_3.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_4">
        <img class="front__face_anime" src="./img/animeGirl_4.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_4">
        <img class="front__face_anime" src="./img/animeGirl_4.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_5">
        <img class="front__face_anime" src="./img/animeGirl_5.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_5">
        <img class="front__face_anime" src="./img/animeGirl_5.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_6">
        <img class="front__face_anime" src="./img/animeGirl_6.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>

    <div class="memory__card" data-framework="animeGirl_6">
        <img class="front__face_anime" src="./img/animeGirl_6.png" alt="Anime Girl">
        <img class="back__face_anime" src="./img/suit.jpg" alt="Memory Card">
    </div>`

    memoryGame.insertAdjacentHTML('beforeend', linkAnimeCards);

    
}

// frameworkCards();
animeCards();

const cards = document.querySelectorAll('.memory__card');

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

    resetBoard();
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
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
};

cards.forEach(card => {
    card.addEventListener('click', flipCard)
})



shuffle();


