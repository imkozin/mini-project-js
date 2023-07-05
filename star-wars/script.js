async function getPerson() {
    data.textContent = "";
    let num = getNum();
    console.log('Start fetching...');
    document.getElementById("load").style.display = "flex";
    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${num}`)
        if (response.ok) {
            const personData = await response.json();
            const personName = personData.result.properties.name;
            const personHeight = personData.result.properties.height;
            const personGender = personData.result.properties.gender;
            const personBirth = personData.result.properties.birth_year;
            const personHome = personData.result.properties.homeworld;
            console.log('home', personHome);
            let planetId = /[^/]*$/.exec(personHome)[0];
            // console.log('id', planetId)
            const planet = await getWorld(planetId);
            console.log("From planet", planet);
            document.getElementById("load").style.display = "none";

            const name = document.createElement('p');
            name.setAttribute('id', 'name');

            const height = document.createElement('p');
            height.setAttribute('id', 'height');

            const gender = document.createElement('p');
            gender.setAttribute('id', 'gender');

            const birth = document.createElement('p');
            birth.setAttribute('id', 'birth');

            const home = document.createElement('p');
            home.setAttribute('id', 'home');

            name.textContent = personName;
            height.textContent = "Height: " + personHeight;
            gender.textContent = "Gender: " + personGender;
            birth.textContent = "Birth Year: " + personBirth;
            home.textContent = "Home World: " + planet;

            data.textContent = "";
            data.appendChild(name);
            data.appendChild(height);
            data.appendChild(gender);
            data.appendChild(birth);
            data.appendChild(home);

            // pHome.textContent = "Home World: " + personWorld;
            // displayPerson(personData);
        } else {
            throw new Error ('issue with fetch');
        }
    } catch (error) {
        if (error) {
            displayError();
            console.log('Error occured');
        } else {
            console.log('ERROR', error);
        }
    }
}

async function getWorld(planetId) {
    try {
        const response = await fetch(`https://www.swapi.tech/api/planets/${planetId}`)
        if (response.ok) {
            const personWorld = await response.json();
            const home = personWorld.result.properties.name;
            return home;
        } else {
            throw new Error ('issue with fetch');
        } 
        
    } catch (error) {
        if (error) {
            console.log('person wasn\'t found')
        } else {
            console.log('ERROR', error);
        }
    }
}


function getNum() {
    let num = Math.floor((Math.random() * 83) + 1);
    // console.log("Random number is", num)
    return num
}

const card = document.getElementById('card');
const data = document.getElementById('data');

const btn = document.getElementById('btn');
btn.addEventListener('click', getPerson)


function displayError() {
    const pError = document.createElement('p');
    pError.setAttribute('id', 'error');
    const errorText = document.createTextNode('Oh No! That person isn\'t available.')
    pError.appendChild(errorText)
    card.appendChild(pError)
}

// function displayPerson(personData) {
//     const planet = getWorld();
//     if (personData.message === 'not found') {
//         console.log('Oh No! That person isn\'t available.');
//     } else {
//         const personName = personData.result.properties.name;
//         const personHeight = personData.result.properties.height;
//         const personGender = personData.result.properties.gender;
//         const personBirth = personData.result.properties.birth_year;

//         pName.textContent = personName;
//         pHeight.textContent = "Height: " + personHeight;
//         pGender.textContent = "Gender: " + personGender;
//         pBirth.textContent = "Birth Year: " + personBirth;
//         pHome.textContent = "Home World: " + personWorld;
//     }
// }