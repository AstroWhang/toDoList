const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list"); 
// use selectorAll because we have multiple items using the same class
const todoItemEls = document.querySelectorAll(".todo__item"); 

function addListItem() {
  todoInputEl.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      console.log("hey you pushed enter!");
    } else {
      console.log('wrong button!');
    }
  })
}

addListItem();