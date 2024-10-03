import { add } from "./add";
import { remove } from "./remove";
import { data } from "./fileManager";


function handler(): any {
    const operation = process.argv[2];
    if (operation === 'add') {
        return add()
    }else if (operation === 'remove') {
        return remove();
    } else {
        throw new Error('Please specify the job you want!! add or remove!')
    }
}
handler();
console.log(data);
