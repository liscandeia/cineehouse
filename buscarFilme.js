const filmes = require("./database/catalogo.json")

let buscarFilme = function buscarFilme(lista,codigo){
    let filmeProcurado = lista.find(function(filme){
        return filme.codigo == codigo
    })
    return filmeProcurado
}
console.log(buscarFilme(filmes,1))
module.exports = buscarFilme