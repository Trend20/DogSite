// list all dog breeds

const dogBreedsList = document.getElementById('breed-list');


// get all breeds

function getDogBreeds() {


    // list url
    const listUrl = 'https://dog.ceo/api/breeds/list/all';

    // fetch the list from the url

    fetch(listUrl)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);

            // show html data

            parseJsonResponse(json);
        })

    .catch((error) => {
        console.log(error);
    })
}

function parseJsonResponse(json) {


    let breedsData = json.message;


    let breedList = Object.keys(breedsData);

    //reset all the current items in the list if any

    dogBreedsList.innerHTML = " ";

    breedList.forEach((breed) => {

        let breedListItem = `<li>${breed}</li>`

        dogBreedsList.innerHTML += breedListItem;
    })
}

getDogBreeds();




// fetching and displayinng breed images
const breedImageContainer = document.getElementById('breed-image');


// fetch images
function getBreedImages(breedName) {

    // url

    const dogImagesUrl = `https://dog.ceo/api/breed/${breedName}/images`;


    // fetch the images directly from the API
    fetch(dogImagesUrl)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);


            // show image function

            showImages(json);
        })


    // console the error 
    .catch((error) => {
        console.log(error);
    })
}

function showImages(json) {

    let imageList = json.message;

    breedImageContainer.innerHTML = "";

    // loop through the images

    imageList.forEach((image) => {
        breedImageContainer.innerHTML += `<img src="${image}" class="image_container"></image>`
    })
}

dogBreedsList.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName == 'LI') {
        getBreedImages(e.target.innerHTML.trim());
    }
})