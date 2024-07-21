document.getElementById("button1").addEventListener("click", function() {
    let block = document.getElementById("block-first");
    if (block.style.display === "none") {
        block.style.display = "block"
    } else {
        block.style.display = "none";
    }
});

