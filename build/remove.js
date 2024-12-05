"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = remove;
const fileManager_1 = require("./fileManager");
// function validation(phone: string):number{
//     const phoneNum = parseInt(phone)
//     if(isNaN(phoneNum)){
//         throw new Error('Number is invalid!')
//     }
//     let index:number | undefined
//     data.find((record, i) => {
//         if(record.phone === phoneNum){
//             index = i
//             return true
//         }
//         return false
//     })
//     if(index === undefined){
//         throw new Error('Number is not found!')
//     }
//     return index
// }
// function normalizePhone(phone: string): string {
//     if (phone.startsWith('0')) {
//         return phone;
//     }
//     return '0' + phone;
// }
// function validation(phone: string): number {
//     const normalizedPhone = normalizePhone(phone);
//     const index = data.findIndex(record => record.phone.toString() === normalizedPhone);
//     if (index === -1) {
//         throw new Error('Number is not found!');
//     }
//     return index;
// }
// export function remove(phone: string): void {
//     const index = validation(phone);
//     data.splice(index, 1);
//     save(); 
// }
function validation(phone) {
    const phoneNum = parseInt(phone, 10); // تبدیل به عدد
    if (isNaN(phoneNum)) {
        throw new Error("Invalid phone number format");
    }
    const index = fileManager_1.data.findIndex(record => record.phone === phoneNum); // مقایسه عددی
    if (index === -1) {
        throw new Error("Number is not found!");
    }
    return index;
}
function remove(phone) {
    const index = validation(phone);
    fileManager_1.data.splice(index, 1); // حذف رکورد
    (0, fileManager_1.save)(); // ذخیره تغییرات در فایل
    console.log(`Contact with phone number ${phone} removed successfully.`);
}
