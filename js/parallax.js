const sea = document.getElementById("sea"),
    undersea = document.getElementById("undersea"),
    dolphin = document.getElementById("dolphin"),
    fish = document.getElementById("fish")

window.addEventListener("scroll", function (event) {
    let position =  window.scrollY
    let positionSea = position/-10
    let positionCoral = position/-12+window.innerHeight - 100
    let positionDolphin = position/-20 + 100
    let positionFish = position/-50+200
    undersea.style.backgroundPositionY = positionCoral + "px"
    sea.style.backgroundPositionY = positionSea + "px"
    dolphin.style.backgroundPositionY = positionDolphin + "px"
    fish.style.backgroundPositionY = positionFish + "px"


})