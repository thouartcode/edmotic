const pieceOfYourHeart = new Audio();
pieceOfYourHeart.src = "/assets/tracks/piece_of_your_heart.mp3";
const loseControl = new Audio();
loseControl.src = "/assets/tracks/lose_control.mp3";

let currentSong = undefined;

function playSong(ev) {
  if (currentSong !== undefined) {
    eval(currentSong).pause();
    eval(currentSong).currentTime = 0;
  }

  let name = ev.target.alt; // Piece of your heart
  name = name.toLowerCase().split(" "); // piece of your heart
  let i = 0;
  let newName = name
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
  currentSong = newName;
  eval(newName).play();
}
