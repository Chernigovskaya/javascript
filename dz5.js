// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
// т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
// столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)
'use strict';

const chess = {
    gameContainerEl: document.getElementById('chess'),

    renderMap() {
        let rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            let cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
        for (let row = 0; row < 10; row++) {
        const tr = document.createElement('tr');
        this.gameContainerEl.appendChild(tr);
            for (let col = 0; col < 10; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row].toString();
                }
      
                if (this.CellBlack(row, col)) {
                    td.style.backgroundColor = 'black';
                }
            };

        }
    },

    CellBlack(rowNum, colNum) {
        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
          return false;
        }
         return (rowNum + colNum) % 2 === 1;
      },
};

chess.renderMap();
