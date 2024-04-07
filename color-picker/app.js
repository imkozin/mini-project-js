const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (e) => {
  e.preventDefault()
  if (e.code.toLowerCase() === 'space') {
    setRandomColors()
  }
})

document.addEventListener('click', (e) => {
  const type = e.target.dataset.type

  if (type === 'lock') {
    console.log(e.target)
    const node =
      e.target.tagName.toLowerCase() === 'i' ? e.target : e.target.children[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
  } else if (type === 'copy') {
    copyToClickBoard(e.target.textContent)
  }
})

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF'
  let color = ''

  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }

  return '#' + color
}

function copyToClickBoard(text) {
  return navigator.clipboard.writeText(text)
}

function setRandomColors(isInitial) {
  const colors = isInitial ? getColorsFromHash() : []

  cols.forEach((col, indx) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock')
    const text = col.querySelector('h2')
    const btn = col.querySelector('button')

    if (isLocked) {
      colors.push(text.textContent)
      return
    }

    const color = isInitial
      ? colors[indx]
        ? colors[indx]
        : chroma.random()
      : chroma.random()

    if (!isInitial) {
      colors.push(color)
    }

    text.textContent = color

    col.style.background = color

    setTextColor(text, color)
    setTextColor(btn, color)
  })

  updateColorsHash(colors)
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()

  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

function updateColorsHash(colors = []) {
  document.location.hash = colors
    .map((col) => {
      return col.toString().substring(1)
    })
    .join('-')
}

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .substring(1)
      .split('-')
      .map((color) => '#' + color)
  }
  return []
}

setRandomColors(true)
