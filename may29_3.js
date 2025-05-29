
const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
];

let index = 0;
const imageEl = document.getElementById('slideImage');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

function showImage() {
    imageEl.src = images[index];
}

leftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    index = (index - 1 + images.length) % images.length;
    showImage();
});

rightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    index = (index + 1) % images.length;
    showImage();
});

// Initialize
showImage();