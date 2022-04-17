const filmes = require("./database/catalogo.json")

let addFilme = function addFilme(lista,titulo, duracao, genero, emCartaz){
    lista.push({
        codigo: lista.length + 1,
        titulo,
        duracao,
        genero,
        emCartaz
    }) 
    return lista
}
console.table(addFilme(filmes,"batima", 500, 'terror', true))
module.exports = addFilme