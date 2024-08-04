
import { toNamespacedPath } from 'path';  
// toNamespacedPath is the name of the function that was imported from the path module, which is one of the internal modules of Node J

import * as fs from 'fs'; 
// fs = file system , The FS module includes functions that are used for reading, writing, deleting, editing and other tasks

import * as path from 'path'; 
// Enter all the contents of the path module



const dataPath = path.join(__dirname, '../phonbook.json');
//Saving the path of the desired file and the path of the current directory in a variable

const rawData = fs.readFileSync(dataPath, 'utf-8');
//A function of the FS module that reads the file synchronously and the program stops until the reading is finished
//'utf-8' = By using this coding, the content of the file is returned as a string

const data = JSON.parse(rawData);

interface UserPhone { 
    name: string;
    phone: number;
}

const user: UserPhone[] = data.map((entry: { name: string, phone: number }) => ({
    name: String(entry.name),
    phone: Number(entry.phone)
}));

const searchUser: {name: string, phone: number}[] = process.argv.slice(2).map(arg => {
    const [name, phone] = arg.split(',');
    return { name: String(name), phone: Number(phone) };
});

function searchFunction(args: { name: string, phone: number }[]) {
    args = searchUser;

    args.forEach(({ name, phone }) => {

        if (user.some((x) => x.name === name || x.phone === phone)) {
            return console.log("Error: This information is in the phone book");

        } else if (!user.some((x) => x.name === name) && typeof name === 'string') {
            user.push({name, phone});

        }else if (!user.some((x) => x.name === name) && typeof phone === 'number') {
            user.push({name, phone});   
        }
    });

    fs.writeFileSync(dataPath, JSON.stringify(user, null, 2), 'utf-8');
}


searchFunction(searchUser);

console.log(user);


//The problem with the code : The problem with the code is that it recognizes the phone type but not the name type


