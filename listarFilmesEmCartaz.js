const filmes = require("./database/catalogo.json")
let listarFilmesEmCartaz = function listarFilmesEmCartaz(lista){
    let lista2 = lista.filter(function(filme){
        if(filme.emCartaz == true){
            return filme
        }
        
    })
    return lista2
}
console.table(listarFilmesEmCartaz(filmes))
module.exports = listarFilmesEmCartaz