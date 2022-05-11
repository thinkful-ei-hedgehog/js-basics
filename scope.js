const global = "here i am";

function runCode(){
    const local = `I'm local!`;

    console.log(global);
    console.log(local);
}
console.log(global)
runCode();

var oldSchool = true;
console.log("oldSchool",oldSchool)

for(let i =0; i< 5;i++){
    console.log(i);
}
console.log(i)