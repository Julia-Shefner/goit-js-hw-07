const categories = document.querySelectorAll("#categories li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(item => {
const title = item.querySelector('h2').textContent;
const elQuantity = item.querySelectorAll('ul li').length;
console.log(`Category: ${title}`);
console.log(`Elements: ${elQuantity}`);
});