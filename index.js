//const { minCalls } = require("sinon/lib/sinon/mock-expectation")

// Add your code here
const submitData = (name, email) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(resp => resp.json())
    .then(data => {
        let id = document.createElement('p')
        let body = document.querySelector('body');
        id.innerText = data.id
        body.append(id)
    })
    // .catch((error) => {

    // })
}

