//arr = getAddrArr(303); // сколько адресов
const axios = require('axios');
const fs = require('fs');
const path = 'https://raw.githubusercontent.com/SuppZorr/test/master/allstreets.txt';


const generateAddressArr = async (quantity) => {
    const rndInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1) ) + min;};
    let arr = [];
    let temp = await axios.get(path)
    .then(r => r.data.split(`\r\n`))
    .catch(err => console.log(err));
     for (i=1; i<=quantity; i++) {
         let rand = rndInt(0, temp.length);
         let temp2 = `${temp[rand]} street, ${rndInt(1,50)}, ap ${rndInt(1,100)}`;
         arr.push(temp2);
        };  
     return arr;
};

const writeJSON = (quantity) => {
    generateAddressArr(quantity).then(r => { 
        let obj = {};
        obj.addresses = r;
        fs.writeFileSync( "listOfAddresses.json", JSON.stringify(obj));
    });
};

writeJSON(303);


let arrOfaddress;  
generateAddressArr(303).then(r => arrOfaddress = r);
























    // const addressArr =   (quantity) => {
//     const rndInt = (min, max) => {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//     };
//     let arr = [];
//     let temp = fs.readFileSync('./allstreets.txt', "utf-8").split(`\r\n`);

//      for (i=1; i<=quantity; i++) {
//          let rand = rndInt(0, temp.length);
//          let temp2 = `${temp[rand]} street, ${rndInt(1,50)}, ap ${rndInt(1,100)}`;
//          arr.push(temp2);
//         };  
//      return arr;
// };

// let f = addressArr(500);
// console.log(f);