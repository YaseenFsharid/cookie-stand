`use strict`



function getRandomArbitrary(min, max, avg) {
    return Math.floor((Math.random() * (max - min) + min) * avg);
  }
  var totalTotal = 0;
  var timeTotal = [
    ['6am', 0],
    ['7am', 0],
    ['8am', 0],
    ['9am', 0],
    ['10am', 0],
    ['11am', 0],
    ['12pm', 0],
    ['1pm', 0],
    ['2pm', 0],
    ['3pm', 0],
    ['4pm', 0],
    ['5pm', 0],
    ['6pm', 0],
    ['7pm', 0]
  ];

   TimeTotalFetch =function() {
    var div = document.getElementById('sales-tabel');
    var tabel = document.createElement('table');
    tabel.setAttribute('id', 'tabel');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = '  ';
    tr.appendChild(th);
    for (let index = 0; index < timeTotal.length; index++) {
      th = document.createElement('th');
      th.textContent = timeTotal[index][0];
      tr.appendChild(th);
    }
    th = document.createElement('th');
    th.textContent = 'totatl';
    tr.appendChild(th);
    tabel.appendChild(tr);
    div.appendChild(tabel);
  }
  TimeTotalFetch();
  function Loction(name, min, max, avg) {
    this.total = 0;
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookies = [];
  }
  Loction.prototype.randomCustomers = function() {
    for (let index = 0; index < timeTotal.length; index++) {
      this.cookies.push(getRandomArbitrary(this.min, this.max, this.avg));
    }
  };
  Loction.prototype.render = function(){
    this.randomCustomers();
    var tabel = document.getElementById('tabel');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.appendChild(td);
    for (let index = 0; index < this.cookies.length; index++) {
      timeTotal[index][1] += this.cookies[index];
      td = document.createElement('td');
      td.textContent = this.cookies[index];
      tr.appendChild(td);
      this.total += this.cookies[index];
    }
    totalTotal += this.total;
    td = document.createElement('td');
    td.textContent = this.total;
    tr.appendChild(td);
    tabel.appendChild(tr);
  };
  var Seattle = new Loction('Seattle', 23, 65, 6.3);
  Seattle.render();
  var Tokyo = new Loction('Tokyo', 3, 24, 1.2);
  Tokyo.render();
  var Dubai = new Loction('Dubai', 11, 38, 3.7);
  Dubai.render();
  var Paris = new Loction('Paris', 20, 38, 2.3);
  Paris.render();
  var Lima = new Loction('Lima', 2, 16, 4.6);
  Lima.render();
  var salmonForm=document.getElementById("salmonForm");
  salmonForm.addEventListener('submit',function(Event){
  Event.preventDefault();
  var cityname = Event.target.Cityname.value;
  var minimum =Event.target.min.value;
  var maximun=Event.target.max.value;
  var avag =Event.target.avg.value;
  parseFloat(avag);
  if (cityname==''){
    alert("please enter a cityname");
    }
    else if(minimum>maximun)
    {
     alert("please enter a number greater than the maximum");
    }else if(minimum<-1 || maximun<-1 || avag<-1){
      alert("Enter a non negative number");
    }else{
      var NewLoc=new Loction(cityname,minimum,maximun,avag);
      NewLoc.render();
      Totaloftotal();
    }
  
  });
  Totaloftotal =function() {
    var tabel = document.getElementById('tabel');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = 'total';
    tr.appendChild(td);
    for (let index = 0; index < timeTotal.length; index++) {
      td = document.createElement('td');
      td.textContent = timeTotal[index][1];
      tr.appendChild(td);
    }
    td = document.createElement('td');
    td.textContent = totalTotal;
    tr.appendChild(td);
    tabel.appendChild(tr);
} 
  






















// var Seattle ={
//     name :"Seattle",
//     customerPerHour:[],
//     cookiePerHour:[],
//     min :24,
//     max:65,
//     avg:6.3,
//     total:0,
//     someAboutTheCus: function(){
//        for (var i = 0;i<hours.length;i++){
//         var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
//         this.customerPerHour.push(cusPerHou);   
//         var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
//         this.cookiePerHour.push(cokPerHou);

//         this.total +=this.total+this.cookiePerHour[i];
//        } 
          
//     },
//     RenderThat:function(){
//     this.someAboutTheCus();
//     var container = document.getElementById("dd");
//     var aric = document.createElement('article');
//      container.appendChild(aric);
//      var h =document.createElement('h2');
//     h.textContent=this.name;
//     aric.appendChild(h); 
//     var ulist =document.createElement('ul');
//     ulist.setAttribute("class","csswork");
//     aric.appendChild(ulist);
//     for (var i = 0; i < hours.length;i++ ) {
//         var litem=document.createElement('li');
//         ulist.appendChild(litem); 
//         litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
//     }
//     litem.textContent=`Total : ${this.total}`;
//     }

// }
// Seattle.RenderThat();



// var Tokyo ={
//     name :"Tokyo",
//     customerPerHour:[],
//     cookiePerHour:[],
//     min :3,
//     max:24,
//     avg:1.2,
//     total:0,
//     someAboutTheCus: function(){
//        for (var i = 0;i<hours.length;i++){
//         var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
//         this.customerPerHour.push(cusPerHou);   
//         var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
//         this.cookiePerHour.push(cokPerHou);

//         this.total +=this.total+this.cookiePerHour[i];
//        } 
          
//     },
//     RenderThat:function(){
//     this.someAboutTheCus();
//     var container = document.getElementById("dd");
//     var aric = document.createElement('article');
//      container.appendChild(aric);
//      var h =document.createElement('h2');
//     h.textContent=this.name;
//     aric.appendChild(h); 
//     var ulist =document.createElement('ul');
//     ulist.setAttribute("class","csswork");
//     aric.appendChild(ulist);
//     for (var i = 0; i < hours.length;i++ ) {
//         var litem=document.createElement('li');
//         ulist.appendChild(litem); 
//         litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
//     }
//     litem.textContent=`Total : ${this.total}`;
//     }

// }
// Tokyo.RenderThat();

// var Dubai ={
//     name :"Dubai",
//     customerPerHour:[],
//     cookiePerHour:[],
//     min :11,
//     max:38,
//     avg:3.7,
//     total:0,
//     someAboutTheCus: function(){
//        for (var i = 0;i<hours.length;i++){
//         var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
//         this.customerPerHour.push(cusPerHou);   
//         var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
//         this.cookiePerHour.push(cokPerHou);

//         this.total +=this.total+this.cookiePerHour[i];
//        } 
          
//     },
//     RenderThat:function(){
//     this.someAboutTheCus();
//     var container = document.getElementById("dd");
//     var aric = document.createElement('article');
//      container.appendChild(aric);
//      var h =document.createElement('h2');
//     h.textContent=this.name;
//     aric.appendChild(h); 
//     var ulist =document.createElement('ul');
//     ulist.setAttribute("class","csswork");
//     aric.appendChild(ulist);
//     for (var i = 0; i < hours.length;i++ ) {
//         var litem=document.createElement('li');
//         ulist.appendChild(litem); 
//         litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
//     }
//     litem.textContent=`Total : ${this.total}`;
//     }

// }
// Dubai.RenderThat();

// var Paris ={
//     name :"Paris",
//     customerPerHour:[],
//     cookiePerHour:[],
//     min :20,
//     max:38,
//     avg:2.3,
//     total:0,
//     someAboutTheCus: function(){
//        for (var i = 0;i<hours.length;i++){
//         var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
//         this.customerPerHour.push(cusPerHou);   
//         var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
//         this.cookiePerHour.push(cokPerHou);

//         this.total +=this.total+this.cookiePerHour[i];
//        } 
          
//     },
//     RenderThat:function(){
//     this.someAboutTheCus();
//     var container = document.getElementById("dd");
//     var aric = document.createElement('article');
//      container.appendChild(aric);
//      var h =document.createElement('h2');
//     h.textContent=this.name;
//     aric.appendChild(h); 
//     var ulist =document.createElement('ul');
//     ulist.setAttribute("class","csswork");   
//     aric.appendChild(ulist);
//     for (var i = 0; i < hours.length;i++ ) {
//         var litem=document.createElement('li');
//         ulist.appendChild(litem); 
//         litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
//     }
//     litem.textContent=`Total : ${this.total}`;
//     }

// }
// Paris.RenderThat();


// var Lima ={
//     name :"Lima",
//     customerPerHour:[],
//     cookiePerHour:[],
//     min :3,
//     max:24,
//     avg:1.2,
//     total:0,
//     someAboutTheCus: function(){
//        for (var i = 0;i<hours.length;i++){
//         var cusPerHou= Math.floor(Math.random()*(this.max-this.min)+this.min);
//         this.customerPerHour.push(cusPerHou);   
//         var cokPerHou=Math.floor(this.customerPerHour[i]*this.avg);
//         this.cookiePerHour.push(cokPerHou);

//         this.total +=this.total+this.cookiePerHour[i];
//        } 
          
//     },
//     RenderThat:function(){
//     this.someAboutTheCus();
//     var container = document.getElementById("dd");
//     var aric = document.createElement('article');
//      container.appendChild(aric);
//      var h =document.createElement('h2');
//     h.textContent=this.name;
//     aric.appendChild(h); 
//     var ulist =document.createElement('ul');
//     ulist.setAttribute("class","csswork");
//     aric.appendChild(ulist);
//     for (var i = 0; i < hours.length;i++ ) {
//         var litem=document.createElement('li');
//         ulist.appendChild(litem); 
//         litem.textContent=`${hours[i]} : ${this.cookiePerHour[i]} cookies`;
       
//     }
//     litem.textContent=`Total : ${this.total}`;
//     }

// }
// Lima.RenderThat();





