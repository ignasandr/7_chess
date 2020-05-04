"use strict";

function renderChessboard(size) {
  let HTML = ``;
  const colorList = ['red', 'green', 'blue'];
  const DOMchessboard = document.querySelector('.chessboard');
  for (let r=0; r<size; r++){
      let cellsHTML = ``;
      for (let c=0; c<size; c++){
        cellsHTML += `<div class="cell ${colorList[(c+r) % 3]}" style="width:${100/size}%"></div>`
      }
    HTML += `<div class="row" style="height:${100/size}%">
                  ${cellsHTML}
                  </div>`
    }
  return DOMchessboard.innerHTML = HTML;
}

renderChessboard(8);
