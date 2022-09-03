const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke) // as soon as website is loaded, a joke is loaded in the HTML text

button.addEventListener( 'click', getJoke);


function getJoke(){
    fetch('https://icanhazdadjoke.com/',{
        headers:{
            'Accept': 'application/json'
        }
    }).then(data => data.json())
      .then(obj => jokeText.innerHTML = obj.joke)
}

// Another method to fetch
/*
async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}
*/