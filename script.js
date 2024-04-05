const date = new Date();

const monthh=["January","february","March","April","May","June","July","August","September","October","November","December"];
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById('date').innerHTML=date.getDate();
document.getElementById('day').innerHTML=weekday[date.getDay()];
document.getElementById('month').innerHTML=monthh[date.getMonth()];
document.getElementById('year').innerHTML=date.getFullYear();