function getRandomImage() {
    const imageFolder = 'img/';
    const totalImages = 9;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return `${imageFolder}${randomIndex}.jpeg`;
}

const imgElement = document.getElementById('randomImage');
imgElement.src = getRandomImage();

const button = document.getElementById('reloadImage');
button.addEventListener('click', () => {
    imgElement.src = getRandomImage();
});