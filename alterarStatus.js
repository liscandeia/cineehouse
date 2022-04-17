const filmes = require("./database/catalogo.json")

let alterarStatus = function alterarStatus(lista, codigo){
    let filmeProcurado = lista.find(function(filme){
        return filme.codigo == codigo
    })
    if (filmeProcurado.emCartaz == true){
        filmeProcurado.emCartaz = false
    } else if (filmeProcurado.emCartaz == false){
    filmeProcurado.emCartaz = true
    }
    return filmeProcurado
}
console.log (alterarStatus(filmes,1))
module.exports = alterarStatus