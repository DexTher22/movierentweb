
const host = 'http://localhost:8000/api/'

function register(user) {}

function login(user) {
    const url = host + 'login'
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {
        // console.log(result)
        return result
    })
    .catch(err => console.error(err))
    
}

export {register, login};
