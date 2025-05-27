const form = document.querySelector('form'); // Selects the form element from the HTML document.

form.addEventListener('submit', function (e) { // Adds an event listener to the form that listens for the 'submit' event.
    e.preventDefault(); // Prevents the default form submission behavior, which would normally refresh the page.

    const weight = parseFloat(document.querySelector('#weight').value); // Gets the value of the input with ID 'weight', converts it to a float.
    const height = parseFloat(document.querySelector('#height').value); // Gets the value of the input with ID 'height', converts it to a float.
    const result = document.querySelector('#results'); // Selects the element with ID 'result' where the BMI will be displayed.

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || height==="" || weight==="")  { // Checks if the weight or height is not a number or less than or equal to zero.
        result.textContent = 'Please enter valid weight and height.'; // Displays an error message if the input is invalid.
    } else {
          const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            //show the result
            result.innerHTML = `<span>${bmi}</span>`;

            if (bmi < 18.5) {
                result.innerHTML += '<p>You are underweight.</p>';
            }   else if (bmi >= 18.5 && bmi < 24.9) {
                result.innerHTML += '<p>You have a normal weight.</p>';
            } else if (bmi >= 25 && bmi < 29.9) {
                result.innerHTML += '<p>You are overweight.</p>';
            } else {
                result.innerHTML += '<p>You are obese.</p>';
            }

        
    }

});

