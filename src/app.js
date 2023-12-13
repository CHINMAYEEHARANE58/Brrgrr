// Write your code on this file. Please don't change the existing code
// unless absolutely needed.
const pattyButton = document.querySelector(".btn-patty");
const cheeseButton = document.querySelector(".btn-cheese");
const tomatoesButton = document.querySelector(".btn-tomatoes");
const onionButton = document.querySelector(".btn-onions");
const lettuceButton = document.querySelector(".btn-lettuce");

const pattyItem = document.getElementById('item1');
const cheeseItem = document.getElementById('item2');
const tomatoItem = document.getElementById('item3');
const onionItem = document.getElementById('item4');
const lettuceItem = document.getElementById('item5');


let cheese = document.getElementById("cheese");
let patty = document.getElementById("patty");
let tomato = document.getElementById("tomato");
let onion = document.getElementById("onion");
let lettuce = document.getElementById("lettuce");


//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  if (state.Patty) {
    patty.style.display = "block";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  if (state.Cheese){
    cheese.style.display = "block";
  }
  else{
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  if (state.Tomatoes){
    tomato.style.display = "block";
  }
  else{
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  if (state.Onions){
    onion.style.display = "block";
  }
  else{
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  if (state.Lettuce){
    lettuce.style.display = "block";
  }
  else{
    lettuce.style.display = "none";
  }
}



function toggleClass(button) {
  button.classList.toggle('active');
}
  
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  toggleClass(pattyButton)
  ingredientsDisplay(state.Patty , pattyItem)
  updatePrice(state.Patty, ingredients.Patty)
  renderAll();
};


document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  toggleClass(cheeseButton)
  ingredientsDisplay(state.Cheese , cheeseItem)
  updatePrice(state.Cheese, ingredients.Cheese)
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  toggleClass(tomatoesButton)
  ingredientsDisplay(state.Tomatoes , tomatoItem)
  updatePrice(state.Tomatoes, ingredients.Tomatoes)
  renderAll();
};


document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  toggleClass(onionButton)
  ingredientsDisplay(state.Onions, onionItem)
  updatePrice(state.Onions, ingredients.Onions)
  renderAll();
};


document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  toggleClass(lettuceButton)
  ingredientsDisplay(state.Lettuce, lettuceItem);
  updatePrice(state.Lettuce, ingredients.Lettuce)
  renderAll();
};

function renderIngredientsBoard() {
  for (let ingredient in state) {
    var Ingredient = document.querySelector(`.${ingredient.toLowerCase()}`);
    
    if (Ingredient !== null) {
      if (state[ingredient]) {
        Ingredient.style.display = "block";
      } 
      else {
        Ingredient.style.display = "none";
      }
    }
  }
}

//Challenge 1 - Add/Remove the class active to the buttons based on state
function toggleClass(pattyButton) {
  pattyButton.classList.toggle("active"); 
}

function toggleClass(cheeseButton) {
  cheeseButton.classList.toggle("active");
}

function toggleClass(tomatoesButton) {
  tomatoesButton.classList.toggle("active");
}

function toggleClass(onionsButton) {
  onionsButton.classList.toggle("active");
}

function toggleClass(lettuceButton) {
  lettuceButton.classList.toggle("active");
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  let totalPrice = wholeWheatBun;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }

  let price = document.getElementById('price-details');
  price.textContent = `INR ${totalPrice}`;
}

function ingredientsDisplay(state, pattyItem) {
  if (!state) {
    pattyItem.style.display = "none";
  } else {
    pattyItem.style.display = "block";
  }
}

function ingredientsDisplay(state, cheeseItem) {
  if (!state) {
    cheeseItem.style.display = "none";
  } else {
    cheeseItem.style.display = "block";
  }
}

function ingredientsDisplay(state, tomatoItem) {
  if (!state) {
    tomatoItem.style.display = "none";
  } else {
    tomatoItem.style.display = "block";
  }
}

function ingredientsDisplay(state, onionItem) {
  if (!state) {
    onionItem.style.display = "none";
  } else {
    onionItem.style.display = "block";
  }
}

function ingredientsDisplay(state, lettuceItem) {
  if (!state) {
    lettuceItem.style.display = "none";
  } else {
    lettuceItem.style.display = "block";
  }
}

var ingredientsPrice = 170;
function updatePrice(state, ingredient) {
  if (state) {
    ingredientsPrice += ingredient;
  } else {
    ingredientsPrice -= ingredient;
  }
  
  var currentOrder = wholeWheatBun + ingredientsPrice;
  document.querySelector(".price-details").innerHTML = "INR " + currentOrder;
}
