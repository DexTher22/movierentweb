
const host = 'http://localhost:8000/api/movies'

function getMovies() {
    const url = host
    const token = localStorage.getItem('token')
    console.log(token)
    return fetch(url, {
        method: "GET",
        headers: {
            "Authorization" : 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then(result => {
        return result
    })
}

function createMovie(movie) {}

export {getMovies, createMovie}
