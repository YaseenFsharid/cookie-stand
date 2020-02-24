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
    someAboutTheCus: function(){
       for (var i = 0;i<hours.length;i++){
        var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.customerPerHour.push(cusPerHou);   
        var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
        this.cookiePerHour.push(cokPerHou);

        this.total +=this.total+this.cookiePerHour[i];
       } 
          
    },
    RenderThat:function(){
    this.someAboutTheCus();
    var container = document.getElementById("dd");
    var aric = document.createElement('article');
     container.appendChild(aric);
     var h =document.createElement('h2');
    h.textContent=this.name;
    aric.appendChild(h); 
    var ulist =document.createElement('ul');
    ulist.setAttribute("class","csswork");
    aric.appendChild(ulist);
    for (var i = 0; i < hours.length;i++ ) {
        var litem=document.createElement('li');
        ulist.appendChild(litem); 
        litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
    }
    litem.textContent=`Total : ${this.total}`;
    }

}
Seattle.RenderThat();



var Tokyo ={
    name :"Tokyo",
    customerPerHour:[],
    cookiePerHour:[],
    min :3,
    max:24,
    avg:1.2,
    total:0,
    someAboutTheCus: function(){
       for (var i = 0;i<hours.length;i++){
        var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.customerPerHour.push(cusPerHou);   
        var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
        this.cookiePerHour.push(cokPerHou);

        this.total +=this.total+this.cookiePerHour[i];
       } 
          
    },
    RenderThat:function(){
    this.someAboutTheCus();
    var container = document.getElementById("dd");
    var aric = document.createElement('article');
     container.appendChild(aric);
     var h =document.createElement('h2');
    h.textContent=this.name;
    aric.appendChild(h); 
    var ulist =document.createElement('ul');
    ulist.setAttribute("class","csswork");
    aric.appendChild(ulist);
    for (var i = 0; i < hours.length;i++ ) {
        var litem=document.createElement('li');
        ulist.appendChild(litem); 
        litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
    }
    litem.textContent=`Total : ${this.total}`;
    }

}
Tokyo.RenderThat();

var Dubai ={
    name :"Dubai",
    customerPerHour:[],
    cookiePerHour:[],
    min :11,
    max:38,
    avg:3.7,
    total:0,
    someAboutTheCus: function(){
       for (var i = 0;i<hours.length;i++){
        var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.customerPerHour.push(cusPerHou);   
        var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
        this.cookiePerHour.push(cokPerHou);

        this.total +=this.total+this.cookiePerHour[i];
       } 
          
    },
    RenderThat:function(){
    this.someAboutTheCus();
    var container = document.getElementById("dd");
    var aric = document.createElement('article');
     container.appendChild(aric);
     var h =document.createElement('h2');
    h.textContent=this.name;
    aric.appendChild(h); 
    var ulist =document.createElement('ul');
    ulist.setAttribute("class","csswork");
    aric.appendChild(ulist);
    for (var i = 0; i < hours.length;i++ ) {
        var litem=document.createElement('li');
        ulist.appendChild(litem); 
        litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
    }
    litem.textContent=`Total : ${this.total}`;
    }

}
Dubai.RenderThat();

var Paris ={
    name :"Paris",
    customerPerHour:[],
    cookiePerHour:[],
    min :20,
    max:38,
    avg:2.3,
    total:0,
    someAboutTheCus: function(){
       for (var i = 0;i<hours.length;i++){
        var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.customerPerHour.push(cusPerHou);   
        var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
        this.cookiePerHour.push(cokPerHou);

        this.total +=this.total+this.cookiePerHour[i];
       } 
          
    },
    RenderThat:function(){
    this.someAboutTheCus();
    var container = document.getElementById("dd");
    var aric = document.createElement('article');
     container.appendChild(aric);
     var h =document.createElement('h2');
    h.textContent=this.name;
    aric.appendChild(h); 
    var ulist =document.createElement('ul');
    ulist.setAttribute("class","csswork");   
    aric.appendChild(ulist);
    for (var i = 0; i < hours.length;i++ ) {
        var litem=document.createElement('li');
        ulist.appendChild(litem); 
        litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
    }
    litem.textContent=`Total : ${this.total}`;
    }

}
Paris.RenderThat();


var Lima ={
    name :"Lima",
    customerPerHour:[],
    cookiePerHour:[],
    min :3,
    max:24,
    avg:1.2,
    total:0,
    someAboutTheCus: function(){
       for (var i = 0;i<hours.length;i++){
        var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
        this.customerPerHour.push(cusPerHou);   
        var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
        this.cookiePerHour.push(cokPerHou);

        this.total +=this.total+this.cookiePerHour[i];
       } 
          
    },
    RenderThat:function(){
    this.someAboutTheCus();
    var container = document.getElementById("dd");
    var aric = document.createElement('article');
     container.appendChild(aric);
     var h =document.createElement('h2');
    h.textContent=this.name;
    aric.appendChild(h); 
    var ulist =document.createElement('ul');
    ulist.setAttribute("class","csswork");
    aric.appendChild(ulist);
    for (var i = 0; i < hours.length;i++ ) {
        var litem=document.createElement('li');
        ulist.appendChild(litem); 
        litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
    }
    litem.textContent=`Total : ${this.total}`;
    }

}
Lima.RenderThat();





