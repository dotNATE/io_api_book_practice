async function getData(inputTitle) {
    let response = fetch(`https://openlibrary.org/search.json?q=${inputTitle}`)
    let template = fetch('template.hbs')
    let json = response.json()

    console.log(template.text())
    console.log(json)
}