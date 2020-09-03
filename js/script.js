// declaring global variables
var fruitSelected = "apple";
var previousFruit = "apple";

// this function waits for a fruit selection button to be pressed, then saves the selection to fruitSelected
function selectFruit(fruit){

    // sets the global variable of selected fruit
    previousFruit = fruitSelected
    fruitSelected = fruit

    // removes selected-button class from previous button
    el = document.getElementById(previousFruit)
    el.classList.remove('selected-button')

    // adds selected-button class to selected button
    el = document.getElementById(fruit)
    el.classList.add('selected-button')
    
}

// gets current fruitSelected and adds image to clicked box
function writeFruit(box){

    if(fruitSelected === ""){
        return;
    }

    el = document.getElementById(box)
    
    el.innerHTML = '<img class="fruit-image" src="./images/' + fruitSelected + '.png">'

}

// gets all grid boxes and removes HTML content
function reset(){

    el = document.getElementsByClassName('box')

    for (var i = 0; i < el.length; i++){
        el[i].innerHTML = ''
    }

}

