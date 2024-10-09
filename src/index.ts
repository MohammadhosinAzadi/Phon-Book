import { add } from "./add";
import { remove } from "./remove";
import { data, categories } from "./fileManager";


function handler(): void {
    const operation = process.argv[2];
    const category = process.argv[3];
    
    if (operation === 'add') {
        category;
        add();
    } else if (operation === 'remove') {
        return remove(); 
    } else {
        throw new Error('Please specify the job you want: add or remove!');
    }
}

handler();
console.log(data);
