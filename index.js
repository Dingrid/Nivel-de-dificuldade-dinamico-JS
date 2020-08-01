//estilo do nome dificuldade (que está no topo da pagina)
function Title(css, textContent){
    return `<h1 style="${css}">${textContent}</h1>`
}

//corpo do personagem
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

//tagged template string - manda os elementos para o Title
const title = Title `
    ${textTitle};
    color: #7566BD;
`
const character = Character `
    width: 15%;
    padding: 20px;
    ${pathCharacter}
    ${altCharacter}
    `
//criacao da barra de dificuldade com arrow function
const Item = (css, content) => (
    `<li style="${css}"> ${content} </li>`
)

const Slide = (css, content) => (
    `<li style="${css}"> ${content} </li>`
)

const slide = Slide `
    width: 60%;
    height: 10px; 
    background-color: yellow;
    margin-left: 20%;
    margin-top: 2%;
   ${'teste'}
    `

root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', character)
root.insertAdjacentHTML('beforeend', character)
root.insertAdjacentHTML('beforeend', character)
root.insertAdjacentHTML('beforeend', slide)
