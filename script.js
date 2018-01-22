console.log('ok');



//******************* giving colors for squares ***********************

// Color list
// var colors = [
// 	'rgb(255, 0, 0)',
// 	'rgb(255, 255, 0)',
// 	'rgb(0, 255, 0)',
// 	'rgb(0, 255, 255)',
// 	'rgb(0, 0, 255)',
// 	'rgb(255, 0, 255)',
// ];
var numOfSquares = 6;
// var colors = generateRandomColors(numOfSquares);
var colors = []; // because reset() function will do it
// selecting color, which is picked when page is loaded
// var pickedColor = pickColor();
var pickedColor;  // empty strin because reset() function will do it
// selecting squares
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
// white line after h1
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButton = document.querySelectorAll('.mode');

// Main function. Run's code inside it
init();

function init(){
	// ********** Mode buttons event listeners **********
	setUpModeButtons();
	// ******** Square listeners **************
	setUpSquares();
	// **************** reset() function  ******************
    reset();
}


// // give for each square different color from colors list
// // compare each color with picked color
// for (var  i = 0; i < squares.length; i++){
// 	// add's different colors for squares
// 	squares[i].style.backgroundColor = colors[i];
// 	// add's click listeners
// 	squares[i].addEventListener('click', function(){
		
// 	    // grab color of clicked square
// 	    var clickedColor = this.style.backgroundColor;
// 	    // compare color with picked color
// 	    if (clickedColor === pickedColor){
// 	    	messageDisplay.textContent = 'Correct';
// 	    	changeColor(clickedColor);
// 	    	h1.style.backgroundColor = pickedColor;
// 	    	resetButton.textContent = 'Play Again';

// 	    } else{
// 	    	this.style.backgroundColor = '#232323';
// 	    	messageDisplay.textContent = 'Try Again'


// 	    }
// 	});
// };

// *********** giving color for h1 ******************
// var colorDisplay = document.querySelector('#colorDisplay');
// colorDisplay.textContent = pickedColor; // used in init function

// separate function to make all squares back to the picked color
function changeColor(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++){
		// change color to match given color
		squares[i].style.backgroundColor = color;
	}
};


// separate function for random colors from the color list
function pickColor(){
    // makes random floating number(between 0 and 1, does't include 1)
    // if want intiger use: Math.floor(Math.random()) and multiply bu some
    // bigger integer. Math.floor - chopps the decimal point
	
	// generates random number between 0 and 5. Multiplied with colors.length
	// which is 6, but it will never be 6, because of Math.random doesn't
	// include 1. So number will be 0 to 5, which is good for us. 
	var random = Math.floor(Math.random() * colors.length);
	// returns one of the color from the color list  
	return colors[random];
}

//  separate function for each random color rgb 
function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++){
		// generates random color and push to an array
		arr.push(randomColor());
	}
	// return that array
	return arr;
};

function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ', ' + g + ', ' + b + ')';
}


//  selecting h1, and make it respond to correct color
// var h1 = document.querySelector('h1');

// selecting button and assig (generate new colors to it)

// var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function(){
	// // generate new colors
	// colors = generateRandomColors(numOfSquares);
	// // pick a new color from array 
	// pickedColor = pickColor();
	// // change color display to match picked color
	// colorDisplay.textContent = pickedColor;
	// // change colors of squares
	// for (var  i = 0; i < squares.length; i++){
	//   squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = 'steelblue';
	// messageDisplay.textContent = '';
    // new colors or play again, anywau shoud write new colors.
    // this.textContent = 'New Colors';
    reset();
});
	

//  Switching between Easy and Hard mode
// commented, because mentor showed better way
// var easyBtn = document.querySelector('#easyBtn');
// var hardBtn = document.querySelector('#hardBtn');

// Moved to init function in the beggining
// var modeButton = document.querySelectorAll('.mode');

// for (var i = 0; i < modeButton.length; i++){
// 	modeButton[i].addEventListener('click', function(){
// 		// remove .selected class from both
// 		modeButton[0].classList.remove('selected');
// 		modeButton[1].classList.remove('selected');
// 		// add to this class. And ou have effect when click hard easy
// 		// is changed, and vice versa
// 		this.classList.add('selected');
// 		// shortcut:
// 		this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
// 		// if (this.textContent === 'Easy'){
// 		// 	numOfSquares = 3;
// 		// } else {
// 		// 	numOfSquares = 6;
// 		// }
// 		reset();

// 	})
// }
// helper function
function reset(){
	// generate new colors, depending it is easy or hard game
	colors = generateRandomColors(numOfSquares);
	// Program pick's a new color from  fresh generated array 
	pickedColor = pickColor();
	// change color display(span in h1) to match picked color
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var  i = 0; i < squares.length; i++){
	  squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
	messageDisplay.textContent = '';
    // new colors or play again, anyway shoud write new colors.
    resetButton.textContent = 'New Colors';

    for (var i = 0; i < squares.length; i++){
        // If true (as man as colors exists make it random color)
        if(colors[i]){
        	// to give colors to all six squares
        	squares[i].style.display = 'block'
		    //  for square make random color
		    squares[i].style.backgroundColor = colors[i];
        } else {
        	squares[i].style.display = 'none';
        }
    }

}

// Adding event listeners

// easyBtn.addEventListener('click', function(){
	
// 	hardBtn.classList.remove('selected');
// 	easyBtn.classList.add('selected');
// 	numOfSquares = 3;
// 	// generate only 3 different colors
// 	colors = generateRandomColors(numOfSquares);
// 	// chooses one color from generated 3 new colors
// 	pickedColor = pickColor();
// 	// change display color in the h1 span
// 	colorDisplay.textContent = pickedColor;
	
// 	// changes only first 3 squares colors, and for other 3 
// 	// make invisible style.dispaly = 'none' 
// 	for (var i = 0; i < squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = 'none';
// 		}
// 	};

// });

// hardBtn.addEventListener('click', function(){
	
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	// generate only 3 different colors
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	// chooses one color from generated 3 new colors
// 	pickedColor = pickColor();
// 	// change display color in the h1 span
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		// make squares with 'none' to be visible again with 'block'
// 		squares[i].style.display = 'block';
// 	};
	
// });

// making Easy and Hard mode

// making new random colors, which makes 3 different random colors
//  see above in easyBtn code!!!

// helper function to hide 4,5,6 squares

//  variable which track's in which mode we are (easy or hard)
// var numOfSquares = 6; (need to put this variable in top of the script,
// otherwise, function are called before this variable is set, and bug's
//  occures)

function setUpModeButtons(){
	for (var i = 0; i < modeButton.length; i++){
	    modeButton[i].addEventListener('click', function(){
			// remove .selected class from both
			modeButton[0].classList.remove('selected');
			modeButton[1].classList.remove('selected');
			// add to this class. And ou have effect when click hard easy
			// is changed, and vice versa
			this.classList.add('selected');
			// shortcut:
			this.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
			// if (this.textContent === 'Easy'){
			// 	numOfSquares = 3;
			// } else {
			// 	numOfSquares = 6;
			// }
			reset();
		});
	}
}

function setUpSquares(){
	// give for each square different color from colors list
    // compare each color with picked color
	for (var  i = 0; i < squares.length; i++){
		// add's different colors for squares
		// squares[i].style.backgroundColor = colors[i];
		// add's click listeners
		squares[i].addEventListener('click', function(){
			
		    // grab color of clicked square
		    var clickedColor = this.style.backgroundColor;
		    // compare color with picked color
		    if (clickedColor === pickedColor){
		    	messageDisplay.textContent = 'Correct';
		    	resetButton.textContent = 'Play Again';
		    	changeColor(clickedColor);
		    	h1.style.backgroundColor = pickedColor;

		    } else {
		    	this.style.backgroundColor = '#232323';
		    	messageDisplay.textContent = 'Try Again'
		    }
	    });
    }
}





