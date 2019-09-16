$(document).ready(function () {
    console.log("Ready to go!");

    // Create an array of strings
    let topics = ["Apple", "Orange", "Grape", "Banana", "Dragonfruit"];
    console.log("It's working");

    // GIPHY URL
    //javascript, jQuery GIPHY URL, which will include a user input search & 10 gif limit
    $("button").on("click", function() {

        var gifImg = $(this).attr("data-name");

        // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifImg + "&api_key=" + apiKey + "&limit=5";

        $.get("http://api.giphy.com/v1/gifs/search?q=" + gifImg + "&api_key=nf5xbhF78wvJVnNt6j0vQ9XrNgNlkPL9&limit=5")
            .then(function (response) {
            console.log("data is displaying");

            var results = response.data;
        
            for (let i = 0; i < results.length; i++) {
                console.log(results.length);

                renderButtons();

                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                    var gifDiv = $("<div>");

                    var ratingVal = $("<p>").text("Rating: " + results[i].rating);

                    var foodImage = $("<img>");

                    foodImage.attr("src", results[i].images.fixed_height_still.url);

                    gifDiv.append(ratingVal);
                    gifDiv.append(foodImage);
                    $("#gif-box").prepend(gifDiv);
                }
            }
        });
    });


    // Function to render topics array items
    function renderButtons() {

        // Removes buttons that do not display topics array items
        $("#gifBtn").empty();

        for (let i = 0; i < topics.length; i++) {
            console.log("button was a success");

            var btn = $("<button>");
            btn.addClass("gif-btn");
            btn.attr("data-name", topics[i]);
            btn.text(topics[i]);
            $("#gifBtn").append(btn);
        }

    }
    // Take the topics array, and create an element to hold new buttons
    $("#addGif").on("click", function (event) {

        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // This line will grab the text from the input box
        var gifVal = $("#gifInput").val().trim();

        // Items from the topics array will be placed on the window as buttons
        topics.push(gifVal);

        // calling renderButtons which handles the processing of our topics array
        renderButtons();
    });

    // $(document).on("click", ".gif-btn", displayGif);

    renderButtons();
  

});
