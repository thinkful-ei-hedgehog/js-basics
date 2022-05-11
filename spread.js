const littleYacht = {
    "Dock Name": "oceania",
    floorColor: "red",
    christened: false,
    hornSound: "Ride of the Walkeries",
    playHorn() {
        console.log(littleYacht.hornSound);
    }
};

const littleYacht2 = {
    roofColor: "green",  // new key, will be added
    christened: true     // duplicate key, will be overwritten
};

const newYacht = { ...littleYacht, ...littleYacht2 };
console.log(newYacht);



let userBob = {
    username:'bobbin',
    password: 'password',
    isAdmin: true,
    oldPhotos:['bob1.jpg']

}
let userBobOther = {
    username:'bobbin',
    password: 'password',
    isAdmin:false,
    isSuperAdmin:true,
    oldphotos:true,
}

let newBobAccount = {...userBob, ...userBobOther, isInFBJail:true};
console.log(newBobAccount)


