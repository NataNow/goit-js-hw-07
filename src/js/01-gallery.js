import { galleryItems } from './gallery-items.js';
// Change code below this line

function makeMarkup() {
  let markup = "";
  for (const item of galleryItems) {
    const { preview = "#", original = "#", description = "#" } = item;
    markup += `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </div>`;
  }
  return markup;
}

const modal = {
  gallery: document.querySelector(".gallery"),
  instance: {},

  handleGalleryClick: function (event) {
    event.preventDefault();
    const { target, currentTarget } = event;
    if (currentTarget === target) {
      return;
    }
    const srcImage = target.dataset.source;
    this.createModalImage(srcImage);
    this.showModalImage();
  },

  createModalImage: function (srcImage) {
    this.instance = basicLightbox.create(`<img src="${srcImage}">`, {
      onShow: this.onShowModalImage.bind(this),
      onClose: this.onCloseModalImage.bind(this),
    });
  },

  onShowModalImage: function () {
    document.addEventListener("keydown", this.handleEscapePress);
  },

  onCloseModalImage: function () {
    document.removeEventListener("keydown", this.handleEscapePress);
  },

  handleEscapePress: function (event) {
    if (event.code === "Escape") modal.instance.close();
  },

  renderGalleryMarkup: function (markup) {
    this.gallery.innerHTML = markup;
  },

  showModalImage: function () {
    this.instance.show();
  },
};

modal.renderGalleryMarkup(makeMarkup());
modal.gallery.addEventListener("click", modal.handleGalleryClick.bind(modal));
console.log(galleryItems);



// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. 
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки 
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.