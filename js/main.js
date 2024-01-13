const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

var flag = 0;
var winner = 0;
var turn = document.getElementById("turn");
var result = document.getElementById("result");

const arro = [];
const arrx = [];

document.querySelectorAll(".row").forEach((e, ind) => {
  e.addEventListener("click", () => {
    const box = document.querySelectorAll(".row")[ind];
    function checkclass(){
      if(box.classList.contains("o")){
        return true;
      } else if (box.classList.contains("x")){
        return true;
      } else if (winner != 0){
        return true;
      } else {
        return false;
      }
    };

    if (flag == 0) {
      if(checkclass() == false){
      turn.innerHTML = "Next turn: O";
      box.classList.add("x");
      arrx.push(ind);
      flag = 1;
      for (let i = 0; i < win.length; i++) {
        if (win[i].every((j) => arrx.includes(j))) {
          result.innerHTML= "Player X wins!!";
          winner = 1;
        }
      }
    }
    } else {
      if (checkclass() == false){
      turn.innerHTML = "Next turn: X";
      box.classList.add("o");
      arro.push(ind);
      flag = 0;
      for (let i = 0; i < win.length; i++) {
        if (win[i].every((j) => arro.includes(j))) {
          result.innerHTML= "Player O wins!!";
          winner = 1;
        }
      }
    }
  }
  });
});

document.getElementById("reset").addEventListener('click', function(){
  location.reload();
});