import { UserListType } from "./mainFile";




export const iputUser: UserListType[]  = process.argv.slice(3).map(arg => {
    const [name, phone] = arg.split(',');
        
    return { name: String(name), phone: Number(phone) };
    }).filter(({name, phone})=> {
    if (!name || isNaN(phone)) {
        console.error("Error : both name and valid phone number must be provided");
        process.exit(1)
        return false
    }
    return true
});





export const deleteUser: string = process.argv[3];