
// function logText(text) {
//     console.log(text)
//     return text
// }

// logText(10)


// function logText<T>(text: T): T {
//     console.log(text)
//     return text
// }

// logText<string>('g')

// function logText(text: string | number) {
//     return text
// }

function logText<T>(text: T): T {
    return text
}

logText<string>('g')
logText<number>(100)



// interface Dropdown {
//     value: string
//     selected: boolean
// }

// const obj: Dropdown = {value: '10', selected: true}


interface Dropdown<T> {
    value: T
    selected: boolean
}

const obj: Dropdown<number> = { value: 10, selected: true }



// 제너릭의 타입 제한

// interface LengthType {
//     range: string
// }

// function logTextLength<T extends LengthType>(text: T) {
//     // console.log(text.length)
//     return text.range.length
// }

// logTextLength<LengthType>({ range: 'hello' })

function getStringLength<T extends string>(str: T): number {
    return str.length;
}


const myString = "Hello, World!";
const length2 = getStringLength(myString);
console.log(length2); // Output: 13
  

// keyof
interface Shopping {
    name: string
    price: number
    stock: number
}

function getShoppingItem<T extends keyof Shopping>(item: T): T {
    return item
}

getShoppingItem("name")



function fetchItem(): Promise<string[]> {
    var items: string[] = ['a', 'b', 'c']
    return new Promise(function(resolve) {
        resolve(items)
    })
}

fetchItem()