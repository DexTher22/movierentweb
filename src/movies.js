import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { getMovies, createMovie } from './apiService.js'

const doc = {
    modalbox: document.querySelector('#modalbox'),
    modal:  document.querySelector('.modal'),
    modalBackDrop: document.querySelector('.modal-backdrop'),
    addButton: document.querySelector('#addButton'),
    closeButton: document.querySelectorAll('.closeButton'),
    movieForm: document.querySelector('#movieForm'),
    exitButton: document.querySelector('#exitButton'),
    moviesTbody: document.querySelector('#movies-tbody')
}

const modalState = {
    _show: false,
    get show() {
        return this._show
    },
    set show(value) {
        this._show = value
        //TODO: renderelés
        renderModal()
    }
}

for(let i = 0; i < 2; i++){
    doc.closeButton[i].addEventListener('click', () => {
    console.log('bezár')
    modalState.show = false
})
}

doc.addButton.addEventListener('click', () => {
    console.log('Start adding')
    startAddMovie()
})

doc.closeButton[0].addEventListener('click', () => {
    console.log('bezár')
    modalState.show = false
})

doc.movieForm.addEventListener('submit', (e) => {
    e.preventDefault()
    startSaveMovies(e)
})



doc.exitButton.addEventListener('click', () => {
    startExit()

})

function startAddMovie() {
    modalState.show = true
    
}

function startSaveMovies(e) {
    console.log('Űrlap feldolgozás...')
    const formData = new FormData(e.target)

    const movie = {
        title: formData.get('title'),
        director: formData.get('director'),
        releaseYear: formData.get('releaseYear')
    }
    const res = createMovie(movie)
    console.log(res)
    startGetMovies()
}

function startGetMovies() {
    getMovies().then(res => {
        console.log(res)
        renderMovies(res.data)
        
    });
}

function renderMovies(movies) {
    const rows = movies.map((movie) => {
        return `
            <tr>
                <td>${movie.id}</td>
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td>${movie.releaseYear}</td>
            </tr>
        `
    }).join('')
    doc.moviesTbody.innerHTML = rows

}


function startExit () {
    console.log('Kilép')
    window.location.href = 'http://localhost:3000/index.html'
    localStorage.removeItem('token')
}

function renderModal() {
    if(modalState.show){
        doc.modalbox.classList.add('d-block')
        doc.modal.classList.add('d-block')
        setTimeout(() => {
            doc.modal.classList.add('show')
        }, 10)
        doc.modalBackDrop.classList.add('show')
        doc.modalBackDrop.classList.add('d-block')
    }else{
        doc.modal.classList.remove('show')
        doc.modalBackDrop.classList.remove('show')
        setTimeout(() => {
            doc.modal.classList.remove('d-block')
            doc.modalBackDrop.classList.remove('d-block')
            doc.modalbox.classList.remove('d-block')
        }, 150)
    }
}

startGetMovies()
