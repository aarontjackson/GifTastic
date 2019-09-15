// Create an array of strings
let topics = ["Orlando", "Florida", "Paris", "France", "Maryland"];

console.log("It's working");

// GIPHY URL
// function displayGif() {

//     let gif = $(this).attr("data-name");
//     //javascript, jQuery GIPHY URL, which will include a user input search & 10 gif limit
$("#gifBtn").on("click", function () {
    var gifImg = $(this).attr("data-name");
    var queryURL = `"https://api.giphy.com/v1/gifs/search?&api_key=nf5xbhF78wvJVnNt6j0vQ9XrNgNlkPL9&q=${gifImg}&limit=3"`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("success got data", response);

        let results = response.data;

        for (let i = 0; i < results.length; i++) {
            console.log("Pictures are loading");
            var imagesDiv = $("<div>");

            let placeImg = $("<img>");
            placeImg.attr("src", results[i].images.fixed_height.url);

            imagesDiv.prepend(placeImg);

        }
    });
});

// Function to render topics array items
function renderButtons() {

    // Removes buttons that do not display topics array items
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
$("#addGif").on("click", function (event) {

    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();

    // This line will grab the text from the input box
    let gifName = $("#gifInput").val().trim();

    // Items from the topics array will be placed on the window as buttons
    topics.push(gifName);
    console.log(topics);

    // calling renderButtons which handles the processing of our topics array
    renderButtons();
});

// $(document).on("click", ".gif", displayGif);

renderButtons();

// File through the topics array and display buttons on the window

// Click on the buttons to display 10 Gif images w/o movement

// Click on the Gif images to cause movement

// Display Gif rating above the images

// User input takes value and adds to topic array

// Function that takes in topic array 

// Function remakes buttons on page with User input