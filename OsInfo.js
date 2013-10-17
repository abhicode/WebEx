var osObj=require('os');

var cpusLen = osObj.cpus().length;
console.log("No of CPU's (or Number of Cores) :" + cpusLen);

var totalMemory = osObj.totalmem();
console.log("Total PhysicalMemory:" + totalMemory);

var networkInterfaces = osObj.networkInterfaces();
console.log("Network Interfaces List on this system "+networkInterfaces);


var currentOsArchitecture = osObj.arch();
console.log("Current OS Architecture" + currentOsArchitecture);

var currentOsEndOfLine = osObj.EOL;
console.log("Current OS End Of line" + currentOsEndOfLine);

var currentOsEndiannes = osObj.endianness();
console.log("Current SYstem Endianness type" + currentOsEndinness);

var freeMem = osObj.freemem();
console.log("Current Total Free Physical Mem : "+freeMem);

var hostname = osObj.hostname();
console.log("System Host Name : " + hostname);

var loadAvg = osObj.loadavg();
console.log("Current Avg Load : " + loadAvg);

var platform = osObj.platform();
console.log("Current System OS Platform : "+platform);

var release = osObj.release();
console.log("OS Release Version : " + release);

var tempdir = osObj.tmpdir();
console.log("Current temporary Dir : "+tempdir);

var osType = osObj.type();
console.log("OS Type  : " + osType);

var uptime = osObj.uptime();
console.log("System Up Time : "+uptime + "Seconds");




