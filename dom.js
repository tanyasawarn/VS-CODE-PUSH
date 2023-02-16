//var header=document.getElementById('main-header');
//headerTitle.style.borderBottom='solid 3px #000';
//var title=document.getElementById('main');
//title.style.fontWeight="900";
//var title1=document.getElementById('main');
//title1.style.color="green";
 //var items=document.getElementsByClassName('list-group-item');
 //items[1].textContent='Hello';
 //items[2].style.backgrounColor= 'green';
 //for(var i=0;i<items.length;i++)
 //{
   // items[i].style.fontWeight= 'bold';
    //items[i].style.fontColor='red';
 //}
 //var li=document.getElementsByTagName('li');
 //li[4].style.backgroundColor= 'yellow';

 //var li=document.getElementsByClassName('list-group-item');
 //li[4].style.fontWeight= 'bold';
 //var seconditem=document.querySelector('.list-group-item:nth-child(2)');
 //seconditem.style.backgroundColor= 'green';

 //var thirdelement=document.querySelector('.list-group-items:nth-child(3)');
 //thirdelement.style.display = "none";
// var itemlist=document.querySelector('#items');
//itemlist.parentNode.style.backgroundColor = '#f4f4f4';
//firstelement child
//itemlist.firstElementChild.textContent = 'hello';
//last child
//itemlist.lastChild.style.color = 'yellow';

//lastelement child
//itemlist.lastElementChild.color = 'red';

//next sibling
//console.log(itemlist.nextSibling);

//nextelement sibling
//console.log(itemlist.nextElementSibling);

//previous sibling
//console.log(itemlist.previousSibling);

//previouselement sibling
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color = 'green';

//creating element
var newDiv=document.createElement('div');
console.log(newDiv);

newDiv.className= 'hello123';

newDiv.id='hello';
//add attribute
newDiv.setAttribute('title', 'hello Div');

//create text node

var newDivText=document.createTextNode('Hello');

//Append text to div

newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
 

console.log(newDiv);

container.insertBefore(newDiv, h1);
  