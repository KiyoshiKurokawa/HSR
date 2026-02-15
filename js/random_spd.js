const relicsSets = {
    "Messenger Traversing Hackerspace": 114,
    "Warrior Goddess of Sun and Thunder": 125,
    "Sacerdos' Relived Ordeal": 121,
    "Diviner of Distant Reach": 130
};

const relicsPieces = {
    head: 0,
    glove: 1,
    chest: 2,
    boots: 3
};

function trocarReliquiaSpd() {
    const pieces = Object.keys(relicsPieces);
    const shuffledPieces = [...pieces].sort(() => Math.random() - 0.5);
    const firstSetPiece = shuffledPieces.slice(0, 2);
    const secondSetPiece = shuffledPieces.slice(2);

    const sets = Object.keys(relicsSets);
    const shuffledSets = [...sets].sort(() => Math.random() - 0.5);
    const set1 = shuffledSets[0];
    const set2 = shuffledSets[1];

    const setNameElement = document.getElementById("set-name");
    setNameElement.classList.add("fade-out");

    setTimeout(() => {
        setNameElement.textContent = `${set1} + ${set2}`;
        setNameElement.classList.remove("fade-out");
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
        const newSrc = `assets/relics/${relicsSets[set1]}_${relicsPieces[part]}.png`;

        reliquiaFade(imgId, newSrc);
    });

    secondSetPiece.forEach(part => {
        const imgId = document.getElementById(part);
        const newSrc = `assets/relics/${relicsSets[set2]}_${relicsPieces[part]}.png`;

        reliquiaFade(imgId, newSrc);
    });
}

setInterval(trocarReliquiaSpd, 8000);

trocarReliquiaSpd();
