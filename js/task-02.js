const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridiendsList = document.querySelector("#ingredients");
ingredients.forEach((elem) => {
const createLi = document.createElement("li");
  createLi.textContent = elem;
  createLi.classList.add("item");
  ingridiendsList.append(createLi);

});

