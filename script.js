const dayButton = document.getElementById('showDayLight');
const nightButton = document.getElementById('showNightLight');
const earthImage = document.getElementById('myEarth');
const changeImageButton = document.getElementById('changeImage');

dayButton.addEventListener('click', function() {
  changeImage('earthday.png'); // dagsbild
});

nightButton.addEventListener('click', function() {
  changeImage('earthnight.png'); // nattbild
});

changeImageButton.addEventListener('click', function() {
  const userInput = prompt('Skriv "dag" eller "natt" för att byta bild:');
  if (userInput) {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput === 'dag') {
      changeImage('earthday.png');
    } else if (lowerCaseInput === 'natt') {
      changeImage('earthnight.png');
    } else {
      alert('Error, wrong input. Skriv "dag" eller "natt".');
    }
  }
});

function changeImage(imageSrc) {
  earthImage.src = imageSrc;
}
