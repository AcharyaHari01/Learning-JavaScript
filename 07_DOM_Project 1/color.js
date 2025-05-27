
const buttons = document.querySelectorAll('.button');//// This selects all elements with the class .button and stores them in the buttons variable (a NodeList, like an array). 
const body = document.querySelector('body');//This selects the <body> element of the page so we can later change its background color.

buttons.forEach(function (button) { //This loop goes through each button in the buttons list.
  console.log(button);
  //An Event Listener in JavaScript is a way to run code in response to specific events happening on a web page — like clicking a button, moving the mouse, typing on the keyboard, etc.
  button.addEventListener('click',function(e){ //Adds a click event listener to each button. The e (event object) contains details about the click event
    console.log(e);
    console.log(e.target); //This logs the element that was clicked.

     //For each color (grey, white, blue, yellow, purple), it checks if the clicked element has that ID.

    //If so, it sets body.style.backgroundColor to that ID, which is also a color name.
    
    if (e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
    }
    
    if (e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
    }
    
    if (e.target.id === 'purple'){
        body.style.backgroundColor = e.target.id;
    }

  })
  });
