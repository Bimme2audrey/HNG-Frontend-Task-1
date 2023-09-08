const desiredTime = new Date();
desiredTime.setUTCHours(24);
desiredTime.setUTCMinutes(1440);
desiredTime.setUTCSeconds(86400);
desiredTime.setUTCMilliseconds(0);


const timestamp = desiredTime.getTime();

const timeElement = document.getElementById("time");
timeElement.innerHTML = timestamp.toString();

console.log(timestamp);
