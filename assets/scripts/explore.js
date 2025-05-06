// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  // selectors
  const voiceSelect = document.querySelector("#voice-select");
  const playBtn = document.querySelector("button");
  const ttsArea = document.querySelector("#text-to-speak");
  const ttsDisplay = document.querySelector("img:has(~ #text-to-speak)");
  
  let voices = [];
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playBtn.addEventListener("click", playVoiceSynth);

  // add all browser voice options to the select drop down
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Play TTS
  function playVoiceSynth() {
    if (ttsArea.value) {
      const utterThis = new SpeechSynthesisUtterance(ttsArea.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      utterThis.addEventListener("end", stopTalking, {once: true});
      synth.speak(utterThis);
      ttsDisplay.setAttribute("src", "/assets/images/smiling-open.png");
    }
  }

  function stopTalking() {
    ttsDisplay.setAttribute("src", "/assets/images/smiling.png");
  }
}