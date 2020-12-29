//arr = getAddrArr(303); // сколько адресов
const axios = require('axios');
const fs = require('fs');
const path = 'https://raw.githubusercontent.com/SuppZorr/test/master/allstreets.txt';

let addressArr = ["Leveret","Phyllis Court","Givens","Whitlers Creek","Manwell","Youngheart","East Eaglewood","Barlowe","Comely","Ixias","Seale","N Essington","Wroxton","Quince Tree","Bloxham","Turf Valley","Gallows Branch","Bramblehill","Atherton Oaks","Fredricks","Haigh Moor","Archwood","Wimbleton","Leystone","E Sidney","Teston","Aylesby","Kerman","Leverstock Green","Willeroo","W Caton","Hilldeane","South Harriette","Owasso Heights","Long Rede","Bellsbrae","Luther","Ellerdale","Beffa","Stebbins","Tyrrell","Higher Green","Aldersbrook","Terra Mar","Grams Private","Whitemarsh","Old Pilkington","Ashen Grove","Royd","Galanis","Atwood","Merrals Wood","Arnerich","Silver Crest","Mattawoman Creek","Kara Ann","Flannel","Powells Creek","Marine World","Back Massie","Hampson","Parkers Grove","Old Baltimore","W California","Snug Cove","Brookwood Lye","Correllis","Taviton","Dowdle","Saddleworth","North Emerald","Bigwood","Mike Shapiro","Denos","Goden","Long Close","Mecartney","Firbeck","Saint John’s","Fabor","W Custer","W County Line","Kauri","Guido","Hoppa","Pezzi","Drystraw","Bashford","Bronzewing","Ledford","Castle Rough","Hangar","Freezeout","Slacks","Mascot","Rosenau","Vorden","Guerin","E Anderson","Tekman"]



// async function with axios
// const generateAddressArr = async (quantity) => {
//     const rndInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1) ) + min;};
//     let arr = [];
//     let temp = await axios.get(path)
//     .then(r => r.data.split(`\r\n`))
//     .catch(err => console.log(err));
//      for (i=1; i<=quantity; i++) {
//          let rand = rndInt(0, temp.length);
//          let temp2 = `${temp[rand]} street, ${rndInt(1,50)}, ap ${rndInt(1,100)}`;
//          arr.push(temp2);
//         };  
//      return arr;
// };

// function to create JSON with random addresses
// const writeJSON = (quantity) => {
//     generateAddressArr(quantity).then(r => { 
//         let obj = {};
//         obj.addresses = r;
//         fs.writeFileSync( "listOfAddresses.json", JSON.stringify(obj));
//     });
// };

// writeJSON(303);


// let arrOfaddress;  
// generateAddressArr(303).then(r => arrOfaddress = r);



// sync function simple

const getAddrArr =  (quantity) => {
    const rndInt = (min, max) => {return Math.floor(Math.random() * (max - min + 1) ) + min;};
    let arr = [];
    
     for (i=1; i<=quantity; i++) {
         let rand = rndInt(0, addressArr.length);
         let temp = `${addressArr[rand]} street, ${rndInt(1,50)}, ap ${rndInt(1,100)}`;
         arr.push(temp);
        };
        
    return arr;
};


let x = getAddrArr(10);
console.log(x);