//aula condicionais
var me = {
    name: 'Daniel',
    age: 22
}

function checkAge (person) {
    console.log('A idade da pessoa é: ' + person.age)
    
    if (person.age >= 18) {
        console.log ('A pessoa é maior de idade!')
    }else{
        console.log('Menor')
    }
}

checkAge(me)