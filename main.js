const cardsArray = [
  "&#128525;",
  "&#128525;",
  "&#128561;",
  "&#128561;",
  "&#128564;",
  "&#128564;",
  "&#128520;",
  "&#128520;",
  "&#128545;",
  "&#128545;",
  "&#129313;",
  "&#129313;",
];
const shuffledCards = shuffle(cardsArray);
for (let i = 0; i < backs.length; i++) {
  backs[i].innerHTML = shuffledCards[i];
}
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", cardFlipper);
}
function cardFlipper(event) {//needs toggle
  event.stopPropagation();
  if (!event.target.parentElement.classList.contains("flipped")) {
    event.target.parentElement.classList.add("flipped");
    event.target.parentElement.classList.add("unchecked");
    let unchecked = document.querySelectorAll(".unchecked");
    if (unchecked.length == 2) {
      setTimeout(() => {
        checkMatch(unchecked);
      }, 500);
    }
  }
}
function checkMatch(unchecked) {
  if (
    unchecked[0].children[1].innerHTML == unchecked[1].children[1].innerHTML
  ) {
    for (let i = 0; i < unchecked.length; i++) {
      unchecked[i].children[1].classList.add("foundCard");
    }
  } else {
    for (let i = 0; i < unchecked.length; i++) {
      unchecked[i].classList.remove("flipped");
    }
  }
  for (let i = 0; i < unchecked.length; i++) {
    unchecked[i].classList.remove("unchecked");
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
