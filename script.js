const chessBoard = document.querySelector("#chessboard");
const spanWidth = document.querySelector("#width");
const spanHeight = document.querySelector("#height");
const resetBtn = document.querySelector("#reset");

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let numbersOffset = 8;

for (let row = 0; row < 8; row++) {
  const chessRow = document.createElement("div");
  chessRow.classList.add("chess-row");
  const number = document.createElement("span");
  number.classList.add(
    "number",
    numbersOffset % 2 === 0 ? "dark-text" : "light-text"
  );
  number.textContent = numbersOffset;
  numbersOffset--;
  for (let column = 0; column < 8; column++) {
    const chessCell = document.createElement("div");
    chessCell.classList.add(
      (row + column) % 2 === 0 ? "light-cell" : "dark-cell",
      "cell"
    );

    chessCell.addEventListener("click", () => {
      chessCell.classList.toggle("selected");
    });

    window.addEventListener("keypress", (ev) => {
      const { offsetWidth, offsetHeight } = chessCell;
      if (ev.key === "+") {
        const width = offsetWidth < 110 ? offsetWidth + 10 : offsetWidth;
        const height = offsetWidth < 110 ? offsetHeight + 10 : offsetHeight;
        spanHeight.textContent = height;
        spanWidth.textContent = width;
        chessCell.style.width = `${width}px`;
        chessCell.style.height = `${height}px`;
      } else if (ev.key === "-") {
        const width = offsetWidth > 50 ? offsetWidth - 10 : offsetWidth;
        const height = offsetWidth > 50 ? offsetHeight - 10 : offsetHeight;
        spanHeight.textContent = height;
        spanWidth.textContent = width;
        chessCell.style.width = `${width}px`;
        chessCell.style.height = `${height}px`;
      }
    });

    resetBtn.addEventListener("click", () => {
      spanHeight.textContent = 100;
      spanWidth.textContent = 100;
      chessCell.style.width = `${100}px`;
      chessCell.style.height = `${100}px`;
    });

    const letter = document.createElement("span");
    letter.classList.add(
      "number",
      "letter",
      (row + column) % 2 === 0 ? "dark-text" : "light-text"
    );
    letter.textContent = letters[column];

    if (column === 0) chessCell.appendChild(number);
    if (row === 7) chessCell.appendChild(letter);
    chessRow.appendChild(chessCell);
  }
  chessBoard.appendChild(chessRow);
}
