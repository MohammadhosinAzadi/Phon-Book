"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
const fileManager_1 = require("./fileManager");
function validateName(name) {
    if (name === undefined) {
        throw new Error('The received information is not complete!');
    }
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        throw new Error(`There are illegal characters in the entered name. Allowed characters are English letters and blank space`);
    }
    const unauthorizedNames = ['manager', 'admin', 'user', 'test', 'operator', 'guest'];
    if (unauthorizedNames.includes(name.toLocaleLowerCase())) {
        throw new Error('The entered name is not allowed, Do not use names such as manager, admin, guest, test, user etc');
    }
    return name;
}
function validatePhone(phone) {
    const phoneNum = parseInt(phone);
    if (phoneNum === undefined) {
        throw new Error('The received information is not complete!');
    }
    if (isNaN(phoneNum)) {
        throw new Error('Number is invalid!');
    }
    if (fileManager_1.data.some((record) => record.phone === phoneNum)) {
        throw new Error('Number duplicated!');
    }
    if (phone.length !== 10) {
        throw new Error('The phone number must be exactly 10 digits long');
    }
    if (!phone.startsWith('09')) {
        throw new Error('The number you entered is not valid. Numbers must start with 09.');
    }
    return phoneNum;
}
function validateCategory(category) {
    const allowedCategories = ['colleagues', 'friends', 'family'];
    if (category === undefined || !allowedCategories.includes(category)) {
        throw new Error('Invalid category! Allowed categories are: colleagues, friends, or family.');
    }
    return category;
}
function add(category, name, phone) {
    const phoneNum = parseInt(phone);
    const validCategory = validateCategory(category);
    const validName = validateName(name);
    const validPhone = validatePhone(phone);
    fileManager_1.data.push({ name: validName, phone: validPhone, category: validCategory });
    (0, fileManager_1.save)();
}
