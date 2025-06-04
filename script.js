// ==== Musik Otomatis Saat Klik atau Scroll ====
const audio = document.getElementById('audio');
let isPlaying = false;

function playAudio() {
  if (!isPlaying) {
    audio.play()
      .then(() => {
        isPlaying = true;
        console.log("Lagu mulai diputar.");
        document.removeEventListener('click', playAudio);
        document.removeEventListener('scroll', playAudio);
      })
      .catch(err => {
        console.error("Gagal memutar lagu:", err);
      });
  }
}

document.addEventListener('click', playAudio);
document.addEventListener('scroll', playAudio);

// ==== Toggle Menu ====
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}
