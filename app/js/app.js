async function getData(inputTitle) {
    let data = await fetch('js/template.hbs')
    let data2 = await data.text()
    let template = Handlebars.compile(data2)
    let response = await fetch(`https://openlibrary.org/search.json?title=${inputTitle}&limit=6`)
    let json = await response.json()

    console.log(template)
    console.log(json)

    let html = await template(json)
    console.log(html)
    document.querySelector('#bookDisplay').innerHTML = html
}

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault()
//     getData(e.target[0].value)
//     e.target[0].value = ''
// })

document.querySelector('#bookSearch').addEventListener('keyup', (e) => {
    e.preventDefault()
    getData(e.target.value)
})