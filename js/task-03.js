const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const makeGalleryItems = (arrayObj) => {
  return arrayObj
    .map(
      (image) => `<li class="gallery__item">
  <img src="${image.url}" alt="${image.alt}" class="gallery__img">
  </li>`
    )
    .join("");
};
const galleryItem = makeGalleryItems(images);
galleryRef.insertAdjacentHTML("afterbegin", galleryItem);

// const list = document.querySelector(".gallery");

// const allEl = [];

// const createOneEl = images.map((image) => {
//   const itemEl = document.createElement("li");
//   const imgEl = document.createElement("img");
//   imgEl.setAttribute("src", image.url);
//   imgEl.setAttribute("alt", image.alt);
//   itemEl.append(imgEl);
//   allEl.push(itemEl);
// });

// list.append(...allEl);
