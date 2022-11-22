import { galleryItems } from './gallery-items.js';
// Change code below this lineimport { galleryItems } from "./gallery-items.js";

function createGaleryMarkup(galleryItems) {
    const markup = galleryItems
      .map(({ preview = "#", original = "#", description = "#" } = {}) => {
        return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
      })
      .join("");
    return markup;
  }
  
  const gallery = document.querySelector(".gallery");
  
  const galleryMarkup = createGaleryMarkup(galleryItems);
  
  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
  
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    animationSlide: false,
    animationSpeed: 500,
    maxZoom: 5,
  });
console.log(galleryItems);


// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
