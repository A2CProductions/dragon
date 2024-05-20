document.addEventListener("touchstart", function(event) {
    var dragon = document.getElementById('dragon');
    var currentBottom = parseInt(window.getComputedStyle(dragon).bottom, 10);
    if (currentBottom === 0) {  // Ensures the dragon jumps only if it's at the base level
        dragon.style.bottom = "150px";  // Increase jump height if needed
        setTimeout(function() {
            dragon.style.bottom = "0px";  // Ensures the dragon comes back down
        }, 600);  // Adjust timing to match the jump duration
    }
    event.preventDefault(); // Prevents any default action triggered by the touch
}, {passive: false});

// Existing collision detection code remains the same
setInterval(function() {
    var dragon = document.getElementById('dragon');
    var block = document.getElementById('block');
    var dragonRect = dragon.getBoundingClientRect();
    var blockRect = block.getBoundingClientRect();

    if (blockRect.left < dragonRect.right && blockRect.right > dragonRect.left &&
        blockRect.top < dragonRect.bottom && blockRect.bottom > dragonRect.top) {
        alert('Game Over!');
        block.style.animation = "none";
        block.style.display = "none";
    }
}, 100);
