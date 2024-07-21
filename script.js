document.getElementById("button1").addEventListener("click", function() {
    let block = document.getElementById("block-first");
    if (block.style.display === "none") {
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
});

let swap = false;

document.getElementById("button2").addEventListener("click", function() {
    let row = document.getElementById("row");
    let block1 = document.getElementById("block2f");
    let block2 = document.getElementById("block2s");

    if (swap) {
        row.insertBefore(block1, block2);
    } else {
        row.insertBefore(block2, block1);
    };

    swap = !swap;
});