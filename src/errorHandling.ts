import { UserListType } from "./mainFile";




export function errorHandleFileManager(rawData: any, data: UserListType[]): void {

    try {
        rawData;
    } catch (error : any) {
        if (error.code === 'ENOENT') {

            return console.error("Error : the file does not exist");
    
        }else if (error.code === 'EACCES') {

            return console.error("Error : permission denied to read the file.");
                    
        }else {

            return console.error("An error occurred while read the file:" ,error.message);
            
        }
    }

    
    try {
        data;
    } catch (error) {

        return console.error("Error : failed to parse JSON data . please check the JSON format.");

    }
    if (!Array.isArray(data)) {

        return console.error("Error :Data is not array. please check the JSON structure");
        
    }
        
}





export function validDataUserInput(name: string, phone: number): boolean {
    if (!name || isNaN(phone)) {
        console.error('Error : both name and a valid phone number must be provided');
        return false
    }
    return true
}





export function validDataDeleteInput(name: string): boolean {
    if (!name) {
        console.error('Error : a valid name must be provided for deletion.');
        return false
    }
    return true
}