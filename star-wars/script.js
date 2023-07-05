async function getPerson() {
    console.log('Start fetching...')
    try {
        const response = await fetch('https://www.swapi.tech/api/people/1')
        if (response.ok) {
            const personData = await response.json();
            console.log(personData);
            displayPerson(personData);
        } else {
            throw new Error ('issue with fetch');
        }
    } catch (error) {
        if (error) {
            displayError();
            console.log('blabla');
        } else {
            console.log('ERROR', error);
        }
    }
}

// getPerson()

const card = document.getElementById('card');
const pName = document.querySelector('#name');
const btn = document.getElementById('btn');
btn.addEventListener('click', getPerson)

function displayPerson(personData) {
    if (personData.message === 'not found') {
        console.log('Oh No! That person isn\'t available.');
    } else {
        const personName = personData.result.properties.name;
        pName.textContent = personName;
    }
}

function displayError() {
    const pError = document.createElement('p');
    pError.setAttribute('id', 'error');
    const errorText = document.createTextNode('Oh No! That person isn\'t available.')
    pError.appendChild(errorText)
    card.appendChild(pError)
}