const filmes = require("./database/catalogo.json")

let longaDuracao = function longaDuracao (lista,tempo){
    let lista2 = lista.filter(function(filme){
        if(filme.duracao >=tempo){
            return filme
        }
        
    })
    return lista2
}
console.table(longaDuracao(filmes,400))
module.exports = longaDuracao