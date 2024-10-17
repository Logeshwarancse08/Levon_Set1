// Question 1: Given an array of integers, find the maximum element.


function findMax(arr) {
    // Use Math.max with the spread operator to find the maximum value
    return Math.max(...arr);
}

// Function to handle user input and display the maximum element
function displayMax() {
    // Get the user input as a string
    const input = document.getElementById('userInput').value;

    // Convert the input string into an array of numbers
    const numArray = input.split(',').map(Number); // Split the string by commas and convert each element to a number

    // Check if the input array contains valid numbers
    if (numArray.some(isNaN)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Find the maximum element in the array
    const maxNumber = findMax(numArray);

    // Display the result in the <p> element with id="result"
    document.getElementById("result").innerHTML = "Maximum element: " + maxNumber;
}


// Question 2: Given an array of integers and a target sum, return indices of two numbers such that they add up to the target.


// Two sum function to find the indices of two numbers that add up to the target
function twoSum(arr, target) {
    let map = new Map(); // Create a map to store the indices of array elements

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; // Find the complement for the current element

        // Check if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices
        }

        // Add the current element to the map
        map.set(arr[i], i);
    }

    return null; // If no pair is found, return null
}

// Function to handle user input and display the result
function findTwoSum() {
    // Get the user input for the array and target sum
    const arrayInput = document.getElementById('userArray').value;
    const target = parseInt(document.getElementById('targetSum').value);

    // Convert the array input into an array of numbers
    const numArray = arrayInput.split(',').map(Number);

    // Check for valid input (ensure no NaN values in the array)
    if (numArray.some(isNaN) || isNaN(target)) {
        document.getElementById("result1").innerHTML = "Please enter valid numbers!";
        return;
    }

    // Call the twoSum function to get the indices
    const indices = twoSum(numArray, target);

    // Display the result
    if (indices) {
        document.getElementById("result1").innerHTML = `Indices: [${indices[0]}, ${indices[1]}]`;
    } else {
        document.getElementById("result1").innerHTML = "No two numbers add up to the target sum!";
    }
}

