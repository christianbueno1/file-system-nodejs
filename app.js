const f = require('fs');

console.log('begin');
// f.readFile('./data.txt', 'utf-8', (err, data )=>{
//     if (err){
//         console.log(`Error ${err}`);
//     }else{
//         console.log(data);
//     }
// });
let d = f.readFileSync('./data.txt', 'utf-8');
console.log(d);
console.log('end');
//asynchrono
// f.rename('data.txt', 'new-data.txt', (err)=>{
//     if (err) throw err;
//     console.log('was renamed');
// });

f.appendFile('data.txt', '\nThanks pal!', (err)=>{
    if (err) console.log(`Error ${err}`);
});

f.unlink('data2.txt', (err)=>{
    if (err) throw err;
    console.log('deleted!');
});