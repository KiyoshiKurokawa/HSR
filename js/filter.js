const pathButtons = document.querySelectorAll('.path-filter button');
const elementButtons = document.querySelectorAll('.element-filter button');

const characters = document.querySelectorAll('.char');

let selectedPath = null;
let selectedElement = null;

pathButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedPath = button.dataset.path;
        selectedPath = (clickedPath === selectedPath) ? null : clickedPath;
        pathButtons.forEach (btn => btn.classList.remove('active'));
        if(selectedPath) button.classList.add('active');

        applyFilter();
    });
});

elementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clickedElement = button.dataset.element;
        selectedElement = (clickedElement === selectedElement) ? null : clickedElement;
        elementButtons.forEach (btn => btn.classList.remove('active'));
        if(selectedElement) button.classList.add('active');

        applyFilter();
    });
});

function applyFilter () {
    characters.forEach (char => {
        const innerDiv = char.querySelector('a > div');

        const matchesPath = !selectedPath || innerDiv.classList.contains(selectedPath);
        const matchesElement = !selectedElement || innerDiv.classList.contains(selectedElement);

        if (matchesPath && matchesElement) {
            char.style.display = 'block';
        } else {
            char.style.display = 'none';
        }
    });
}
