import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { getMovies, createMovie } from './apiService.js'

function startGetMovies() {
    getMovies().then(res => {
        console.log(res)
    });
}

startGetMovies()
