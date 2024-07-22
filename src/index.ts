console.log("hello world");

console.log("languach typeScript");

let age = 18;
if (age < 20) {
    age = age + 20
    console.log(age);
    
}




let num: number = 123456789;
let str: string = "salam"; 
console.log(num);
console.log(str);



let number1: [string, number] = ['mohamad', 2]

console.log(number1[0].length);

console.log(number1.push('heydar'));//bug in typeScript
console.log(number1);


enum Color {
    Red = "red",
    Blue = "blue",
    Green = "green",
    Yellow = "yellow",
    Orange = "orange",
}

function colorType(color:Color) {
    if (color === Color.Orange) {
        console.log(`${color} is not my favorite color `);     
    }else {
        console.log('that is good');
        
    }
}

colorType(Color.Orange)




enum Days {
    Sunday,
    Monday,
    Tuesday,
    wednesday,
    Thutsday,
    Friday,
    Saturday
}

function weekend(day: Days): Boolean {
    return day === Days.Friday || day === Days.Sunday;
}

console.log(weekend(Days.Monday));
console.log(weekend(Days.Thutsday));



function calculat(num : number) {
    if (num < 10_000)  {
        return num + 1001
    }
}

console.log(calculat(5000));
console.log(calculat(120_000));




//Personalized types

type Person = {
    readonly age: number,
    name: string
}


let person: Person = {
    age : 19,
    name : 'mphammd hosin',
}




//union types

let height: (string | number)[] = [189, '185', '177', 166];

console.log(height[0]);
console.log(height[1]);




//inter section types
//I didn't understand and I'm just writing the syntax to look at it later

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox : UIWidget = {
    drag: () => {},
    resize: () => {}
}




//literal types

type Metric = 'cm' | 'ench' | 'matr';

let metr: Metric = 'cm';




//nullable types









 















 






 


