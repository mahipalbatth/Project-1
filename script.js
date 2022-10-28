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

//wait for dom to be loaded and beer object fetched before button can work
document.addEventListener("DOMContentLoaded", function(){
    //click event listner
    document.getElementById("randomButton").addEventListener("click", randomBeerGenerator);
})


//function that determines how many hours left in the day and suggests a random beer from big beer object
function randomBeerGenerator() {
    // using var instead of const because i want to reassign a value to hours left
    var hoursLeft = new Date();
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