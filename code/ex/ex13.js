// Tạo hàm tạo đối tượng bằng object literal
function student(id, name, gender, hobbies) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.hobbies = hobbies;
    // Tạo hàm infor để xem thông tin các đối tượng
    this.infor = function () {
        return `${this.id}  ${this.name} ${this.gender} ${this.hobbies} `;
    }
}

let std1 = new student(1, "Su Bo", "Nam", ["Chơi game"]);
let std2 = new student(2, "Thành Đạt", "Nam", ["Đá bóng", "Ăn uống", "Múa"]);
let std3 = new student(3, "Vũ Bảo", "Nam", ["Đá bóng", "Ăn uống", "Ca hát"]);
let std4 = new student(4, "Quỳnh Châu", "Nữ", ["Ca hát", "Múa"]);

// Tạo 1 mảng để lưu trữ các đối tượng
let stds = [std1, std2, std3, std4];

// Vòng lặp kiểm tra thông tin tất cả đối tượng trong mảng vừa tạo
for (let i = 0; i < stds.length; i++) {
    console.log(stds[i].infor());
}

// Total lưu giữ tất cả các sở thích của các thành viên 
let total = [];
for (let i = 0; i < stds.length; i++) {
    for (let j = 0; j < stds[i].hobbies.length; j++) {
        // kt để kiểm tra xem một sở thích đã xuất hiện ở trong total hay chưa
        let kt = 0;
        for (let k = 0; k < total.length; k++) {
            // Điều kiện để kiểm tra xem sở thích thứ j của đối tượng i đã nằm trong total chưa, nếu rồi thì thay đổi giá trị kt
            if (stds[i].hobbies[j] == total[k]) {
                kt = 1;
            }
        }
        // Điều kiện để kiểm tra xem kt đã thay đổi giá trị hay chưa, nếu chưa thì thêm sở thích đó vào mảng total
        if (kt == 0) {
            total.push(stds[i].hobbies[j]);
        }
    }
}
console.log(total);


let m1 = 1;
let d = 0;
let sameHobbies = [];
let name1 = "";
let name2 = "";
for (let i = 0; i < stds.length; i++) {
    for (let m = m1; m < stds.length; m++) {
        for (let j = 0; j < stds[i].hobbies.length; j++) {
            for (let n = 0; n < stds[m].hobbies.length; n++) {
                if (stds[m].hobbies[n] == stds[i].hobbies[j]) {
                    d++;
                    sameHobbies.push(stds[m].hobbies[n]);
                    name1 = stds[i].name;
                    name2 = stds[m].name;
                }
            }
        }
        if (d > 0) {
            console.log(`${name1} có ${d} sở thích giống với ${name2} đó là: ${sameHobbies.join(", ")}`);
            d = 0;
            sameHobbies = [];
            name1 = "";
            name2 = "";
        }
    }
    m1++;
}