const categoriesList = document.querySelectorAll (`#categories .item`);
console.log(`numbers of categories: ${categoriesList.length}`);

categoriesList.forEach(categories => {
    const title = categories.querySelector (`h2`).textContent;
    console.log(`categories: ${title}`);
    const elements = categories.querySelectorAll (`li`).length;
    console.log(`elements; ${elements}`);
})