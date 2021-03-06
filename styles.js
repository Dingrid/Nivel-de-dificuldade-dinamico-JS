//criacao da aparencia da pagina
const style = `<style>

    *{
        margin: 0;
        padding: 0;
        border: none;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-content: column;
        height: 100vh;
        background-color: #26213D;
    }

    #root {
        box-sizing: border-box;
        font-family: 'Bungee', cursive;
        letter-spacing: 6px;
        background-color: #6558A3;
        width: 40vw;
        min-width: 768px;
        height: 65vh;
        min-height: 400px;
        text-align: center;
        padding-top: 30px;  
    }
</style>`

const head = document.querySelector('head')
head.insertAdjacentHTML('beforeend', style)