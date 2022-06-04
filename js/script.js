const cross = "cross";
const circle = "circle";
const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");
let turn = cross;

resetButton.onclick = startGame;

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

resetButton.addEventListener("click", () => {
  boxElements.forEach((box) => {
    box.classList.remove("cross", "circle");
  });
});
// function placeMark(box){
//     box.classList.add(currentClass);
// }
function startGame() {
  boxElements.forEach((box) => {
    // delete.style.backgroundColor = 'white';
    // box.style.backgroundColor = 'none';
    // placeMark(boxTarget)
    // turn = false
    box.addEventListener("click", handleCLick, { once: true });
  });
}

startGame();
