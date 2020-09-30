/***************************AUDIOS*******************************************/
const pieceOfYourHeart = new Audio();
const loseControl = new Audio();
const falling = new Audio();
const blahBlahBlah = new Audio();
const tenFeetTall = new Audio();
const bellaCiao = new Audio();

pieceOfYourHeart.src = "js/audios/piece_of_your_heart.mp3";
loseControl.src = "js/audios/lose_control.mp3";
falling.src = "js/audios/falling.mp3";
blahBlahBlah.src = "js/audios/blah_blah_blah.mp3";
tenFeetTall.src = "js/audios/ten_feet_tall.mp3";
bellaCiao.src = "js/audios/bella_ciao.mp3";

/****************************************************************************/

const elements = {
  weeklyList: document.querySelector(".weekly__list"),
  papl: document.querySelector(".player__mc--holder"),
  paplBtn: document.querySelector(".player__mc--papl"),
};

let currentSong = undefined; // Currently playing song

const songs = {
  pieceOfYourHeart: {
    name: "Piece of your heart",
    artist: "Meduza ft. Goodboys",
    imagePath: "/img/piece_of_your_heart.jpg",
  },
  loseControl: {
    name: "Lose Control",
    artist: "Meduza ft. Becky Hill and Goodboys",
    imagePath: "/img/lose_control.jpg",
  },
  falling: {
    name: "Falling",
    artist: "Alesso",
    imagePath: "/img/falling.jpg",
  },
  blahBlahBlah: {
    name: "Blah Blah Blah",
    artist: "Armin van Buuren",
    imagePath: "/img/blah_blah_blah.jpg",
  },
  tenFeetTall: {
    name: "Ten Feet Tall",
    artist: "Afrojack ft. Wrabel",
    imagePath: "/img/ten_feet_tall.jpg",
  },
  bellaCiao: {
    name: "Bella Ciao",
    artist: "Hardwell ft. Maddix",
    imagePath: "/img/bella_ciao.jpg",
  },
};

// Play Song and stop the current if another is played
function playSong(e) {
  if (currentSong !== undefined) {
    eval(currentSong).pause();
    eval(currentSong).currentTime = 0;
  }

  let songName = e.target.alt.toLowerCase().split(" ");

  let i = 0;
  let newSongName = songName
    .map((el) => {
      if (i === 0) {
        i++;
        return el;
      } else {
        el = el.charAt(0).toUpperCase() + el.slice(1);
        return el;
      }
    })
    .join("");
  currentSong = newSongName;
  eval(newSongName).play();
  renderButtons();
}

// Render the songs to the UI
function renderUI() {
  Object.keys(songs).forEach((el) => {
    renderCard(songs[el]);
  });
}

function renderCard(doc) {
  const html = `
    <li class="weekly__list--1 song__card">
      <div class="song__card--cover" onclick="playSong(event)">
        <img src=".${doc.imagePath}" alt="${
    doc.name
  }" class="song__card--image">
      </div>
      <div class="song__card--name">${formatText(doc.name)}</div>
      <div class="song__card--artist">${doc.artist}</div>
    </li>
  `;
  elements.weeklyList.insertAdjacentHTML("beforeend", html);
}

// Format name
function formatText(text) {
  let newText = text.split("");
  if (newText.length > 13) {
    newText = newText.slice(0, 12);
    newText = newText.join("");
    return newText + "...";
  }
  return text;
}

// Render buttons
function renderButtons() {
  let html;
  if (eval(currentSong) !== undefined) {
    elements.papl.innerHTML = "";
    html = `<use xlink:href="./img/sprite.svg#icon-pause" class="player__mc--glyph">`;
  } else {
    elements.papl.innerHTML = "";
    html = `<use xlink:href="./img/sprite.svg#icon-play" class="player__mc--glyph">`;
  }
  elements.papl.insertAdjacentHTML("afterbegin", html);
}

// Event listeners
function setupEventListeners() {
  elements.paplBtn.addEventListener("click", () => {
    if (eval(currentSong).paused) {
      eval(currentSong).play();
    } else {
      eval(currentSong).pause();
    }
  });
}

function init() {
  renderUI();
  renderButtons();
  setupEventListeners();
}
init();
