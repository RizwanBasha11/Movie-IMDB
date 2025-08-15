async function searchMovie() {
    const movieName = document.getElementById("moviename").value.trim();
    const apiKey = "YOUR_API_KEY"; // Get it free from http://www.omdbapi.com/apikey.aspx

    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }

    try {
        const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`);
        const data = await res.json();

        if (data.Response === "False") {
            alert("Movie not found!");
            return;
        }

        // Update HTML elements with API data
        document.getElementById("title").textContent = data.Title || "N/A";
        document.getElementById("director").textContent = data.Director || "N/A";
        document.getElementById("actor").textContent = data.Actors || "N/A";
        document.getElementById("box").textContent = data.BoxOffice || "N/A";
        document.getElementById("awards").textContent = data.Awards || "N/A";
        document.getElementById("writer").textContent = data.Writer || "N/A";
        document.getElementById("ratings").textContent = data.imdbRating || "N/A";
        document.getElementById("genre").textContent = data.Genre || "N/A";
        document.getElementById("released").textContent = data.Released || "N/A";

        document.getElementById("poster").src = data.Poster !== "N/A" ? data.Poster : "no-image.png";
    } catch (error) {
        console.error("Error fetching movie data:", error);
        alert("Something went wrong. Please try again later.");
    }
}
