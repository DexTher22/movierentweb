import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { getMovies, createMovie } from './apiService.js'
import { login, register } from './authService.js'

const doc = {
    loginButton: document.querySelector('#loginButton')
}

doc.loginButton.addEventListener('click', () => {
    startLogin()
})

function startLogin(){
    const user = {
        name: 'mari',
        password: 'titok'
    }
    login(user)
}



function startCreateMovie() {
    const movie= {
        title: 'zzz',
        director: 'zzze',
        releaseYear: 2026
    }

    //TODO: folytatás
}
