document.addEventListener("DOMContentLoaded", function () {
  const translateButton = document.getElementById("translateButton");
  const toggleButton = document.getElementById("toggleButton");
  const inputText = document.getElementById("inputText");
  const outputMorse = document.getElementById("outputMorse");
  const playButton = document.getElementById("playButton");

  let isTextToMorse = true;

  // Morse code dictionary
  const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "/",
  };

  // Translate function
  function translateToMorse(text) {
    text = text.toUpperCase();
    let morseText = "";
    for (let i = 0; i < text.length; i++) {
      if (morseCode[text[i]]) {
        morseText += morseCode[text[i]] + " ";
      } else {
        morseText += " ";
      }
    }
    return morseText.trim();
  }

  function translateToText(morse) {
    const morseArray = morse.split(" ");
    let text = "";
    for (let i = 0; i < morseArray.length; i++) {
      for (let key in morseCode) {
        if (morseCode[key] === morseArray[i]) {
          text += key;
          break;
        }
      }
    }
    return text;
  }

  // Event listener for translate button
  translateButton.addEventListener("click", function () {
    const input = inputText.value;

    let outputText = "";
    if (isTextToMorse) {
      outputText = translateToMorse(input);
    } else {
      outputText = translateToText(input);
    }

    outputMorse.textContent = outputText;
  });

  // Event listener for toggle button
  toggleButton.addEventListener("click", function () {
    isTextToMorse = !isTextToMorse;
    if (isTextToMorse) {
      inputText.placeholder = "Enter text...";
      translateButton.textContent = "Translate to Morse";
    } else {
      inputText.placeholder = "Enter Morse code...";
      translateButton.textContent = "Translate to Text";
    }
  });
});
