$(document).ready(function () {
    console.log("Ready to go!");

    // Create an array of strings
    let topics = ["Apple", "Orange", "Grape", "Banana", "Dragonfruit"];
    console.log("It's working");

    // Function to render topics array items
    function renderButtons() {

        // Removes buttons that do not display topics array items
        $("#gifBtn.panel-body").empty();

        for (let i = 0; i < topics.length; i++) {
            console.log("button was a success");
            // create element for text to display in button
            var btn = $("<button>");
            btn.addClass("gif-btn");
            btn.attr("data-name", topics[i]);
            btn.text(topics[i]);
            $("#gifBtn.panel-body").append(btn);
        }
    };

    // GIPHY URL
    //javascript, jQuery GIPHY URL, which will include a user input search & 10 gif limit
    function displayGif() {

        $("#gif-box").empty();

        var gifName = $(this).attr("data-name");

        $.get("http://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=nf5xbhF78wvJVnNt6j0vQ9XrNgNlkPL9&limit=10")
            .done(function (response) {
                console.log("data is displaying", response);

                // results equals the entire API data
                var results = response.data;

                for (let i = 0; i < results.length; i++) {
                    console.log(results.length);

                    var gifDiv = $("<div>");

                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);

                    var foodImage = $("<img>");
                    foodImage.attr("src", results[i].images.fixed_height_still.url);
                    foodImage.attr("data-still", results[i].images.fixed_height_still.url);
                    foodImage.attr("data-animate", results[i].images.fixed_height.url);
                    foodImage.attr("data-state", "still");
                    foodImage.addClass("move");

                    gifDiv.prepend(p);
                    gifDiv.prepend(foodImage);
                    $("#gif-box").append(gifDiv);
                }
                $(".move").on("click", function () {
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    }
                    else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });
            });
    };

    $("#add-button").on("click", function (event) {
        console.log("click is working");
        event.preventDefault();

        var foodInput = $("#user-input").val();

        $("#user-input").val("");

        if (topics.indexOf(foodInput) === -1) {

            topics.push(foodInput);
            console.log(topics);

            renderButtons();
        }
    });

    renderButtons();

    $(document).on("click", ".gif-btn", displayGif);

});
