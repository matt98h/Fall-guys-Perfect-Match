var fruitSelected = "";
var previousFruit = "";

function selectFruit(fruit){

    // sets the global variable of selected fruit
    previousFruit = fruitSelected
    fruitSelected = fruit

    // adds selected-button class to selected button
    el = document.getElementById(fruit)
    el.classList.add('selected-button')

    // removes selected-button class from previous button
    if (previousFruit != null) {
        el = document.getElementById(previousFruit)
        el.classList.remove('selected-button')
    }
    
}

function writeFruit(box){

    el = document.getElementById(box)
    
    //      <img class="fruit-image" src="./images/Apple.jpeg">
    el.innerHTML = '<img class="fruit-image" src="./images/' + fruitSelected + '.png">'

    console.log(el)
}

function reset(){

    window.location.reload();

}

