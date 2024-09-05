document.addEventListener('DOMContentLoaded', () => {
    const selectButton = document.getElementById('select-button');
    const overlayMenu = document.getElementById('overlay-menu');
    const overlayBackground = document.getElementById('overlay-background');
    const passwordDialog = document.getElementById('password-dialog');
    const submitPasswordButton = document.getElementById('submit-password');
    const cancelPasswordButton = document.getElementById('cancel-password');
    const passwordInput = document.getElementById('password-input');
    
    const drawerMenuDialog = document.getElementById('drawer-menu-dialog');
    const drawer1Dialog = document.getElementById('drawer1-dialog');
    const drawer2Dialog = document.getElementById('drawer2-dialog');
    const paperDialog = document.getElementById('paper-dialog');
    const boxDialog = document.getElementById('box-dialog');
    
    const image = document.getElementById('background-image');
    const moveLeftButton = document.getElementById('move-left');
    const moveRightButton = document.getElementById('move-right');
    
    const closeMenuButton = document.getElementById('close-menu');
    
    const playMusicButton = document.getElementById('play-music');
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');

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
        const isMenuVisible = overlayMenu.style.display === 'block';
        overlayMenu.style.display = isMenuVisible ? 'none' : 'block';
        overlayBackground.style.display = isMenuVisible ? 'none' : 'block'; // Toggle blur background
    });

    closeMenuButton.addEventListener('click', () => {
        overlayMenu.style.display = 'none';
        overlayBackground.style.display = 'none'; // Hide blur background
    });

    playMusicButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicIcon.src = 'sound.png'; // Change icon to sound
        } else {
            backgroundMusic.pause();
            musicIcon.src = 'mute.png'; // Change icon to mute
        }
    });

    // Show password dialog
    const escapeButton = document.querySelector('.menu-escape');
    escapeButton.addEventListener('click', () => {
        passwordDialog.style.display = 'block';
        overlayBackground.style.display = 'block';
    });

    submitPasswordButton.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === "8분당경영고IT과8" || password === "8분당경영고it과8" || password === "8분당경영고It과8") {
            alert("좌물쇠가 열렸습니다!");
            passwordDialog.style.display = 'none';
            overlayBackground.style.display = 'none';
            window.location.href = "win.html"

        } else {
            alert("암호가 틀렸습니다. 다시 시도하세요.");
            passwordInput.value = '';
        }
    });

    cancelPasswordButton.addEventListener('click', () => {
        passwordDialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });

    const openDrawerButton = document.querySelector('#open-drawer');
    openDrawerButton.addEventListener('click', () => {
        drawerMenuDialog.style.display = 'block';
        overlayBackground.style.display = 'block';
    });

    const drawer1Option = document.getElementById('drawer1-option');
    drawer1Option.addEventListener('click', () => {
        drawerMenuDialog.style.display = 'none';
        drawer1Dialog.style.display = 'block';
        overlayBackground.style.display = 'block';
    });

    const drawer2Option = document.getElementById('drawer2-option');
    drawer2Option.addEventListener('click', () => {
        drawerMenuDialog.style.display = 'none';
        drawer2Dialog.style.display = 'block';
        overlayBackground.style.display = 'block';
    });

    const paperButton = document.querySelector('.menu-paper');
    paperButton.addEventListener('click', () => {
        paperDialog.style.display = 'block';
        overlayBackground.style.display = 'block';
    });

    const boxButton = document.querySelector('.menu-box');
    boxButton.addEventListener('click', () => {
        boxDialog.style.display = 'block';
        overlayBackground.style.display = 'block';
    });

    const closeDrawer1Button = document.getElementById('close-drawer1');
    closeDrawer1Button.addEventListener('click', () => {
        drawer1Dialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });

    const closeDrawer2Button = document.getElementById('close-drawer2');
    closeDrawer2Button.addEventListener('click', () => {
        drawer2Dialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });

    const closePaperButton = document.getElementById('close-paper');
    closePaperButton.addEventListener('click', () => {
        paperDialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });

    const closeBoxButton = document.getElementById('close-box');
    closeBoxButton.addEventListener('click', () => {
        boxDialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });

    const closeDrawerMenuButton = document.getElementById('close-drawer-menu');
    closeDrawerMenuButton.addEventListener('click', () => {
        drawerMenuDialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });

    overlayBackground.addEventListener('click', () => {
        overlayMenu.style.display = 'none';
        passwordDialog.style.display = 'none';
        drawerMenuDialog.style.display = 'none';
        drawer1Dialog.style.display = 'none';
        drawer2Dialog.style.display = 'none';
        paperDialog.style.display = 'none';
        boxDialog.style.display = 'none';
        overlayBackground.style.display = 'none';
    });
    
});
