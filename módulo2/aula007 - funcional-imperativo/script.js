//aula sobre a diferença entre programação funcional e imperativa
var person = {
    age: 17,
    name: 'Lucas'
}

//função pura (nao altera os dados do obj)
function getRemainingYearsToMajorty(person) {
    return 18 - person.age
}

/*
//função impura altera os dados originais
function increasePersonAge(person) {
    person.age = person.age + 1
}

increasePersonAge(person)*/

var remeiningYears = getRemainingYearsToMajorty(person)
    console.log(remeiningYears)