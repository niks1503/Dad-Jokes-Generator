const apiKey = "HgTq+8SS6PDKlnrmMKx9Vw==FxKHSePPRzBCReVX";

const btnE1 = document.getElementById("btn");
const jokeE1 = document.getElementById("joke");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

async function fetchJoke() {
  try {
    jokeE1.innerText =
      loadingJokes[Math.floor(Math.random() * loadingJokes.length)];
    btnE1.disabled = true;
    btnE1.textContent = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    console.log(data);
    btnE1.disabled = false;
    btnE1.textContent = "Tell me a Joke";
    jokeE1.innerText = data[Math.floor(Math.random() * data.length)].joke;
  } catch (error) {
    jokeE1.innerText = "An error happened, try again later";
    btnE1.disabled = false;
    btnE1.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnE1.addEventListener("click", fetchJoke);
