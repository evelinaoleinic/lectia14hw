const func1 = (a, b, c) => {
    return Math.sqrt(a + b +c)
}
console.log(func1(1, 5, 10))
console.log(func1(4, 8, 12))


const func2 = (string) => {
    return Math.random() * string.length
}
 console.log(func2('orice text'))
 console.log(func2('orice text'))

const func3 = (string) => {
    return[Math.floor((Math.random() * string.length))]
}
console.log(func3('orice text again'))

const func4 = (string1, string2) => {
    return string1 + string2
}
console.log(func4('eu sunt eva', ' am completat tema'))