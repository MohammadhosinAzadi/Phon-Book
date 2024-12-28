import inquirer from "inquirer";
import { add } from "./add";
import { remove } from "./remove";
import { data } from "./fileManager";
import { Command } from "commander";

const program = new Command();

program
  .command('add')
  .description('Add a new contact')
  .action(async () => {
    try {
      const request = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter your desired name"
        },
        {
          type: "input",
          name: "phone",
          message: "Enter your desired phone (10 digits - start with '09'):"
        },
        {
          type: "input",
          name: "category",
          message: "Enter your desired category (optional, press Enter to skip):",
          default: "",
        }
      ]);

      const confirm = await inquirer.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: `You entered:\nName: ${request.name}\nPhone: ${request.phone}\nCategory: ${request.category || "None"}\nIs this correct?`,
        }
      ]);
    
      if (confirm.confirm) {
        add(request.name, request.phone, request.category)
        console.log("Contact added successfully!");
      } else {
        console.log("Operation cancelled. You can try again.");
      }

    }catch(error: any) {
      console.error("An error occurred:", error.message);    
    }

  });

program
  .command('remove')
  .description('Delete a contact by phone number')
  .action(async () => {
    try {
      const request = await inquirer.prompt([
        {
          type: "input",
          name: "phone",
          message: "Enter your desired phone"
        }
      ]);

      const confirm = await inquirer.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: `You entered:\nPhone: ${request.phone}\n Is this correct?`,
        }
      ]);

      if (confirm.confirm) {
        remove(request.phone);
        console.log("Removed successfully");
      }else {
        console.log("Operation cancelled. You can try again.");
      }

    }catch(error: any){
      console.error("An error occurred:", error.message);  
    }
  });

program
  .command('view')
  .description('View the phone book list')
  .action(() => {
    console.log(data);
  })

program.parse(process.argv);

   
