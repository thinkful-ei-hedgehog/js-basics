//Primitives Data Types
const cantchangeme = "stuck";  // cant change after declaration
let changable = 0; // can change at any time (number)

changable="ive been changed"; //string
changable = true; // boolean  true/false
console.log(changable)

//Complex Data types
// Arrays        0         1       2           3           4
const arr = ['Tetris','Mario', 'Fifa', 'Mortal Kombat','Chess' ];
console.log(arr[2])
arr.push('D&D');
// arr='joke';  When declared with const you cannot change its type
console.log(arr)

//Objects
let car = {
    numOfWheels:4,
    color:'Blue',
    isHybrid: false,
    features: ['A/C', '4WD', 'Subwoofer'],
    honk(){
        console.log('Beep Beep!');
    },
    'heated seats':false,
    technology:{
        radio:'Bose',
        cruiseControl:{
            isAdaptive: true
        }
    }
}
console.log('Is adaptive CC', car.technology.cruiseControl.isAdaptive)
console.log('Is adaptive CC', car['technology']['cruiseControl']['isAdaptive']);
console.log(car.technology['cruiseControl'].isAdaptive)
console.log('find4WD', car.features[1]);
console.log(car.features) //Dot notation
console.log(car['features']) //Bracket notation
car.honk();
console.log('heated seats',car['heated seats']);


