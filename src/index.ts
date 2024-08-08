import {readFileSync, writeFileSync} from 'fs'; 
import {join} from 'path'; 



const dataPath = join(__dirname, '../phonbook.json');
const rawData = readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);


interface UserListType { 
    name: string;
    phone: number;
}


const userList: UserListType[] = data.map((entry: { name: string, phone: number }) => ({
    name: String(entry.name),
    phone: Number(entry.phone)
}));


const inputUser: {name: string, phone: number}[] = process.argv.slice(2).map(arg => {
    const [name, phone] = arg.split(',');
    return { name: String(name), phone: Number(phone) };
});


function searchFunction(args: { name: string, phone: number }[]) {
    args = inputUser;

    args.forEach(({ name, phone }) => {

        if (userList.some((x) => x.name === name || x.phone === phone)) {
            return console.log("Error: This information is in the phone book");

        } else {
            
            userList.push({name, phone});
        }
    });

    writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');
}


searchFunction(inputUser);
console.log(userList);



















