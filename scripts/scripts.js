document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('background-image');
    const moveLeftButton = document.getElementById('move-left');
    const moveRightButton = document.getElementById('move-right');

    let offsetX = 0; // 이미지의 현재 위치를 추적

    // 왼쪽으로 이동
    moveRightButton.addEventListener('click', () => {
        offsetX -= 100; // 이동 거리 조정
        // 이미지가 화면 왼쪽으로 넘어가지 않도록 조정
        if (offsetX < -(image.clientWidth - window.innerWidth)) {
            offsetX = -(image.clientWidth - window.innerWidth);
        }
        image.style.transform = `translateX(${offsetX}px)`;
    });

    // 오른쪽으로 이동
    moveLeftButton.addEventListener('click', () => {
        offsetX += 100; // 이동 거리 조정
        // 이미지가 화면 오른쪽으로 넘어가지 않도록 조정
        if (offsetX > 0) {
            offsetX = 0;
        }
        image.style.transform = `translateX(${offsetX}px)`;
    });
});
