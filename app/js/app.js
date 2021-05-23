let inputArray = document.querySelectorAll('form input[type=text]')

async function getData(string) {
    let data = await fetch('app/js/template.hbs')
    let data2 = await data.text()
    let template = Handlebars.compile(data2)
    let response = await fetch(string)
    let json = await response.json()
    document.querySelector('#bookDisplay').innerHTML = await template(json)
}

function buildQueryString(inputTitle = '', inputAuthor = '') {
    let result = `https://openlibrary.org/search.json?`
    if (inputTitle) {
        result += `title=${inputTitle}&`
    }
    if (inputAuthor) {
        result += `author=${inputAuthor}&`
    }
    result += 'limit=6'
    return result
}

document.querySelectorAll('form input[type=text]').forEach((input) => {
    input.addEventListener('keyup', (e) => {
        e.preventDefault()
        let string = buildQueryString(inputArray[0].value, inputArray[1].value)
        getData(string)
    })
})