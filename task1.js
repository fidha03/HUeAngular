document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('buttonContainer');

    for (let i = 1; i <= 31; i++) {
        const button = document.createElement('button');
        button.textContent = `${i}`;
        button.addEventListener('click', () => changeColor(button));
        container.appendChild(button);
    }
});

function changeColor(button) {
    button.style.backgroundColor = '#00FF00';
}
