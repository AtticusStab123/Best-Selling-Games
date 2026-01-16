var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Culture%20%26%20Entertainment/Best%20Selling%20Video%20Games.csv";

var games = getColumn(url, 1);
var sales = getColumn(url, 2);
var platforms = getColumn(url, 3);
var release = getColumn(url, 4);
var developer = getColumn(url, 5);
var publisher = getColumn(url, 6);
// console.log(games)
// console.log(getTeamsInDivision("Pacific"));

function getGamesonPlatform(chosenGamePlatform){
    var matches = [];
    for(var i = 0; i < platforms.length;i++){
        if(platforms[i] == chosenGamePlatform){
            matches.push(games[i]);
        }
    }
    return matches
}
// console.log(getGamesonPlatform("Multi-platform"));


function getGamesbyPublisher(chosenGamePublisher){
    var matches = [];
    for(var i = 0; i < platforms.length;i++){
        if(publisher[i] == chosenGamePublisher){
            matches.push(games[i]);
        }
    }
    return matches;
}
// console.log(getGamesbyPublisher("Mojang Studios"));



function getGamesbyDate(chosenGameDate){
    var matches = [];
    for(var i = 0; i < platforms.length;i++){
        var year = release[i].substring(release[i].length-5, release[i].length-1)
        // console.log(year);
        if(year >=  chosenGameDate){
            matches.push(games[i]);
        }
    }
    return matches;
}
// console.log(getGamesbyDate(21980));


 // Returns a list of game titles released on a given platform
 
  //@param {string} chosenPlatform // The platform to search for "Wii", "Multi-platform"
  //@returns {Array} // A list of game titles available on that platform
 
function getGamesOnPlatform(chosenPlatform){
    var matches = [];
    if (typeof chosenPlatform !== "string") {
        return matches;
    }

    for (var i = 0; i < platforms.length;i++){
        if (platforms[i].toLowerCase() === chosenPlatform.toLowerCase()){
            matches.push(games[i]);
        }
    }
    return matches;
}

  //Returns a list of games published by a specific publisher
 
  //@param {string} chosenPublisher - Name of the publisher
  //@returns {Array} A list of game titles published by that publisher
 
function getGamesByPublisher(chosenPublisher){
    var matches = [];
    if (typeof chosenPublisher !== "string") {
        return matches;
    }

    for (var i = 0; i < publisher.length;i++){
        if (publisher[i].toLowerCase() === chosenPublisher.toLowerCase()){
            matches.push(games[i]);
        }
    }
    return matches;
}

  //Returns games released on or after a given year
 
  //@param {number} year - The cutoff year
  //@returns {Array} A list of game titles
 
function getGamesAfterYear(year){
    var matches = [];
    if (typeof year !== "number") {
        return matches;
    }

    for (var i = 0; i < release.length;i++){
        var gameYear = parseInt(release[i].substring(release[i].length - 4));
        if (gameYear >= year){
            matches.push(games[i]);
        }
    }
    return matches;
}

// Finds the highest selling game in the dataset
 
  //@returns {string} The title of the highest selling game
 
function getHighestSellingGame(){
    var maxSales = 0;
    var bestGame = "";

    for (var i = 0; i < sales.length;i++){
        var currentSales = Number(sales[i]);
        if (currentSales > maxSales){
            maxSales = currentSales;
            bestGame = games[i];
        }
    }
    return bestGame;
}

  //Returns games that sold more than a given number of copies
 
  //@param {number} minimumSales - Least Sales
  //@returns {Array} List of games exceeding the sales value
 
function getGamesOverSales(minimumSales){
    var matches = [];
    if (typeof minimumSales !== "number") {
        return matches;
    }

    for (var i = 0; i < sales.length;i++){
        if (Number(sales[i]) > minimumSales){
            matches.push(games[i]);
        }
    }
    return matches;
}
