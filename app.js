// DOM CONTENT
const findBtn = document.getElementById('find');

const dogContainer = document.getElementById('dogs');

// ADDING EVENTS

findBtn.addEventListener('click', getApi);

// API
let apiUrl = 'https://dog.ceo/api/breeds/image/random';


async function getApi(url) {
    // Storing response 
    const response = await fetch(apiUrl);

    // Storing data in form of JSON 
    var data = await response.json();
    console.log(data);
}