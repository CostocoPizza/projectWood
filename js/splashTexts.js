var splashTextsList = [
    "Skibidi Toilet",
    "Costco Best",
    "UwW",
    "OwO",
    "100% Skidded",
    "Best skid on the web"
]
var randomSplashIndex = Math.floor(Math.random() * splashTextsList.length);
var randomSplashText = splashTextsList[randomSplashIndex];
console.log(splashTextsList)
document.write("<h1>" + randomSplashText + "</h1>");
