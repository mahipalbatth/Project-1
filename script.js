console.log("testing beer");

//creating arrays i need from big beer object
const names = [];
const food = [];
const images = [];

//fetching beer object
fetch("https://api.punkapi.com/v2/beers")
.then(function (response) {
    return response.json();
})
.then(function (beers) {
    console.log(beers);

    beers.forEach((beer, i) => {

        //constructing my custom arrays
        names[i] = beer.name;
        food[i] = beer.food_pairing;
        images[i] = beer.image_url;


    });
    console.log("array from foreach", names, food, images);

});


//adding EVENT LISTNERS
//wait for dom to be loaded and beer object fetched before button can work
document.addEventListener("DOMContentLoaded", randomBeerEL);


//Event Listner functions
function randomBeerEL() {

    //click event listner
    document.getElementById("randomButton").addEventListener("click", randomBeerGenerator);
}


//key press event listner
document.addEventListener("keypress", randomMenuEL); 

function randomMenuEL() {

    //generate random index
    const pickedObjectIndex = randomNumberGenerator(names.length);

    //generate text for menu section
    document.getElementById('beerName').innerHTML= 'Serving up some ' + names[pickedObjectIndex] + '?';
    document.getElementById('foodName').innerHTML= 'Well try these foods: ' + food[pickedObjectIndex];
}


//touch event listner
document.addEventListener("ontouchstart", randomArtEL);

function randomArtEL() {
    generateNewArtwork();

}



//function that determines how many hours left in the day and suggests a random beer from big beer object
function randomBeerGenerator() {
    
    let hoursLeft = new Date();
    console.log(hoursLeft, hoursLeft.getHours());
    hoursLeft = 24 - hoursLeft.getHours();

    //get random beer 
    const randomIndex = randomNumberGenerator(names.length);
    const randomBeer = names[randomIndex];

    //construct the message
    document.getElementById("randomBeerSuggestion").innerHTML= "There's only " + hoursLeft + " hour(s) left for today! Mahipal's in the mood for some " +randomBeer +"!";
}

// function that gives a random array index not including the ending index
function randomNumberGenerator(endingIndex) {
    return Math.floor(Math.random() * (endingIndex));
}

//function that generates and updates random image art
function generateNewArtwork() {

    document.getElementById('beerArt').src=images[randomNumberGenerator(images.length)];
    console.log('wana show this', images[randomNumberGenerator(images.length)])
}

