function createCat({name, color}) {
    //const color = getRandomColor();
   // let {name, color} = props
    return {
      eyes: 2,
      legs: 4,
      name,     // same as name: name
      color // same as color: color
    };
  }

function getRandomColor(){
    return 'blue';
}
 let catProps = {
     name:'tabby', color:'blue'
 } 
  const myCat = createCat(catProps);
  console.log(myCat);