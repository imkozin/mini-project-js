const apiKey = '707a0ef10066961b089330f4';
let selectFrom = document.querySelector("#from");
let selectTo = document.querySelector("#to");
let amount = document.querySelector("#amount");
let output = document.querySelector("#output");

async function getCurrencies() {
    console.log('start fetching currencies...');
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
        if (response.ok) {
            const data = await response.json();
            const endpoint = data.supported_codes;
            console.log('Endpoints', endpoint);
            return endpoint;
        } else {
            throw new Error ('issue with fetch');
        }
    } catch (error) {
        if (error) {
            console.log('Error occured');
        } else {
            console.log('ERROR', error);
        }
    }
}

// getCurrencies()

async function convert(convertFrom, convertTo, amount) {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${convertFrom}/${convertTo}/${amount}`)
        if (response.ok) {
            const data = await response.json();
            const result = data.conversion_result;
            return result;
        } else {
            throw new Error('something went wrong');
        }
    } catch (error) {
        if (error) {
            console.log('Error occured');
        } else {
            console.log('ERROR', error);
        }
    }
}

const btn = document.querySelector('button');

btn.addEventListener('click', async function () {
    let amountToCheck = amount.value;
    let conversionResult = await convert(selectFrom.value, selectTo.value, amountToCheck)
    output.textContent = conversionResult;
})

async function addCurrencies() {
    let currencies = await getCurrencies();

    for (let currency of currencies) {
        let optionFrom = document.createElement('option');
        optionFrom.value = currency[0];
        optionFrom.textContent = `${currency[0]} : ${currency[1]}`;
        selectFrom.appendChild(optionFrom);

        let optionTo = document.createElement('option');
        optionTo.value = currency[0];
        optionTo.textContent = `${currency[0]} : ${currency[1]}`;
        selectTo.appendChild(optionTo);
    }
}

// addCurrencies();

async function switchCurrencies() {
    let first = document.querySelector("#from").value;
    let second = document.querySelector("#to").value;

    document.querySelector("#from").value = second;
    document.querySelector("#to").value = first;

    if (output.textContent != '') {
        output.textContent = await convert(first, second, amount.value)
    }
}

// switchCurrencies();