// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // horn selectors
  const hornDropDown = document.querySelector("#horn-select");
  const hornDisplay = document.querySelector("img:has(~ #horn-select)");
  // audio selectors
  const audio = document.querySelector("audio.hidden");
  const volumeSlider = document.querySelector("#volume-controls > input");
  const volumeDisplay = document.querySelector("#volume-controls > img");
  // button selectors
  const playSoundBtn = document.querySelector("button");
  // confetti
  const jsConfetti = new JSConfetti();

  // Add event listeners
  hornDropDown.addEventListener("change", updateHorn);
  volumeSlider.addEventListener("input", updateVolume);
  playSoundBtn.addEventListener("click", playSound);

  // Update the images and audios when an option is selected
  function updateHorn() {
    hornDisplay.setAttribute("src", `assets/images/${hornDropDown.value}.svg`);
    hornDisplay.setAttribute("alt", `image of ${hornDropDown.value}`);
    audio.setAttribute("src", `assets/audio/${hornDropDown.value}.mp3`);
  }

  // Update the volume when the slider is changed
  function updateVolume() {
    let volumeNum = volumeSlider.value;
    if (volumeNum >= 67) {
      volumeDisplay.setAttribute("src", "assets/icons/volume-level-3.svg");
      volumeDisplay.setAttribute("alt", "Volume level 3");
    } else if (volumeNum >= 33) {
      volumeDisplay.setAttribute("src", "assets/icons/volume-level-2.svg");
      volumeDisplay.setAttribute("alt", "Volume level 2");
    } else if (volumeNum >= 1) {
      volumeDisplay.setAttribute("src", "assets/icons/volume-level-1.svg");
      volumeDisplay.setAttribute("alt", "Volume level 1");
    } else {
      volumeDisplay.setAttribute("src", "assets/icons/volume-level-0.svg");
      volumeDisplay.setAttribute("alt", "Volume level 0");
    }
    audio.volume = volumeNum/100;
  }

  function playSound() {
    if (audio.getAttribute("src")) {
      audio.play();
      if (hornDropDown.value === "party-horn") {
        jsConfetti.addConfetti();
      }
    }
  }
}