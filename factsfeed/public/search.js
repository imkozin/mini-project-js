const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(form);
    const body = {};
    for (const entry of formdata) {
        console.log(entry);
        const [key, value] = entry;
        body[key] = value;
    }
    sendSearch(body);
}

function sendSearch(body) {
    const url = "http://localhost:8000/search/title";
    fetch(url, {
        body: JSON.stringify(body),
        headers: {
            "Content-Type" : "application/json"
        },
        method : "POST"
    })
    .then((res) => res.text())
    .then((html) => {
        document.querySelector('body').innerHTML = html;
    })
    .catch(console.error);
}