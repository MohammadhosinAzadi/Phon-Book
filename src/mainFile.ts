export interface UserListType { 
    name: string;
    phone: number;
}




import { errorHandleFileManager, validDataDeleteInput, validDataUserInput } from './errorHandling';
import {inputUser, deleteUser} from './controlUserFile'
import {data, dataPath, rawData} from './fileManager';
import {writeFileSync} from 'fs';




let userList: UserListType[] = data.map((entry: UserListType) => ({
    name: String(entry.name),
    phone: Number(entry.phone)
}));





function addFunction(args: UserListType[]): any {

    args.forEach(({ name, phone }) => {

        if (!validDataUserInput(name, phone))
            return process.exit(1)

        if (userList.some((x) => x.name === name || x.phone === phone)) {
            return console.error("Error: This information is in the phone book");

        } else {
            userList.push({name, phone});
            console.log(`user whit name "${name}" and whit phone "${phone}" was added`);
        }
    });

    writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');

}





function deleteFunction(name : string): any {

    if (!validDataDeleteInput(name))
        process.exit(1);
        
    const initialLengh = userList.length;

    userList = userList.filter(user => user.name !== name);

    if (userList.length === initialLengh) {
        console.error(`no user found whit name "${name}".`);

    }else {
        console.log(`user whit name "${name}" has been deleted`);
    }

    writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');
}





function runFunction(add: Function, remove: Function): any {

    const operation = process.argv[2];

    if (operation === 'add') {

        return add();

    }else if (operation === 'delete') {

        return remove();
    
    }else {

        return console.error('Error : please specify the job you want!! add or delete');
 
    }
}





runFunction(() => 
addFunction(inputUser), () =>
deleteFunction(deleteUser));

errorHandleFileManager(rawData, data);
console.log(userList);