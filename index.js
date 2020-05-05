console.log('hello world')
let count = 0
const increase = () => {
    count++
    element.innerText = count
}
const decrease = () => {
    count--
    element.innerText = count
}
const reset = () => {
    count = 0
    element.innerHTML = "<mark>" + count + "</mark>"
    //element.innerText = count
}
var element = document.getElementById("counter")

console.log(document.getElementsByTagName("body"))
console.log(document.getElementsByTagName("main"))



























const selectTheme = theme => {
    document.getElementsByTagName("body")[0].className = theme
    document.getElementsByTagName("main")[0].className = theme
    const buttons = document.getElementsByTagName("button")
    for (i=0; i<buttons.length; i++)
    buttons[i].className = theme
}