const cross = "cross";
const circle = "circle";
const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");
let turn = cross;

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function handleCLick(a) {
  const boxTarget = a.target;
  placeMark(boxTarget, turn);
  if (turn === cross) {
    // boxTarget.style.backgroundColor = "yellow";
    turn = circle;
  } else {
    // boxTarget.style.backgroundColor = "blue"
    turn = cross;
  }
}

function startGame() {
  boxElements.forEach((box) => {

    box.addEventListener("click", handleCLick, { once: true });
  });
}

startGame();

resetButton.onclick = startGame;
resetButton.addEventListener("click", () => {
  boxElements.forEach((box) => {
    box.classList.remove("cross", "circle");
  });
});