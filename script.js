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
