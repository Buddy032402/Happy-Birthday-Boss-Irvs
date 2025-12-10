const containers = document.querySelectorAll('.container');
const gifts = document.querySelectorAll('.gift-box');

const wrongImg = document.getElementById("wrong-img");
const backBtn = document.getElementById("back-btn");
const video = document.getElementById("birthday-video");
const flame = document.getElementById("flame");
const blowBtn = document.getElementById("blow-btn");

function show(id) {
  containers.forEach(c => c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Gift Logic
gifts.forEach(gift => {
  gift.addEventListener('click', () => {
    const type = gift.dataset.type;

    if (type === 'wrong1') {
      wrongImg.src = 'images/image1.jpg';
      show('wrong-gift');
    }

    if (type === 'wrong2') {
      wrongImg.src = 'images/image2.jpg';
      show('wrong-gift');
    }

    if (type === 'correct') {
      video.src = 'video/birthdaysong.mp4';
      video.load();
      show('video-screen');
      video.play();
    }
  });
});

// Back button
backBtn.addEventListener('click', () => {
  show('gift-selection');
});

// After video
video.addEventListener('ended', () => {
  show('cake-screen');
});

// Blow candle
blowBtn.addEventListener('click', () => {
  flame.style.display = 'none';
  show('final-screen');
});
