function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
  }

let i = 0;
let colors = ['#5C469C','red', '#FF6000','#B3005E','#009FBD','#8F43EE'];

function changeColor(){
    document.getElementById("year").style.color = colors[i];
    i = (i + 1) % colors.length;
}

setInterval(changeColor, 3000);

function changeTimeColor(){
    document.getElementById("txt").style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}

setInterval(changeTimeColor, 1000);


function lcolor(){
const list1 = document.querySelectorAll("li");
for(let j=0;j<3;j++)
    {
    list1[j].style.backgroundColor='green';
    }
for(let j=3;j<5;j++)
    {
    list1[j].style.backgroundColor='yellow';
    list1[j].style.color='black';
    }
for(let j=5;j<=6;j++)
    {
    list1[j].style.backgroundColor='red';
    }


}
