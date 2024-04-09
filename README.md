# ВЁРСТКА ПО МАКЕТУ ИЗ FIGMA

> **Примечание:** Этот проект НЕ требует постоянных обновлений кода.

> **Статус Проекта:**
> 🟩 Актуален.

## 📑Содержание

1. [Цели и Задачи](#-цели-и-задачи)
2. [Скриншоты](#-скриншоты)
3. [Стек технологий](#-стек-технологий)
4. [Установка](#-установка)

---

# ❗ Цели и задачи

Целью данной работы является реализация адаптивной вёрстки по макету из Figma.

---

# 📷 Скриншоты

Вёрстка являестся адаптивной.

Очень маленькие экраны (width: 444px):

![Очень маленькие экраны](https://github.com/Nico-kun123/html-layout-1/assets/77405288/48f201f4-99b6-4c9d-a015-3b508e61ac9f)

Маленькие экраны (width: 600px):

![Маленькие экраны](https://github.com/Nico-kun123/html-layout-1/assets/77405288/ece7e85b-a1e8-49b1-8743-6c9ac7144226)

Средние экраны (width: 900px):

![Средние экраны](https://github.com/Nico-kun123/html-layout-1/assets/77405288/412a5ab3-594d-42a4-9190-60925e7d8ff3)

Большие экраны (width: 1920px):

![Большие экраны](https://github.com/Nico-kun123/html-layout-1/assets/77405288/624f30f8-5a5a-49b7-8c4a-a30af5f83a74)

---

# 💻 Стек технологий

В проекте был использован следующий стек технологий:

- [HTML](https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vite.js](https://vitejs.dev)
- [gh-pages (Github Pages)](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Typescript](https://www.typescriptlang.org)

---

# ⏬ Установка

Клонируем удалённый репозиторий на локальную машину и устанавливаем все необходимые компоненты:

```markdown
git clone https://github.com/Nico-kun123/html-layout-1
cd html-layout-1
npm install
```

Содержание <code>package.json</code>:

```json
{
  "name": "verstka",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "build:preview": "npm run build && npm run preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1",
    "typescript": "^5.2.2",
    "vite": "^5.2.0"
  }
}
```

В проекте есть следующие разделы:

- **devDependencies**: Это пакеты, которые нужны только для разработки и тестирования приложения. Они не будут включены в окончательную сборку приложения.

В проекте есть следующие скрипты:

- **"dev"**. Этот скрипт запускает сервер разработки Vite на локальной машине;
- **"build"**. Этот скрипт используется для сборки проекта для production. Он минимизирует и оптимизирует код для лучшей производительности в production;
- **"preview"**. Этот скрипт предназначен для предварительного просмотра собранного проекта. Он запускает сервер, который позволяет увидеть, как он будет выглядеть и работать в production;
- **"build:preview"**. Этот скрипт запускает 2 других скрипта: "build" и "preview";
- **"deploy"**. Этот скрипт сначала собирает проект, а затем развертывает его на "GitHub Pages".

---

## Автор

Кудрявцев Николай (Электронная почта: nicolay.kudryavtsev@gmail.com)
