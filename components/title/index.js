//outras formas de fazer o arquivo do index.js


//criacao da var title com atribuicao de conteudo
//const = se a var nunca vai alterar
//const title = "<h1>Dificuldade</h1>" //os textos em js devem ficar entre " ou '

//DOM - document (pega informação do documento)
// BOM- window (pega info do navegador)

//uso da api DOM (faz cm q o js + html se combinem)
//vc pode escrever tb window.document.querySelector('#root')
//const root= document.querySelector('#root') //forma simplificada
//o get element by Id é uma forma + antiga de pegar elementos do doc (a diferença entre ele e o query é pequena)

//title.textContent = 'mudando'
//innerHTML tem problemas de segurança, porém ele sabe ler tags '<spam>Mudando</spam>'

/* outro método com appendChild
const root = document.querySelector('#root') 
const title = document.createElement('h1') 
title.textContent = 'Dificuldade' 
root.append(title) */

//root.insertAdjacentHTML('beforeend',title) //mostra o conteudo do title antes do final da tag (beforeend) 

/*function newElement(tag, content)
{
    const title = `<${tag}>${content}</${tag}>` //o conteudo dentro da crase se chama tagged template string 
    //se vc quer usar js dentro de um template string vc usa ${oq_vc_quer_usar}
    root.insertAdjacentHTML('beforeend',title)
}
newElement('h1','Dificuldade') */