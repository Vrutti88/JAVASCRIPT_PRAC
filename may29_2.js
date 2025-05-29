const colors = ["green", "blue", "yellow", "purple", "orange", "teal", "pink", "darkblue", "gray"];
let availableColors = shuffle([...colors]);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateColor() {
    if (availableColors.length === 0) {
        alert("All colors have been used. No more colors to generate.");
        return;
    }

    const color = availableColors.pop();
    document.getElementById("bgclr").style.backgroundColor = color;
}
