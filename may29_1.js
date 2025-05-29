function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generateColor() {
    const color = getRandomColor();
    const colorBtn = document.getElementById("colorBtn");
    colorBtn.style.backgroundColor = color;
    colorBtn.textContent = color;
}