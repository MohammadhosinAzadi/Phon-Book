"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
const remove_1 = require("./remove");
const fileManager_1 = require("./fileManager");
const commander_1 = require("commander");
const program = new commander_1.Command();
// function handler(): void {
//     const operation = process.argv[2];
//     if (operation === 'add') {
//         add();
//     } else if (operation === 'remove') {
//         return remove(); 
//     } else {
//         throw new Error('Please specify the job you want: add or remove!');
//     }
// }
// handler();
// console.log(data);
program
    .command('add <category> <name> <phone>')
    .description('Add a new contact')
    .action((category, name, phone) => {
    (0, add_1.add)(category, name, phone);
});
program
    .command('remove <phone>')
    .description('Delete a contact by phone number')
    .action((phone) => {
    (0, remove_1.remove)(phone);
});
program.parse(process.argv);
console.log(fileManager_1.data);
