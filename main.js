function preperPairs() {
    const table = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    return shuffle(table);
}

function takeImagetoDIv(table) {
    const tiles = document.querySelectorAll('.memory-card');
    tiles.forEach((element, index) => { //przypisuje elementy div do tablicy
        element.dataset.tile = table[index];
        element.onclick = function () { //
           
            const tileNumbers = element.dataset.tile
         
            
          element.style.backgroundImage = `url(tile_${tileNumbers}.png)`;
          
            isItThisSome(element);}
    

    }
    );
}
function outMousee() {

}
const pairs = preperPairs();
takeImagetoDIv(pairs);

let first = null;
let second = null;
function isItThisSome(elem) {
    if (first === null) {
        first = elem

    } else {
        second = elem
        if (first.dataset.tile === second.dataset.tile) {
            console.log("para");

             setTimeout(()=>{
           first.style.backgroundImage = 'none';
           second.style.backgroundImage = 'none';
           first = null;
            second = null;
              },250  )
        } else {
           setTimeout(()=>{
            first.style.backgroundImage = `url(question-mark.png)`;
            second.style.backgroundImage = `url(question-mark.png)`;
            first = null;
            second = null;
        
        },250  )
        } 
        

    }

}

