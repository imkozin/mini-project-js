function getPostsInCategory(items, category) {
    return items.filter((item) => item.categories.join(", ").toLowerCase().includes(category.toLowerCase()));
};

function getPostsThatContainTitle(items, title) {
    return items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
};

module.exports = {getPostsInCategory, getPostsThatContainTitle}