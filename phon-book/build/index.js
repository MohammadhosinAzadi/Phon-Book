"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phonbook_json_1 = __importDefault(require("../phonbook.json"));
const user = phonbook_json_1.default;
const searchUser = process.argv.slice(2);
function searchFunction(args) {
    args = searchUser;
    args.forEach((name, phone) => {
        if (user.some((x) => x.name === name) || user.some((x) => x.phone === phone)) {
            console.log("Error : This information is in the phone book");
        }
    });
    args.forEach((name, phone) => {
        if (!user.some((X) => X.name === name) || !user.some((X) => X.phone === phone)) {
            user.push({ name, phone: "unknown" });
        }
    });
}
console.log(searchFunction(searchUser));
console.log(phonbook_json_1.default);
