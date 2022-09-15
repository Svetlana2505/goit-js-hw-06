const elemEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories:${elemEl.length}`);

elemEl.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
});
