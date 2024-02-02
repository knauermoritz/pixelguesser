const text = document.querySelector(".text");
const resetButton = document.querySelector("button");
const leaderbord = document.querySelector(".best");
const buttonBack = document.querySelector(".button-back");
var scrollDistanceElement;
var leaderbordList = [];

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
    leaderbordList.push(difference);
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
document.querySelector(".best").addEventListener("click", () => {
  console.log("click");
  document.querySelector(".backButton").style.display = "block";
  document.querySelector(".best").style.display = "none"; 
  leaderbordList.sort((a, b) => b - a);
  console.log("Beste Versuche: ", leaderbordList);
  
  
});

document.querySelector(".backButton").addEventListener("click", () => {
  document.querySelector(".backButton").style.display = "none";
  document.querySelector(".best").style.display = "block";
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
