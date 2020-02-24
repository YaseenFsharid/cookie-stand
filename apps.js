`use strict`
var hours=['6am','7am','8am','9am','10am','11am','12bm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var Seattle ={
    
    name :"Seattle",
    customerPerHour:[],
    cookiePerHour:[],
    min :24,
    max:65,
    avg:6.3,
    total:0,
    CountCutomer: function(){
        var ulist= document.getElementById("bod"); 
        for(var i=0; i<hours.length;i++){
            var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
            this.customerPerHour.push(cusPerHou);
            var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
            this.cookiePerHour.push(cokPerHou);
            this.total=this.total+this.cookiePerHour[i];
            var list=document.createElement('li');
            list.textContent=`${hours[i]} : ${cokPerHou} `
               
             ulist.appendChild(list);
        }
        console.log(this.customerPerHour);
        list.textContent=`total : ${this.total} `;
    }
}

Seattle.CountCutomer();
var Tokyo ={
    
    name :"Tokyo",
    customerPerHour:[],
    cookiePerHour:[],
    min :3,
    max:24,
    avg:1.2,
    total:0,
    CountCutomer: function(){
        var ulist= document.getElementById("bod"); 
        for(var i=0; i<hours.length;i++){
            var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
            this.customerPerHour.push(cusPerHou);
            var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
            this.cookiePerHour.push(cokPerHou);
            this.total=this.total+this.cookiePerHour[i];
            var list=document.createElement('li');
            list.textContent=`${hours[i]} : ${cokPerHou} `
               
             ulist.appendChild(list);
        }
        console.log(this.customerPerHour);
        list.textContent=`total : ${this.total}`;
    }
}
Tokyo.CountCutomer();

var Dubai ={
    
    name :"Dubai",
    customerPerHour:[],
    cookiePerHour:[],
    min :11,
    max:38,
    avg:3.7,
    total:0,
    CountCutomer: function(){
        var ulist= document.getElementById("bod"); 
        for(var i=0; i<hours.length;i++){
            var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
            this.customerPerHour.push(cusPerHou);
            var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
            this.cookiePerHour.push(cokPerHou);
            this.total=this.total+this.cookiePerHour[i];
            var list=document.createElement('li');
            list.textContent=`${hours[i]} : ${cokPerHou} `
               
             ulist.appendChild(list);
        }
        console.log(this.customerPerHour);
        list.textContent=`total : ${this.total}`;
    }
}
Dubai.CountCutomer();
var Paris ={
    
    name :"Paris",
    customerPerHour:[],
    cookiePerHour:[],
    min :20,
    max:38,
    avg:2.3,
    total:0,
    CountCutomer: function(){
        var ulist= document.getElementById("bod"); 
        for(var i=0; i<hours.length;i++){
            var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
            this.customerPerHour.push(cusPerHou);
            var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
            this.cookiePerHour.push(cokPerHou);
            this.total=this.total+this.cookiePerHour[i];
            var list=document.createElement('li');
            list.textContent=`${hours[i]} : ${cokPerHou} `
               
             ulist.appendChild(list);
        }
        console.log(this.customerPerHour);
        list.textContent=`total : ${this.total}`;
    }
}
Paris.CountCutomer();

var Lima ={
    
    name :"Lima",
    customerPerHour:[],
    cookiePerHour:[],
    min :2,
    max:16,
    avg:4.6,
    total:0,
    CountCutomer: function(){
        var ulist= document.getElementById("bod"); 
        for(var i=0; i<hours.length;i++){
            var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
            this.customerPerHour.push(cusPerHou);
            var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
            this.cookiePerHour.push(cokPerHou);
            this.total=this.total+this.cookiePerHour[i];
            var list=document.createElement('li');
            list.textContent=`${hours[i]} : ${cokPerHou} `
               
             ulist.appendChild(list);
        }
        console.log(this.customerPerHour);
        list.textContent=`total : ${this.total}`;
    }
}
Lima.CountCutomer();


