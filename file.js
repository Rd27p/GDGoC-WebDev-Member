/* const arr = [1,2,3,4,5]

const arrMap = arr.map(
    function (value) {
        return value * 2;
    }
)

const arrfilter = arr.filter(
    function (value) {
        return value % 2 === 0;
    }
)

const arrreduce = arr.reduce(
    function (accumulator, Value) {
        return accumulator + Value;
    }
)

console.log(arrMap)
console.log(arrfilter)
console.log(arrreduce) */

/*const obj1 = {name: "Alice"}
const obj2 = obj1

obj2.name = "Bob"
console.log(obj1)*/

/* const original = { name: "Alice", address: {city: "Jakarta"}}
const copy = JSON.parse(JSON.stringify(original))
const copy2 = Object.assign({}, original)

copy.name = "bob"
copy.address.city = "Bandung"

console.log(original)
console.log(copy) */

/* const arr = [1,2,3,4,5]
const arr2 = [...arr]
const newarr = [...arr,...arr2]

console.log(...arr)
console.log(arr2)
console.log(newarr) */

/* const obj = {a:1, b:2}
const obj2 = {c:3, d: 4}
const newObj = { ...obj}

console.log(newObj) */

/* const [ab, ...rest] = [1,2,3,4]

console.log(ab)
console.log(rest)

const {a,...rest2} = {a:1, b:2, c:3}
console.log(a)
console.log(rest2)

const sum = (...number) => {
    return number.reduce((acc, number) => acc + number)
} 

console.log(sum(1,2,3,4,5,6)) */

