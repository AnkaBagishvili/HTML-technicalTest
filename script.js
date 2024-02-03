document.addEventListener("DOMContentLoaded", function () {
    const priceButtons = document.querySelectorAll('.price_buttons');

    function handleButtonClick(event) {
        const button = event.target;

        button.style.backgroundColor = 'lightseagreen';

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-circle-check';
        icon.style.marginLeft = '5px';
        icon.style.color = 'white';

        button.appendChild(icon);

        button.removeEventListener('click', handleButtonClick);
        button.addEventListener('dblclick', handleButtonDoubleClick);
    }

    function handleButtonDoubleClick(event) {
        const button = event.target;

        button.style.backgroundColor = '';
        button.removeChild(button.querySelector('i.fa-solid.fa-circle-check'));

        button.removeEventListener('dblclick', handleButtonDoubleClick);
        button.addEventListener('click', handleButtonClick);
    }

    priceButtons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });
});

