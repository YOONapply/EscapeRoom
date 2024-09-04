document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('background-image');
    const moveLeftButton = document.getElementById('move-left');
    const moveRightButton = document.getElementById('move-right');
    const selectButton = document.getElementById('select-button');
    const overlayMenu = document.getElementById('overlay-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const overlayBackground = document.getElementById('overlay-background');

    let offsetX = 0;

    moveRightButton.addEventListener('click', () => {
        offsetX -= 100;
        if (offsetX < -(image.clientWidth - window.innerWidth)) {
            offsetX = -(image.clientWidth - window.innerWidth - 10);
        }
        image.style.transform = `translateX(${offsetX}px)`;
    });

    moveLeftButton.addEventListener('click', () => {
        offsetX += 100;
        if (offsetX > 0) {
            offsetX = 0;
        }
        image.style.transform = `translateX(${offsetX}px)`;
    });

    selectButton.addEventListener('click', () => {
        if (overlayMenu.style.display === 'block') {
            overlayMenu.style.display = 'none';
            overlayBackground.style.display = 'none'; // Hide blur background
        } else {
            overlayMenu.style.display = 'block';
            overlayBackground.style.display = 'block'; // Show blur background
        }
    });

    closeMenuButton.addEventListener('click', () => {
        overlayMenu.style.display = 'none';
        overlayBackground.style.display = 'none'; // Hide blur background
    });
});
