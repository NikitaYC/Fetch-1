let searchInput = document.getElementById("searchInput");
let movieDetails = document.getElementById("movieDetails");

function searchMovie(){
    let movieTitle = searchInput.ariaValueMax.trim();
}

if(movieTitle !== ""){
    let movieData = await fetchMovieData(movieTitle);

    if(movieData.Response === "True"){
        displayMovieData(movieData)
    }
    else{
        movieDetailsDiv.textContent = `No movie found with title ${movieTitle}`
    }
}
else{
    movieDetailsDiv.textContent =`Please enter a movie title`
}

function fetchMovieData(title){
    let apiurl = "http://img.omdbapi.com/?apikey=[yourkey]&"

    try{
        let response =  fetch(apiurl);
        let data = response.json();
        return data;
    }
    catch(error){
        console.log(`error fetching movie data: `, error);
        return{ Response: "False"};
    }
}
function displayMovieData(data) {
    const movieDetailsDiv = document.getElementById('movieDetails');
    movieDetailsDiv.innerHTML = `
        <h2>${data.Title}</h2>
        <p><strong>Year:</strong> ${data.Year}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
    `;
}