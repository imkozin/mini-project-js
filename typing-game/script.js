const RANDOM_QUOTE_API_URL = 'https://type.fit/api/quotes?limit=1'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
let correct = true

quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')
  arrayQuote.forEach((characterSpan, indx) => {
    const character = arrayValue[indx]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.add('incorrect')
      characterSpan.classList.remove('correct')
      correct = false
    }
  })

  if (correct) renderNewQuote()
})

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data[Math.floor(Math.random() * data.length)].text)
}

async function renderNewQuote() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''

  quote.split('').forEach((char) => {
    const characterSpan = document.createElement('span')

    characterSpan.innerText = char

    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null
  
  startTimer()
}

let startTime

function startTimer() {
    timerElement.innerText = 0

    startTime = new Date()
    setInterval(() => {
        timerElement.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

renderNewQuote()
