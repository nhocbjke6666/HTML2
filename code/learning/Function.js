// let arr = [3,6,1,5];

// let total = 0;
// for (let i=0;i<arr.length;i++){
//     total+=arr[i];
// }
// console.log(total);

// let numbers = [1,2,5,1];

// function gettotal(numbers){
//     let total=0;
//     for(let i=0;i<numbers.length;i++){
//         total+=numbers[i];
//     }
//     return total;
// }

// let totalNumbers = gettotal(numbers);
// let totalArray = gettotal(arr);
// console.log(totalNumbers);
// console.log(totalArray);

// function showInforArray(arr){
//     for (let i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// showInforArray(arr);
// showInforArray(numbers);

// Tạo mảng có các ptu <10

// let size = 10;
// let min = 5;
// let max = 10;

// function createArray(size,min,max){
//     let arr = [];
//     for (let i=0;i<size;i++){
//         arr[i] = Math.floor(Math.random()*(max-min +1) + min);
//     }
//     return arr;
// }
// let arr1 = createArray(size,min,max);
// console.log(arr1);
// let arr2 = createArray(10,100,200);
// console.log(arr2);

// function join(arr, strSp){
//     let result = "";
//     for (let i=0;i<arr.length;i++){
//         if (i==arr.length-1){
//             result += arr[i];
//         }else{
//             result += arr[i] + strSp;
//         }
//     }
//     return result;
// }
// console.log(join(arr1, "++"));
// console.log(join(arr2, "--"));

// Viết hàm : tìm xem trong mảng có bao nhiêu số chính phương
//              tìm vị trí số chẵn cuối cùng trong mảng
//              nối 2 mảng
//              tìm xem một số có xuất hiện trong mảng hay không

// let numbers = createArray(10,1,10);
// console.log(numbers);

// function findSquareNumbers(arr){
//     for (let i=0;i<arr.length;i++){
//         for (let j=2;j<arr[i];j++){
//             if (j*j==arr[i]){
//                 console.log(arr[i]);
//             }else (j*j>arr[i])
//                 break;
//         }
//     }
// }
// findSquareNumbers(numbers);

// function findLastEvenNumber(arr){
//     evenNumber = null;
//     for (let i=0;i<arr.length;i++){
//         if (arr[i] % 2 == 0){
//             evenNumber = arr[i];
//         } 
//     }
//     if (evenNumber == null){
//         return "Mang nay khong co so chan"
//     }else{
//         return evenNumber;
//     }
// }
// console.log(findLastEvenNumber(numbers));

// let numbers2 = createArray(10,10,20);
// console.log(numbers2);
// function joinTotal(arr1, arr2){
//     total = "";
//     for (let i=0;i<arr1.length;i++){
//         total += arr1[i]
//     }
//     for (let i=0;i<arr2.length;i++){
//         total += arr2[i]
//     }
//     return total;
// }
// console.log(joinTotal(numbers, numbers2));

// function findNumberInArray(number, arr) {
//     check = 0;
//     for (let i=0;i<arr.length;i++){
//         if (number==arr[i]){
//             return `Trong mảng có số ${number}`;
//             break;
//         }
//     }
//     if (check==0){
//         return `Trong mảng không có số ${number} `
//     }
// }
// console.log(findNumberInArray(5, numbers));