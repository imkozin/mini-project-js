quotes = [{
    id : 0,
    author : 'Winston Churchill',
    quote : 'Success is the ability to go from one failure to another with no loss of enthusiasm.'
},
{
    id : 1,
    author : 'Winston Churchill',
    quote : 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
},
{
    id : 2,
    author : 'Winston Churchill',
    quote : 'It\'s not enough that we do our best; sometimes we have to do what\'s required.'
},
{
    id : 3,
    author: 'Winston Churchill',
    quote : 'Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.'
},
{
    id : 4,
    author : 'Franklin D. Roosevelt',
    quote : 'The only limit to our realization of tomorrow will be our doubts of today.'
},
{
    id : 5,
    author : 'Voltaire',
    quote : 'I disapprove of what you say, but I will defend to the death your right to say it.'
},
{
    id : 6,
    author: 'Ilya Tennis',
    quote : 'Impossible is just an opinion.'
}
]

const button = document.querySelector('button');
const block = document.querySelector('.block');
let previousQuote = null;

function showQuote(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomQuote = arr[randomIndex];
        
        if (randomQuote !== previousQuote) {
            const blockQuote = document.createElement('blockquote');
            blockQuote.setAttribute('id', 'quote');
            blockQuote.textContent = randomQuote.quote;
            
            const author = document.createElement('p');
            author.textContent = randomQuote.author;

            block.innerHTML = '';
            block.appendChild(blockQuote);
            block.appendChild(author);
        }
        previousQuote = randomQuote;
}

button.addEventListener('click', () => showQuote(quotes));