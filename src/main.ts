import "./style.css";

let image: HTMLImageElement | null = null;
let imageClass: string = "";

document.addEventListener("DOMContentLoaded", () => {
  image = document.querySelector(
    ".main__wrapper__card__content__img.img4"
  ) as HTMLImageElement;
  imageClass = "main__wrapper__card__content__img";
});

// Функция для проверки ширины экрана и изменения изображения
function changeImage() {
  if (image && imageClass) {
    // Проверяем значение глобальной переменной VITE_ENV
    const isProduction = import.meta.env.MODE === "production";
    const isGitHubPages = window.location.hostname === "github.io";

    // Определяем пути к изображениям в зависимости от среды выполнения
    const personImagePath = isProduction && !isGitHubPages
      ? `${import.meta.env.BASE_URL}assets/person-T_AgtS3U.svg`
      : "/src/ui/cards/person.svg";
    const mercedesImagePath = isProduction && !isGitHubPages
      ? `${import.meta.env.BASE_URL}assets/MERCEDES-CnoiOz9r.png`
      : "/src/ui/cards/MERCEDES.png";

    // Проверяем ширину экрана
    if (window.innerWidth >= 1920) {
      // Если ширина экрана больше или равна 1920px, меняем изображение
      image.className = imageClass;
      image.src = personImagePath;
    } else {
      // Иначе возвращаем исходное изображение
      image.className = `${imageClass} img4`;
      image.src = mercedesImagePath;
    }
  }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.onload = changeImage;
window.onresize = changeImage;
