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
//I didn't understand



//type assertion   تاکید برای اینکه تایپ اسکریپت متوجه تایپ مورد نظر بشه

// let phone = document.getElementById('phone') as HTMLLIElement;
// phone.value;




//unknown

function unknownCheck(document: unknown) {
    if (typeof document === 'string') {
        console.log(document);
        
    }
}

unknownCheck('hey');




//Object-Oriented Programming oop

class Building {

    readonly BoardOfDirector: String;
    private _Charge: number;
    help?: number;


    constructor(BoardOfDirector: String, Charge: number) {
        this.BoardOfDirector = BoardOfDirector;
        this._Charge = Charge;
    }

    getCharge(charge: number){
        return this._Charge += charge;
    }
}

let build = new Building('mohammad', 15);
build.getCharge(30);
build.getCharge(30);
console.log(build);




//dynamics propertiess

class SeatAssignment {
    [seatNumber: string]: string; //Index Signature Properties
}

let seatas = new SeatAssignment();

seatas.A1 = 'mohammad';
seatas.A2 = 'solayman';
seatas['A3'] = 'mansoor'; 

console.log(seatas);




//static properties

class Ride { 
    private static _activeRide: number = 0;

    start() {Ride._activeRide ++;}
    stop() {Ride._activeRide --;}


    
    static get activeRide() {
        return Ride._activeRide;
    }


    
}

class Driver extends Ride {

    driverKind(kind: string) {
        if (kind === 'I hope you have a good day sir') {
            super.start();//redefine the method
        }
    }
}



let ride1 = new Ride();
ride1.start();
ride1.start();
ride1.start();
ride1.stop();

let ride2 = new Ride();
ride2.start();
ride2.start();
ride2.start();

console.log(Ride.activeRide);

let driver = new Driver();
driver.driverKind('I hope you have a good day sir');
driver.driverKind('I hope you have a good day sir');
driver.driverKind('I hope you have a good day sir');
console.log(Ride.activeRide);




//abstract class

abstract class Shape {
    constructor(public color: string){}

    abstract circumference (): void;
}

class Circle extends Shape {
    constructor(public radious: number, color: string) {
        super(color);
    }

    override circumference(): number {
        return (this.radious * 2) * 3.14
    }

    shapeCir() {
        console.log(`circumference's circle is ${this.circumference()} and color's circle is ${this.color}`);
        
    }
}

let shapecir = new Circle(20, 'yellow');
console.log(shapecir.shapeCir());

 


//generic class

class KeyValue<T extends boolean | number> {
    constructor(public key: T, public value: string) {}//Instead of using 'any'
}

let pair = new KeyValue (22, '');









 















 






 


