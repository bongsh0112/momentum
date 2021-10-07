const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg"
];

const IMAGE_LENGTH = images.length;

const chosenImage = images[Math.floor(Math.random() * IMAGE_LENGTH)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);  //prepend는 맨 위에 추가. append는 맨 뒤에 추가.