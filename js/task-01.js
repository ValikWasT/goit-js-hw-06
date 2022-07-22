// const numberOfCategories =
//   document.querySelectorAll("#categories .item").length;
// console.log("Number of categories: ", numberOfCategories);

// const arrayOfCategories = document.querySelectorAll("#categories .item");

// console.log("Number of categories: ", arrayOfCategories.length);

// const allCategories = [...arrayOfCategories].map((category) => {
//   console.log("Category: ", category.querySelector("h2").textContent);
//   console.log("Elements: ", category.querySelectorAll("li").length);
// });

const arrayOfCategories = document.querySelectorAll("#categories .item");

console.log("Number of categories: ", arrayOfCategories.length);

arrayOfCategories.forEach((category) => {
  console.log("Category: ", category.querySelector("h2").textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
});
