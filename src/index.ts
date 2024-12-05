import { add } from "./add";
import { remove } from "./remove";
import { data } from "./fileManager";
import { Command } from "commander";


const program = new Command();



program
  .command('add <category> <name> <phone>')
  .description('Add a new contact')
  .action((category, name, phone)=> {
    add(category, name, phone);
  });


  program
   .command('remove <phone>')
   .description('Delete a contact by phone number')
   .action((phone: string)=> {
    remove(phone)
   });


   program.parse(process.argv);
   console.log(data);
   
