import { ifError } from "assert";
import { UserListType } from "./mainFile";




export const inputUser: UserListType[]  = process.argv.slice(3).map(arg => {
    const [name, phone] = arg.split(',');
        
    return { name: String(name), phone: Number(phone) };
    
})





export const deleteUser: string = process.argv[3];

if (!deleteUser) {
    console.error(`Error : a valid name must be provided for delettion`);
    
}
