import { data, save } from "./fileManager";


function validation():number{
    const phone = parseInt(process.argv[3])
    if(isNaN(phone)){
        throw new Error('Number is invalid!')
    }
    let index:number | undefined
    data.find((record, i) => {
        if(record.phone === phone){
            index = i
            return true
        }
        return false
    })
    if(index === undefined){
        throw new Error('Number is not found!')
    }
    return index
}


export function remove(): any {
    const index = validation()
    data.splice(index, 1)
    save()
}