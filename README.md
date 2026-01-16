# Best-Selling-Games

### Returns a list of game titles released on a given platform
#### @param {string} chosenPlatform -- The platform to search for "Wii", "Multi-platform"
#### @returns {Array} -- A list of game titles available on that platform
**` function getGamesOnPlatform(chosenPlatform) `**
#
### Returns a list of games published by a specific publisher
#### @param {string} chosenPublisher - Name of the publisher
#### @returns {Array} A list of game titles published by that publisher
**` function getGamesByPublisher(chosenPublisher) `**
#
### Returns games released on or after a given year
#### @param {number} year - The cutoff year
#### @returns {Array} A list of game titles
**` function getGamesAfterYear(year) `**
#
### Finds the highest selling game in the dataset
#### @returns {string} The title of the highest selling game
**` function getHighestSellingGame `**
#
### Returns games that sold more than a given number of copies.
#### @param {number} minimumSales - Least Sales
#### @returns {Array} List of games exceeding the sales value
**` function getGamesOverSales(minimumSales) `**
