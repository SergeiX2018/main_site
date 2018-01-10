export function articleApi (data) {
    return  fetch("http://localhost:3000/articles", {

        headers:{"Content-Type" : "application/json"}
    })
        .then(response=>response.json())


}


export function loginApi (data) {
    return fetch("http://localhost:3000/login", {
        method:"POST",
        body: JSON.stringify({
            email:data.email,
           password: data.password,
        }),
        headers:{"Content-Type" : "application/json"}
    })
        .then(response=>{
            return response.json()
        })

}


export function registrationApi (data) {
    return fetch("http://localhost:3000/registration", {
        method:"POST",
        body: JSON.stringify({
            email:data.email,
           password:data.password,
        }),
        headers:{"Content-Type" : "application/json"}
    })
        .then(response=>response.json())

}
export function videoApi (data) {
    return fetch("http://localhost:3000/videos", {

        headers: {"Content-Type": "application/json"}
    })
        .then(response => response.json())

}

export function itVideoApi (data) {
    return fetch("http://localhost:3000/it-videos", {

        headers: {"Content-Type": "application/json"}
    })
        .then(response => response.json())

}
export function newsApi (data) {
    return fetch("http://localhost:3000/it-news", {

        headers: {"Content-Type": "application/json"}
    })
        .then(response => response.json())

}