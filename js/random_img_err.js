const ornsSets = {
    "Sprightly Vonwacq": 308,
    "Penacony, Land of the Dreams": 312,
    "Lushaka, the Sunken Seas": 317
};

const ornsPieces = {
    sphere: 0,
    rope: 1
};

function trocarReliquiaErr() {
    const pieces = Object.keys(ornsPieces);
    const shuffledPieces = [...pieces].sort(() => Math.random() - 0.5);
    const firstSetPiece = shuffledPieces.slice(0, 2);
    const secondSetPiece = shuffledPieces.slice(2);

    const sets = Object.keys(ornsSets);
    const shuffledSets = [...sets].sort(() => Math.random() - 0.5);
    const set1 = shuffledSets[0];
    const set2 = shuffledSets[1];

    const ornNameElement = document.getElementById("orn-name");
    ornNameElement.classList.add("fade-out");

    setTimeout(() => {
        ornNameElement.textContent = `${set1}`;
        ornNameElement.classList.remove("fade-out");
    }, 300);

    function reliquiaFade(imgElement, newSrc) {
        imgElement.classList.add("fade-out");

    setTimeout(() => {
        imgElement.src = newSrc;
        imgElement.onload = () => {
            imgElement.classList.remove("fade-out");
        };
    }, 300);
}

    firstSetPiece.forEach(part => {
        const imgId = document.getElementById(part);
        const newSrc = `assets/relics/${ornsSets[set1]}_${ornsPieces[part]}.png`;

        reliquiaFade(imgId, newSrc);
    });

    secondSetPiece.forEach(part => {
        const imgId = document.getElementById(part);
        const newSrc = `assets/relics/${ornsSets[set2]}_${ornsPieces[part]}.png`;

        reliquiaFade(imgId, newSrc);
    });
}

setInterval(trocarReliquiaErr, 8000);

trocarReliquiaErr();