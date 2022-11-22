import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const markUp = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
       data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join(""); 
// ініціалізація галереї
const gallery = document.querySelector(".gallery");
// добавлення в ДОМ елементів галереї
gallery.insertAdjacentHTML("beforeend", markUp);
// прослуховумо клік
gallery.addEventListener("click", oneImgContenerClick);
// функція попереджає перевантаження строрінки та спрацюванні на клік поза зоною картинки
function oneImgContenerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
// вибір картинки
  const selectedImage = event.target.dataset.source;
  // відкриття модалки
  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`);
  instance.show();
// закритття модалки по Escape
  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}



// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. 
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки 
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.