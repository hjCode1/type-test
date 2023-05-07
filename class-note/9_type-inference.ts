

function getB(b = 10) { 
    var c = 'h'
    return b + c
}


interface Dropdowns<T> {
    value: T
    title: string
}

interface DetailDropdown<T> extends Dropdowns<T> {
    desc: string
    tag: T
}

var detailedItems: DetailDropdown<string> = {
    title: 'a',
    desc: 'b',
    value: 'aa',
    tag: 'ff'
}


let arr:(number|null)[] = [1,2,null]