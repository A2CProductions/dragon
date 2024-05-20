var lives = 3; // Start with three lives

document.addEventListener("keydown", function(event) {
    var dragon = document.getElementById('dragon');
    if (event.code === "Space") {  // Space bar makes the dragon jump
        var currentBottom = parseInt(window.getComputedStyle(dragon).bottom, 10);
        if (currentBottom === 0) {
            dragon.style.bottom = "150px";
            setTimeout(function() {
                dragon.style.bottom = "0px";
            }, 600);
        }
    }
});

document.addEventListener("touchstart", function(event) {
    var dragon = document.getElementById('dragon');
    var currentBottom = parseInt(window.getComputedStyle(dragon).bottom, 10);
    if (currentBottom === 0) {
        dragon.style.bottom = "150px";
        setTimeout(function() {
            dragon.style.bottom = "0px";
        }, 600);
    }
    event.preventDefault();
}, {passive: false});

setInterval(function() {
    var dragon = document.getElementById('dragon');
    var block = document.getElementById('block');
    var dragonRect = dragon.getBoundingClientRect();
    var blockRect = block.getBoundingClientRect();

    if (blockRect.left < dragonRect.right && blockRect.right > dragonRect.left &&
        blockRect.top < dragonRect.bottom && blockRect.bottom > dragonRect.top) {
        lives -= 1; // Decrement the life count
        if (lives > 0) {
            alert('You lost a life! Lives remaining: ' + lives);
        } else {
            alert('Game Over!');
            block.style.animation = "none";
            block.style.display = "none";
            // Optionally reset the game or reload the page
            // window.location.reload();
        }
    }
}, 100);
