let jokeTextElement = document.getElementById("joke-text");
let newJokeButton = document.getElementById("new-joke");


function getRandomJoke() {
  let url = "https://official-joke-api.appspot.com/random_joke";


  return fetch(url)
    .then((response) => response.json())
    .then((data) => ({
      setup: data.setup,
      punchline: data.punchline,
    }));
}

function displayJoke(joke) {
  jokeTextElement.innerHTML = `
    <p>${joke.setup}</p>
             <p><em>${joke.punchline}</em></p>
  `;
}

newJokeButton.addEventListener("click", () => {
  getRandomJoke()
    .then((joke) => {
      displayJoke(joke);
    })

    .catch((error) => {
      jokeTextElement.textContent = "Failed to fetch joke.";
    });

});

getRandomJoke()
  .then((joke) => {
    displayJoke(joke);
  })

  .catch((error) => {
    jokeTextElement.textContent = "Failed to fetch joke.";
  });


  // let jokeTextElement = document.getElementById("joke-text");
// This line retrieves an HTML element with the ID "joke-text" and assigns it to the variable jokeTextElement. This element is where the fetched joke will be displayed.

// let newJokeButton = document.getElementById("new-joke");
// Similarly, this line retrieves an HTML element with the ID "new-joke" and assigns it to the variable newJokeButton. This element represents a button that, when clicked, triggers the fetching of a new random joke.

// function getRandomJoke() { ... }
// This function performs an HTTP fetch request to the "https://official-joke-api.appspot.com/random_joke" URL to retrieve a random joke. The fetch request returns a Promise. If the request is successful, it parses the response JSON and extracts the setup and punchline properties from the data. The setup property contains the setup text of the joke, and the punchline property contains the punchline of the joke. This function is used to get a random joke from the API.

// function displayJoke(joke) { ... }
// This function takes a joke object as an argument and uses the setup and punchline properties to update the jokeTextElement's innerHTML. It creates an HTML structure with the joke's setup displayed in a paragraph and the punchline displayed in italics within another paragraph.

// newJokeButton.addEventListener("click", () => { ... });
// This code adds an event listener to the "new-joke" button. When the button is clicked, it triggers an anonymous arrow function. Inside this function, it calls the getRandomJoke() function to fetch a random joke from the API. If the fetch is successful, it calls the displayJoke() function to display the fetched joke using the HTML structure.

// getRandomJoke().then((joke) => { ... });
// This code fetches and displays a random joke as soon as the page loads. It calls the getRandomJoke() function and, if successful, uses the displayJoke() function to display the fetched joke.

// Error handling: Both the getRandomJoke() and button click fetch operations have .catch() blocks that handle errors in case the fetch fails. If there's an error during the fetch, it updates the content of the jokeTextElement with an error message.