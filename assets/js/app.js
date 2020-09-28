const pieceOfYourHeart = new Audio();
pieceOfYourHeart.src = "/assets/tracks/piece_of_your_heart.mp3";
const loseControl = new Audio();
loseControl.src = "/assets/tracks/lose_control.mp3";

let currentSong = undefined; // Currently playing song

const songs = {
  pieceOfYourHeart: {
    name: "Piece of your heart",
    artist: "Meduza ft. Goodboys",
    imagePath: "/assets/img/piece_of_your_heart.jpg",
  },
  loseControl: {
    name: "Lose Control",
    artist: "Meduza ft. Becky Hill and Goodboys",
    imagePath: "/assets/img/lose_control.jpg",
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
}

// Render the songs to the UI
function renderUI() {
  Object.keys(songs).forEach((el) => {
    let newSong = el;
    console.log(songs[el]);
  });
}

function renderCard(document) {
  const html = `
    <li class="weekly__list--1 song__card">
      <div class="song__card--cover" onclick="playSong(event)">
        <img src="${document.imagePath}" alt="${document.name}" class="song__card--image">
      </div>
      <div class="song__card--name">${document.name}</div>
      <div class="song__card--artist">${document.artist}</div>
    </li>
  `;
}

// 1. Loop through the object and find the songs
// 2. Create the HTML and insert in into the DOM

function init() {
  renderUI();
}
init();
