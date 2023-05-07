
interface Dev1 {
    name: string
    skill: string
}


interface Person2 {
    name: string
    age: number
}


function intro(): Dev1 | Person2 {
    return {name: 'Tony', age: 33, skill: 'Iron'}
}

var t = intro()


// 타입 가드
function isDev(target: Dev1 | Person2): target is Dev1 {
    return (target as Dev1).skill !== undefined
}

