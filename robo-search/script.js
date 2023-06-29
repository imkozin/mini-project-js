const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    },
    {
      id: 11,
      name: 'Sasha Bulaeva',
      username: 'Sasha.Bulaeva',
      email: 'Sasha.Bulaeva@hemmersbach.com',
      image: 'https://robohash.org/Sasha'
    },
    {
      id: 12,
      name: 'Ivan Kozin',
      username: 'Ivan.Kozin',
      email: 'Ivan.Kozin@web.com',
      image: 'https://robohash.org/Ivan'
    }
];

const getMain = document.querySelector('#main');
// const message = document.querySelector('#message');

function createCard(myArr) {
    myArr.forEach(robot => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('card');
        getMain.appendChild(newDiv);

        let imageRobot = document.createElement('img');
        imageRobot.src = robot.image;
        newDiv.appendChild(imageRobot);

        let nameRobot = document.createElement('h2');
        nameRobot.textContent = robot.name;
        nameRobot.style.marginLeft = '10px';
        newDiv.appendChild(nameRobot);

        let emailRobot = document.createElement('p');
        emailRobot.textContent = robot.email;
        emailRobot.style.marginLeft = '10px';
        newDiv.appendChild(emailRobot);
    });
};

createCard(robots)

function searchRobot() {
    getMain.innerHTML = '';
    let input = document.querySelector('input');
    let search = input.value.toUpperCase();
    let newArr = robots.filter(robot => robot.name.toUpperCase().includes(search));
    createCard(robots);
    if (newArr.length === 0) {
        message.innerText = 'Sorry, there is no robot with such name!'
    } else {
        message.innerText = '';
    }
   
}