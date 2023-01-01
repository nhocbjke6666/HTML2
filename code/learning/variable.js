var a = 5       // số nguyên: integer
let b = 5.0     // số thập phân: decimal
let c = "352022"    // kiểu chuỗi: string
let d = 'c'     // kiểu kí tự: character
var e = true    // boolean  
var el = false  // boolean

a = 'Hello'
console.log(a)
console.log(typeof a)

let name = 'Quang Dang'

const max = 10  // khai báo hằng số
// max = 12     hằng số thì không thể gán giá trị
console.log(max)

let x = false
let x1 = 100
console.log(Boolean(x1))
console.log(Boolean(x))
// false    0   ""  null    undefine    => false

let count = 0
count++
console.log(count);

let firstName = "Quang"
let lastName = "Dang"
let fullName = firstName + " " + lastName
console.log(fullName);

let number1 = 5
let number2 = "5"
console.log(number1 + number2);

let number3 // undefine
console.log(number3);

let number4 = null  // có giá trị là null
console.log(number4);

number1 = number1 + number3
console.log(number1);   // xuất ra NaN (chưa xác định)

number2 = number2 + number4
console.log(number2);  

