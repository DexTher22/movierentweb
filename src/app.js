import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { login, register } from './authService.js'

const doc = {
    loginButton: document.querySelector('#loginButton'),
    loginForm: document.querySelector('#loginForm'),
    nameInput: document.querySelector('#username'),
    passwordInput: document.querySelector('#password')
}

doc.loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('Submit...')
    startLogin()
})

function startLogin(){
    const user = {
        name: doc.nameInput.value,
        password: doc.passwordInput.value
    }
    login(user).then(res => {
        console.log(res)
        localStorage.setItem('token', res.accessToken)
        if(res.accessToken) {
            console.log('login Ok')
            window.location.href='http://localhost:3000/movies.html'
        }else {
            console.log('A bejelentkezés sikertelen')
        }
        
    })
    // const res = (login(user))
    // console.log(res.then(e => {
    //     console.log(e)
    // }))
}



function startCreateMovie() {
    const movie= {
        title: 'zzz',
        director: 'zzze',
        releaseYear: 2026
    }

    //TODO: folytatás
}
