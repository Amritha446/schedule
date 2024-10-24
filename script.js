/*let timeDiff = 10; 
let minutesToAdd = 60;
let currentDate = new Date("2022-04-10 08:00:00");

for (let i = 0; i < timeDiff; i++) {
  console.log(currentDate.toLocaleTimeString("en-SE", { timeStyle: "short" }));
  currentDate.setMinutes(currentDate.getMinutes() + minutesToAdd);
}*/
var schedule = document.getElementById('schedule');
var hours = 11; 

for (let i = 0; i < hours; i++) {
    var hourLabel = document.createElement('div');
    hourLabel.className = 'hour-label';

    if(i>4){    
        hourLabel.innerText = (i-12) + 8 +':00';
    }
    else{
        hourLabel.innerText = i + 8 +':00';
    }
    
    schedule.appendChild(hourLabel);
}

var array=[{
    start: 0,
    duration: 15,
    title: "Exercise"//8-8.15 //15
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"//8.25-8.55 //55
}, {
    start: 30,
    duration: 30,
    title: "Plan day"//8.30-9.00  //60
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"//9.00-9.15  //75
}, {
    start: 100,
    duration: 15,
    title: "Code review"//9.40-9.55  //115
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"//11-12.30  //270
}, {
    start: 360,
    duration: 30,
    title: "Skype call"//2.00-2.30  //390
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"//2.10-2.55  //415
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"//2.40-3.20  //430
}
];

let con=0;
for(let i=0;i<=array.length-1;i++){
var div = document.createElement("div");
let x=array[i].start;
let y=array[i].duration;
let b=[x+y];   
console.log(b); 
let z=0;                      //(a+b)<array[i].start      x<=array[i+1].duration || array[i+1].duration<array[i-1].duration
if(i<array.length-1 && (x+y)>array[i+1].start ){
    div.style.marginLeft="50%";
    div.style.zIndex=1;
    
    if(con>0){
        div.style.marginLeft="0%";
        div.style.zIndex=0;
    }
    con++;
}
else{
    con=0;
}
div.style.position="absolute";
div.style.width = "95%";
div.style.background = "hsl(207.14deg 47.73% 82.75%)";
div.style.color = "black";
div.style.top=array[i].start+'px';
div.style.height = array[i].duration+'px';
div.innerHTML = array[i].title;
div.style.fontSize='10px';
document.getElementById("main").appendChild(div);

}