

interface User {
    age: number,
    name: string
}

function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);


interface SumFunction {
    (a:number, b: number): number
}

var sum: SumFunction;

sum = function (a:number, b:number) {
    return a + b;
}


interface StringArray {
    [index:number]: string
}

var arr: StringArray = ['a', 'b', 'c']

interface StringRegexDic {
    [key: string]: RegExp
}

var obj:StringRegexDic = {
    // sth: /abc/,
    cssFile: /\.css$/
}


interface Person {
    name: string,
    age: number
}

interface Dev extends Person {
    lang: string
}

var cap: Dev = {
    name: 'h',
    age: 10,
    lang: 'korea'
}