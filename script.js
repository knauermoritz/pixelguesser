const text = document.querySelector(".text");
const resetButton = document.querySelector("button");
var goal;
var scrolled = false;

setGoal();

document.addEventListener("scrollend", (event) => {
  if (!scrolled && window.scrollY != 0) {
    const scrollDistanceElement = document.createElement("p");
    const scrollDistance = window.scrollY;
    const difference = Math.abs(goal - scrollDistance);
    let resultText = 'Fast';
    if (difference < 300) {
			document.getElementById('fireworks').classList.remove('hide')
      resultText = 'Super, sie sind sehr nah dran';
      document.getElementById('fireworks').classList.remove('hide')
    }

    scrollDistanceElement.innerHTML = `${resultText}. Sie haben ${scrollDistance} px gescrollt und sind ${difference} px entfernt`;
    resetButton.classList.remove("hide");
    text.appendChild(scrollDistanceElement);
    scrolled = true;
  }
})

resetButton.addEventListener("click", () => {
  text.innerHTML = "";
  setGoal();
  document.getElementById('fireworks').classList.add('hide')
});

function setGoal() {
  goal = Math.floor(Math.random() * 10000)
  const goalElement = document.createElement("p");
  goalElement.innerHTML = `Das Ziel ist, es ${goal} Pixel zu scrollen`;
  text.appendChild(goalElement);
  resetButton.classList.add("hide");
  scrolled = false;
  window.scrollTo(0, 0);
}