"use strict";

function renderChessboard(size) {
    let HTML = '';
    const DOMchessboard = document.querySelector('.chessboard');
    
    for (let r=0; r<size; r++) {
        let cellsHTML = ``;
            
        for (let c=0; c<size; c++) {
            let color = '';
            if ((r+c) % 2 === 0) {
                color = `black`
            }
            else { `white`;
            }
            cellsHTML += `<div class="cell" style="width: ${100/size}%;"></div>`
        }
        HTML = HTML + `<div class="row" style="height:${100/size}%">
            ${cellsHTML}
        </div>`
    }
    
    return DOMchessboard.innerHTML = HTML;
}

renderChessboard(4);

//for (let i=1; i<=max; i++) {
//   HTML += `<div class="number">${i}...</div>`;
//}