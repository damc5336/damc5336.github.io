const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const imageList = [
  { src: 'picture1.jpeg', alt: 'Image 1' },
  { src: 'picture2.jpg', alt: 'Image 2' },
  { src: 'picture3.jpg', alt: 'Image 3' },
  { src: 'picture4.jpg', alt: 'Image 4' },
  { src: 'picture5.jpg', alt: 'Image 5' }
];

imageList.forEach(img => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', img.src);
  newImage.setAttribute('alt', img.alt);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', img.src);
    displayedImage.setAttribute('alt', img.alt);
  });
});
