const baseURL = "https://ghibliapi.herokuapp.com"; 
function fetchFilms() {
    let urlString = baseURL + "/films"; // url to send fetch request too
    fetch(urlString) // fetch data
        .then((response) => {
            return response.json(); // convert json to javascript
        })
        .then(displayFilms) // displayFilms to page
        .catch(console.error) // handles errors if found
}
function displayFilms(data) {
    const filmParentElement = document.getElementById("films"); // reference where each film display
    let films = data; // reference to the film statement 
    films.forEach(function (film){
        let filmCard = document.createElement("div"); // Create a div element for our film data
        filmCard.setAttribute("class", "film-card"); // applies CSS styles 
        let title = document.createElement("h2"); // Create an h2 element for our film data
        title.innerText = film.title; // Sets the text for our title
        let paragraph = document.createElement("p"); // Create a paragraph element for our film data
        paragraph.innerText = film.description; // Sets description text for each film
        filmCard.appendChild(title); // added the title element to the film element
        filmCard.appendChild(paragraph);// added paragraph element to the film element
        filmParentElement.appendChild(filmCard); // added film card the the film element 
    })
}
// start of web app
fetchFilms() 