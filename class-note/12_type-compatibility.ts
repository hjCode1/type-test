
interface Developer1 {
    name: string
    skill: string
}

interface Person3 {
    name: string
}


var dev: Developer1
var per: Person3


var add1 = function (a: number) {
    
}

var sum1 = function (a: number, b: number) {
    
}


sum1 = add1


interface Empty<T> {

}

var empty1: Empty<string>
var empty2: Empty<number>


interface NoEmpty<T> {
    data: T
}

var notEmpty1: NoEmpty<string>
var notEmpty2: NoEmpty<number>
