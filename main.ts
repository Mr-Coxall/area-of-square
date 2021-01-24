game.splash("We will calculate the area of a square.")
let length = game.askForNumber("Enter length of square (mm):")
let area = length * length
game.splash("The area is " + convertToText(area) + "mm²")
