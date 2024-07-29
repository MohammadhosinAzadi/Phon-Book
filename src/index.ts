import { toNamespacedPath } from 'path';
import data from '../phonbook.json';

interface UserPhone { 
    name : string;
    phone : string
}
const user: UserPhone[] = data;


const searchUser: string[] = process.argv.slice(2);

function searchFunction(args: string[] | undefined) {
    args = searchUser;

    args.forEach((name, phone) => {
        if (user.some((x) => x.name === name) || user.some((x) => x.phone === phone)) {
            console.log("Error : This information is in the phone book");
        }   
    })

    args.forEach((name, phone) => {
        if (!user.some((X) => X.name === name) || !user.some((X) => X.phone === phone)) {
            user.push({name, phone})
            
        }
    })
}


console.log(searchFunction(searchUser));


console.log(data);





























 















 






 


