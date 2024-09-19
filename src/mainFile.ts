export interface UserListType { 
    name: string;
    phone: number;
}




import { errorHandle } from './errorHandling';
import {iputUser, deleteUser} from './controlUserFile'
import {data, dataPath, rawData} from './fileManager';
import {writeFileSync} from 'fs';




let userList: UserListType[] = data.map((entry: UserListType) => ({
    name: String(entry.name),
    phone: Number(entry.phone)
}));





function addFunction(args: UserListType[]): void {

    args.forEach(({ name, phone }) => {

        if (userList.some((x) => x.name === name || x.phone === phone)) {
            return console.log("Error: This information is in the phone book");

        } else {
            userList.push({name, phone});
            console.log(`user whit name "${name}" and whit phone "${phone}" was added`);
        }
    });

    writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');

}





function deleteFunction(name : string) {
        
    const initialLengh = userList.length

    userList = userList.filter(user => user.name !== name)

    if (userList.length === initialLengh) {
        console.log(`no user found whit name "${name}".`);

    }else {
        console.log(`user whit name "${name}" has been deleted`);
        writeFileSync(dataPath, JSON.stringify(userList, null, 2), 'utf-8');
    }
}





const operation = process.argv[2];
if (operation === 'add') {

    addFunction(iputUser);

}else if (operation === 'delete') {

    deleteFunction(deleteUser);

}





errorHandle(rawData, data);
console.log(userList);