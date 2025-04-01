const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        const color = prompt("Enter a color (name or hex):", "#ff0000");
        if (color) {
            item.style.backgroundColor = color;
        }
    });
});
