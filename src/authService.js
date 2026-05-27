
const host = 'http://localhost:8000/api/'

function register() {}

function login(user) {
    const url = host + 'login'
    fetch(url, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(err => console.error(err))
    
}

export {register, login};
