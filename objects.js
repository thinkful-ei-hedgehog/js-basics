let phone={
    carrier:'Verizon',
    brand: 'Samsung',
    model: 'Galaxy',
    is5G:true,
    phoneNumbers:['555-1234','555-5678'],
    imei: 46764564,
    devOptions:{
        enabled: true,
        debug: false
    }
}
let {carrier, brand, model }= phone;
let {devOptions:{enabled}} = phone;
//let enabled=phone.devOptions.enabled;
console.log(enabled);
//console.log(Object.keys(phone)); //gets all keys
//console.log(Object.values(phone)); // gets all values
//console.log('is4G' in phone);  // tests for the existance of a specific key
/*console.log(phone['carrier'])
for (const key in phone) {
  console.log("key", key);  
  if(phone[key] === 46764564){
    console.log("value", phone[key])
  }
}*/


const people = {
    "Lee Finch": { address: "913 Hunts Lane", isCustomer: true },
    "Whitney Shawna": { address: "392 Norfolk Street", isCustomer: false },
    "Gabrielle Mayo": { address: "934 Engert Avenue", isCustomer: false },
  };
  
for (let name in people) {
    const person = people[name];
    const address = person.address;
    console.log(`Sending mail to ${name} at ${address}.`);
  }

let cart ={
    redbull:5.75,
    phone: 50,
    eyedrops:2.32
}
let tempkey = 'redbull'
let redbullCost = cart[tempkey];
let total = 0;
for (const key in cart) {
    console.log(cart[key])
    total+= cart[key];
}
console.log('Total Price', total);