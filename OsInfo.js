var osObj=require('os');

var cpusLen = osObj.cpus().length;
console.log("No of CPU's (or Number of Cores) :" + cpusLen);

var totalMemory = osObj.totalmem();
console.log("Total PhysicalMemory:" + totalMemory);

var networkInterfaces = osObj.networkinterfaces();
console.log("Network Interfaces List on this system "+networkInterfaces);


var currentOsArchitecture = osObj.arch();
console.log("Current OS Architecture");

