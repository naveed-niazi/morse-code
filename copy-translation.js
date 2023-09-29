// ----------- COPY CODE ---------------

// Event listener for copy button
const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", function () {
  const outputText = outputMorse.textContent;
  navigator.clipboard.writeText(outputText);
  alert("Copied to the clipboard");
});

// Function to show/hide the copy button
function toggleCopyButtonVisibility() {
  if (outputMorse.textContent && !copyButton.classList.contains("visible")) {
    copyButton.classList.add("visible");
  } else if (!outputMorse.textContent && copyButton.classList.contains("visible")) {
    copyButton.classList.remove("visible");
  }
}

outputMorse.addEventListener("DOMSubtreeModified", toggleCopyButtonVisibility);
