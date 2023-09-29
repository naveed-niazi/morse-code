const playButton = document.getElementById("playButton");
let audioContext = null;

// Define Morse code audio patterns for dot (.) and dash (-)
const morseAudioPatterns = {
  ".": [500, 100], // Dot duration: 500 ms, Gap duration: 100 ms
  "-": [1000, 100], // Dash duration: 1000 ms, Gap duration: 100 ms
};

// Function to toggle "Play Morse" button text and functionality
function togglePlayButton(isPlaying) {
  if (isPlaying) {
    playButton.textContent = "Stop Morse";
    playButton.onclick = stopMorseCodeAudio;
  } else {
    playButton.textContent = "Play Morse";
    playButton.onclick = playMorseCode;
  }
}

// Function to stop Morse code audio
function stopMorseCodeAudio() {
  if (audioContext) {
    audioContext.close();
    audioContext = null;
    togglePlayButton(false);
  }
}

// Function to play Morse code audio
function playMorseCodeAudio(morseCode) {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  morseCode.split("").forEach((symbol, index) => {
    if (symbol === ".") {
      audioContext.resume().then(() => {
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sine";
        oscillator.connect(audioContext.destination);
        oscillator.start(index * 1.5); // Add a pause of 0.3 seconds between dots
        oscillator.stop(index * 1.5 + 0.3);
      });
    } else if (symbol === "-") {
      audioContext.resume().then(() => {
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sine";
        oscillator.connect(audioContext.destination);
        oscillator.start(index * 1.5); // Add a pause of 0.3 seconds between dashes
        oscillator.stop(index * 1.5 + 0.6);
      });
    } else if (symbol === " ") {
      // Add a pause of 0.6 seconds between words
      setTimeout(() => {}, 600);
    }
  });

  // Set a timeout to stop the audio after Morse code playback
  setTimeout(() => {
    stopMorseCodeAudio();
  }, morseCode.length * 1500); // Adjust total duration as needed
}

// Function to play Morse code audio
function playMorseCode() {
  const outputText = outputMorse.textContent;

  togglePlayButton(true);

  playMorseCodeAudio(outputText);
}

// Event listener for "Play Morse" button
playButton.addEventListener("click", function () {
  if (playButton.textContent === "Play Morse") {
    playMorseCode();
  } else {
    stopMorseCodeAudio();
  }
});
