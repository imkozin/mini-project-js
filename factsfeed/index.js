const Parser = require("rss-parser");
const parser = new Parser();
const url = 'https://thefactfile.org/feed'
const express = require('express');
const app = express();

const {getPostsInCategory, getPostsThatContainTitle} = require('./data/getPosts')

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static('public'))

const PORT = 8000;
app.get('/', renderFeed);
app.get('/search', searchFeed);
app.post('/search/title', searchFeed);
app.post('/search/category', searchFeed);
app.listen(PORT, () => console.log("Listening on port", PORT));

let items = [];

populateItems()
async function populateItems() {
    const feed = await parser.parseURL(url);
    items = feed.items;
    console.log(items[1]);
}

function searchFeed(req, res) {
    res.render('search.ejs', { items });
}

function searchFeed(req, res) {
    console.log("req method", req.method);
    if (req.method === "GET") {
        console.log("This is a GET method, ");
        return res.render('search.ejs', {items: []})
    }
    // const body = req.body;
    const title = req.body['title'];
    console.log("type of title", typeof title);
    const category = req.body['categories'];
    console.log("type of category", typeof category);
    const itemsToReturn = title === "" ? getPostsInCategory(items,category): getPostsThatContainTitle(items, title);
    res.render('index.ejs', { items: itemsToReturn });
}

// function searchFeedTitle(req, res) {
//     const body = req.body;
//     // console.log("body title", body);
//     const title = body?.title;
//     if (title == "") {
//         return res.render('search.ejs', {items})
//     }
//     const itemsToReturn = getPostsThatContainTitle(title);
//     res.render('index.ejs', { items: itemsToReturn });
// }

// function searchFeedCategory(req, res) {
//     const body = req.body;
//     // console.log("body category", body);
//     const category = body?.categories;
//     if (category == "") {
//         return res.render('search.ejs', {items})
//     }
//     const itemsToReturn = getPostsInCategory(category);
//     res.render('index.ejs', { items: itemsToReturn });
// }


function renderFeed(req, res) {
    res.render('index.ejs', { items });
}


// async function sendFeed(req, res) {
//     const feed = await parser.parseURL(url);
//     const title = feed.title;
//     const description = feed.description;
//     const items = feed.items;  
//     res.send({ title, description, items })
// }

// async function run() {  
//   const feed = await parser.parseURL(url);
//   console.log(feed.title);

//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });
// }

// run().catch(err => {
//     console.error(err);
//   });

