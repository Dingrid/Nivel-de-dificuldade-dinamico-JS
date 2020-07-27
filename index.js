//estilo do nome dificuldade (que está no topo da pagina)
function Title(css, textContent){
    return `<h1 style="${css}">${textContent}</h1>`
}

//insere o personagem
function Character(css,path,alt)
{
    return `
    <img style="${css}" src="${path}" alt="${alt}" />
    `
}

const root = document.querySelector('#root')
const textTitle= 'Dificuldade'
const pathCharacter= 'components/character/potato.png';
const altCharacter= 'plants vs. zombies potato';
//tagged template string
const title = Title `
    ${textTitle};
    color: #7566BD;
`
const character = Character `
    transform: scale(0.13);
    ${pathCharacter}
    ${altCharacter}
    `

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', character)
