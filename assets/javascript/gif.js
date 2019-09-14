// Create an array of strings

let topics = ["Orlando", "Florida", "Paris", "France", "Maryland"];
let newPlaces = [];

console.log(topics);

// GIPHY URL

//javascript, jQuery GIPHY URL, which will include a user input search & 10 gif limit

var xhr = $.get(`"http://api.giphy.com/v1/gifs/search?q=${}&api_key=nf5xbhF78wvJVnNt6j0vQ9XrNgNlkPL9&limit=10"`);
xhr.done(function(data) { console.log("success got data", data); });

 let apiKey = nf5xbhF78wvJVnNt6j0vQ9XrNgNlkPL9;

// Take the topics array, and create an element to hold new buttons

const placeBtn = $("<button>");


// File through the topics array and display buttons on the window

// Click on the buttons to display 10 Gif images w/o movement

// Click on the Gif images to cause movement

// Display Gif rating above the images

// User input takes value and adds to topic array

// Function that takes in topic array 

// Function remakes buttons on page with User input