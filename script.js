console.log("testing beer");


const names = [];
const food = [];
const images = [];


fetch("https://api.punkapi.com/v2/beers")
.then(function (response) {
    return response.json();
})
.then(function (beers) {
    console.log(beers);

    beers.forEach((beer, i) => {

        
        names[i] = beer.name;
        food[i] = beer.food_pairing;
        images[i] = beer.image_url;


    });
    console.log("array from foreach", names, food, images);

});


//adding EVENT LISTNERS

document.addEventListener("DOMContentLoaded", callEventListeners);

function callEventListeners() {

    
    document.getElementById("randomButton").addEventListener("click", randomBeerGenerator);

    
    document.addEventListener("keypress", randomMenuGenerator); 

    
    document.getElementById("beerArt").addEventListener("touchstart", generateNewArtwork);


}

 
function randomMenuGenerator() {

    
    const pickedObjectIndex = randomNumberGenerator(names.length);

   
    document.getElementById('beerName').innerHTML= 'Serving up some ' + names[pickedObjectIndex] + '?';
    document.getElementById('foodName').innerHTML= 'Well try these foods: ' + food[pickedObjectIndex];
}



function randomBeerGenerator() {
    
    let hoursLeft = new Date();
    console.log(hoursLeft, hoursLeft.getHours());
    hoursLeft = 24 - hoursLeft.getHours();

   
    const randomIndex = randomNumberGenerator(names.length);
    const randomBeer = names[randomIndex];

    
    document.getElementById("randomBeerSuggestion").innerHTML= "There's only " + hoursLeft + " hour(s) left for today! Mahipal's in the mood for some " +randomBeer +"!";
}


function randomNumberGenerator(endingIndex) {
    return Math.floor(Math.random() * (endingIndex));
}


function generateNewArtwork() {

    
    document.getElementById('beerArt').src=images[randomNumberGenerator(images.length)];
    console.log('wana show this', images[randomNumberGenerator(images.length)])
    
}

