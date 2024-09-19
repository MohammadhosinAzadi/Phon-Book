import { UserListType } from "./mainFile";




export function errorHandle(rawData: any, data: UserListType[]): void {

    try {
        rawData;
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

    
    try {
        data;
    } catch (error) {
        console.error("Error : failed to parse JSON data . please check the JSON format.");
        process.exit(1)
    }
    if (!Array.isArray(data)) {
        console.error("Error :Data is not array. please check the JSON structure");
    }
        
}