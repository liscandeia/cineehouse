const filmes = require("./database/catalogo.json")

let listarTodosOsFilmes = function listarTodosOsFilmes(lista){
    lista.forEach(filme => {
    console.log(filme)
    })
}
listarTodosOsFilmes(filmes)
module.exports = listarTodosOsFilmes