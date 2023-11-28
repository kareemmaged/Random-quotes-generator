const btn = document.getElementById("btn")
btn.addEventListener("click", getData)


async function getData(){
    // we used fetch to get the API, it returns a promise, hansami el promise "response"
    let response = await fetch("https://api.adviceslip.com/advice")
    let data = await response.json()
    
    const quotes = document.getElementById("quotes")
    quotes.innerText = "\"" + data.slip.advice + "\""

}

console.log("Hello")
getData()

//todo list
// make html layout
// make css