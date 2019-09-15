// Create an array of strings
let topics = ["Orlando", "Florida", "Paris", "France", "Maryland"];

console.log("It's working");

// GIPHY URL

//javascript, jQuery GIPHY URL, which will include a user input search & 10 gif limit
// var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=nf5xbhF78wvJVnNt6j0vQ9XrNgNlkPL9";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log("success got data", response);

// });



function renderButtons() {
    $("#gifBtn").empty();

    for (let i = 0; i < topics.length; i++) {
        console.log("looping was a success");

        let btn = $("<button>");
        btn.attr({
            "class": 'gif',
            "data-name": topics[i]
        });
        btn.text(topics[i]);
        $("#gifBtn").append(btn);
    }
}
// Take the topics array, and create an element to hold new buttons
$("#addGif").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    let gif = $("#gifInput").val().trim();
    // The movie from the textbox is then added to our array
    topics.push(gif);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
});

renderButtons();

// File through the topics array and display buttons on the window

// Click on the buttons to display 10 Gif images w/o movement

// Click on the Gif images to cause movement

// Display Gif rating above the images

// User input takes value and adds to topic array

// Function that takes in topic array 

// Function remakes buttons on page with User input