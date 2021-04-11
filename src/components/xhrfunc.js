
const xhrfunc = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'https://jsonplaceholder.typicode.com/users')
    request.send()
    request.onload = () => {
        if (request.status === 200) {
            console.log(JSON.parse(request.response))
            return JSON.parse(request.response)
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

}

export default xhrfunc;
