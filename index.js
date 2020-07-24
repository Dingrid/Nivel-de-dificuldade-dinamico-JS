//estilo do nome dificuldade (que está no topo da pagina)
function Title(css, textContent){
    return `<h1 style="${css}">${textContent}</h1>`
}

const root = document.querySelector('#root')
const textTitle= 'Dificuldade'
//tagged template string
const title = Title `
    ${textTitle};
    color: #7566BD;
`

root.insertAdjacentHTML('beforeend', title)
