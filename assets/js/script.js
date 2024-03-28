var numCircles = 9;
var colors = generateRandomColors(numCircles);
var circles = document.querySelectorAll(".circle");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var mediumBtn = document.querySelector("#mediumButton");
var hardBtn = document.querySelector("#hardButton");

easyBtn.addEventListener("click", function(){
	//highlight button to show selected
	hardBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//set number of circles to 3
	numCircles = 3;
	//change colors to 3
	colors = generateRandomColors(numCircles);
	//reset winning color
	pickedColor = randomColorG();
	//change display to show new picked color
	colorDisplay.textContent = pickedColor;
	//loop through 3 circles and reset colors while displaying none for cicles without new reset colors
	for(var i = 0; i < circles.length; i++){
		if(colors[i]){
			circles[i].style.background = colors[i];
		} else {
			circles[i].style.display = "none";
		}
	}
});

mediumBtn.addEventListener("click", function(){
	//highlight button to show selected
	hardBtn.classList.remove("selected");
    mediumBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	//set number of circles to 6
	numCircles = 6;
	//change colors to 6
	colors = generateRandomColors(numCircles);
	//reset winning color
	pickedColor = randomColorG();
	//change display to show new picked color
	colorDisplay.textContent = pickedColor;
	//loop through 3 circles and reset colors while displaying none for cicles without new reset colors
	for(var i = 0; i < circles.length; i++){
		if(colors[i]){
			circles[i].style.background = colors[i];
		} else {
			circles[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numCircles = 9;
	colors = generateRandomColors(numCircles);
	pickedColor = randomColorG();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
		circles[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numCircles);
	//pick a new random color from array
	pickedColor = randomColorG();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of circles
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
	}
	//set winning color highlight back to default
	h1.style.background = "steelblue"; 
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < circles.length; i++) {
	//add initial colors to squares
	circles[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	circles[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}	else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
}

function changeColors(colorz){
	//loop through all circles
	for(var i = 0; i < circles.length; i++){
		//change each color to match given color
		circles[i].style.background = colorz;
	}	
}

function randomColorG(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(genColor){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < genColor; i++){
	// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}