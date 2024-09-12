import {readFileSync, writeFileSync} from 'fs'; 
import {join} from 'path'; 



const dataPath = join(__dirname, '../phonbook.json');

let rawData = '';
try {
    rawData = readFileSync(dataPath, 'utf-8');
} catch (error : any) {
    if (error.code === 'ENOENT') {
        console.error("Error : the file does not exist");
        process.exit(1)

    }else if (error.code === 'EACCES') {
        console.error("Error : permission denied to read the file.");
        process.exit(1)
                
    }else {
        console.error("An error occurred while read the file:" ,error.message);
        process.exit(1)
        
    }
}

let data : UserListType[] = [];
try {
    data = JSON.parse(rawData);
} catch (error) {
    console.error("Error : failed to parse JSON data . please check the JSON format.");
    process.exit(1)
}
if (!Array.isArray(data)) {
    console.error("Error :Data is not array. please check the JSON structure");
    
    
}



interface UserListType { 
    name: string;
    phone: number;
}



let userList: UserListType[] = data.map((entry: UserListType) => ({
    name: String(entry.name),
    phone: Number(entry.phone)
}));



const operation = process.argv[2];

if (operation === 'add') {

    const addUser: UserListType[] = process.argv.slice(3).map(arg => {
    const [name, phone] = arg.split(',');

    return { name: String(name), phone: Number(phone) };
    }).filter(({name, phone})=> {
    if (!name || isNaN(phone)) {
        console.error("Error : both name and valid phone number must be provided");
        process.exit(1)
        return false
    }
    return true
    })



    function addFunction(args: UserListType[]) {
    args = addUser;

    args.forEach(({ name, phone }) => {

        if (userList.some((x) => x.name === name || x.phone === phone)) {
            return console.log("Error: This information is in the phone book");

        } else {
            
            userList.push({name, phone});
        }
    });

    writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');

    }
    addFunction(addUser);

    
}else if (operation === 'delete') {
    const deletEuser: string = process.argv[3];


    function deleteFunction(name : string) {
        const initialLengh = userList.length

        userList = userList.filter(user => user.name !== name)

        if (userList.length === initialLengh) {
            console.log(`no user found whit name ${name}.`);

        }else {
            console.log(`user whit name ${name} has been deleted`);
            writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');
        }
    }

    deleteFunction(deletEuser)
}



console.log(userList);



















