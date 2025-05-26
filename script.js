const categoryImages = {
  pizza: [
    "images/pizza1.jpg",
    "images/pizza2.jpg",
    "images/pizza3.jpg"
  ],
  burger: [
    "images/burger1.jpg",
    "images/burger2.jpg"
  ],
  grill: [
    "images/grill1.jpg",
    "images/grill2.jpg"
  ],
  drinks: [
    "images/drinks1.jpg",
    "images/drinks2.jpg"
  ],
  pitabrod: [
    "images/pitabrod1.jpg",
    "images/pitabrod2.jpg"
  ],
  durum: [
    "images/durum1.jpg",
    "images/durum2.jpg"
  ],
  sides: [
    "images/sides1.jpg",
    "images/sides2.jpg"
  ]
};

const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImages = document.getElementById('popup-images');
const closeBtn = document.getElementById('popup-close');

function openPopup(category) {
  popupTitle.textContent = category.toUpperCase();
  popupImages.innerHTML = '';
  if(categoryImages[category]) {
    categoryImages[category].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = category + ' image';
      popupImages.appendChild(img);
    });
  } else {
    popupImages.textContent = 'No images found.';
  }
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

closeBtn.addEventListener('click', closePopup);

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const category = item.getAttribute('data-category');
    if (category) {
      openPopup(category);
    }
  });
});

