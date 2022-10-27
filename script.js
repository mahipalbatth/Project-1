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
.then(function (bigBeerObject) {
    console.log(bigBeerObject);

    //starting at zero and stoping if my counter becomes bigger than my bigbeer objects length
    for (i=0; i<bigBeerObject.length; i++) {

        //extracting names, food and image from big beer object an creating my own arrays
        names[i] = bigBeerObject [i].name,
        food[i] = bigBeerObject[i].food_pairing;
        images[i] = bigBeerObject[i].image_url;
     }
     console.log("my custom arrys", names, food, images);

});