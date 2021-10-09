//aula sobre array

//criando item diretamente no array

var list = ['Daniel', 'Rafaela', 'Caio']
console.log (list)

//chamando um item de um objeto

var person1 = {
    name: 'Jéssica',
    age: 25
}

var person2 = {
    name: 'Constantino',
    age: 27  
}

var person3 = {
    name: 'Eliete',
    age: 43
}

var list = [person1, person2, person3]

console.log (list)
console.log(list[1])

//pegar dados pontuais da lista
for (var person of list) {
    console.log(person.name)
}