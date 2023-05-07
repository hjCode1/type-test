function logMsg(value: string | number) {
    console.log(value)
}


logMsg(100)
logMsg('g')


interface Developer {
    name: string,
    skill: string
}

interface Per {
    name: string,
    age: number
}

// 유니온 타입은 공통된 속성에만 접근 가능
function askSomeone(some: Developer | Per) {
    askSomeone.name
}