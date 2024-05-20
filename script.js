document.addEventListener("keydown", function(event) {
    var dragon = document.getElementById('dragon');
    if (event.key === "ArrowUp") {
        if (dragon.style.bottom !== "100px") {
            dragon.style.bottom = "100px";
            setTimeout(function() {
                dragon.style.bottom = "0px";
            }, 500);
        }
    }
});

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
