let array = [1, 2, 4, 8, 16];
for (let item of array) {
  //console.log(item); // Logs 1, 2, 4, 8, 16
}
//console.log('Loop ended')

for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);    
}

let favSongs =[
    {song:'Da art of Storytelling Part 2', artist:'Outkast', price: 100},
    {song:'Out Loud', artist:'Red Morrow', price: 100},
    {song:'passenger', artist:'deftones', price: 100},
    {song:'barney theme', artist:'barney', price: 100},
    {song:'September', artist:'Earth Wind and Fire', price: 100},
    {song:'Thousand Miles', artist:'Vanessa Carlton', price: 100},
    {song:'Thriller', artist:'Michael Jackson', price: 100},
]


function getPlaylistPrice(playlist){
    let total = 0;
    for (const item of playlist) {
        total += item.price;
    }
    console.log(`Total Cost of playlist: ${total}`);
}

getPlaylistPrice(favSongs);
for (const item of favSongs) {
    //console.log(`${item.song} by ${item.artist}`);    
}

for (let i = 0; i < favSongs.length; i++) {
   // console.log(`${favSongs[i].song} by ${favSongs[i].artist}`);
}

//Destructure array
let [firstSong, secondSong, ...otherSongs] = favSongs
console.log(firstSong, secondSong);
console.log(favSongs[4]);
console.log(otherSongs);
