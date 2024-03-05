import generateName from "./generateJoke.js";
import './styles/main.scss'

const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateName)
generateName()
