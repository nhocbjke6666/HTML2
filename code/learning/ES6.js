// const fruit = new Map();

// fruit.set("apples", 500);
// fruit.set("bananas", 200);
// fruit.set("Lemons", 300);

// fruit.set("Watermelon", 20);
// fruit.set("Watermelon", 100);

// fruit.get("Watermelon");

// // fruit.get().size;

// fruit.delete("apples");
// console.log(fruit);

// let names = new Set();

// names.add("Su Bo");
// names.add("Anh Tài");
// names.add("Hương");

// console.log(names);

// The ... Operator: mở rộng các phẩn tử 
// let arr = [5, 1, 7, 8];
// console.log(arr.concat(3, 5));

// Function Rest Parameter: cho phép function xử lí với số lượng đối số không xác định
//                          hoặc ... chỉ lấy phần còn lại của đối số
// function sum(...args) {
//     let sum=0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }

// let x = sum(1, 1, 1, 3, 4);
// console.log(x);

// // Default Parameter: đặt giá trị mặc định của tham số
// function myFunction(x, y=10) {
//     // y is 10 of not passed or underfined
//     return x + y;
// }
// console.log(myFunction(5));

// Khai báo 1 class bằng class
// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }
// let car1 = new Car("audi", 2022);
// let car2 = new Car("merc", 2018);
// console.log(car1);
// console.log(car2);