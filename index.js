const {intersection} = require("lodash");

const busTimes = [2000, 2020, 2040, 2060]
const myAvailableTimes = [1010, 2020, 2030, 2040, 2080]
    
const busTimesThatWork = intersection(busTimes, myAvailableTimes);
    

console.log(busTimesThatWork);



