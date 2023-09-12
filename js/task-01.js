const allItems = document.querySelectorAll(".item");
const result = allItems.length;
console.log(`Number of categories: ${result}`);

allItems.forEach((elem) => {
    let title = elem.querySelector("h2").textContent;
    let tagLi = elem.querySelectorAll("li");
    let resultTag = tagLi.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${resultTag}`);

});