const clouds = document.querySelectorAll('.cloud');

function animateClouds() {
    clouds.forEach(cloud => {
        let position = -600;
        function moveCloud() {
            position = position + 2;
            cloud.style.transform = `translateX(${position}px)`;
            if (position > window.innerWidth) {
                position = -700;
            }
            requestAnimationFrame(moveCloud);
        }
        moveCloud();
    });
}

animateClouds();
