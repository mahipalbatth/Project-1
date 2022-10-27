console.log("testing beer");
fetch("https://api.punkapi.com/v2/beers")
.then(function (response) {
    return response.json();
})
.then(function (bigBeerObject) {
    console.log(bigBeerObject)
});