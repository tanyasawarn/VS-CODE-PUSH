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
/*var newDiv=document.createElement('div');
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
  */
 
var form = document.getElementById('addForm');
 var itemList= =document.getElementById('items');
 var filter=document.getElementById('filter');


 //form submit event
 form.addEventListener('submit',addItem);
 //delete event
 itemList.addEventListener('click',removeItem);

 //filter 
 filter.addEventListener('keyup',filterItems);

 //Add item
 function addItem(e)
 {
    e.prevenDefault();
//get input value

var newItem=document.getElementById('item').value;
//create li element
var li= document.createElement('li');

//add class
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newItem));


itemList.appendChild(li);

var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  //remove item
  function removeItem(e)
  {
    if(e.target.classList.contains('delete'))
    {
      if(confirm('Are you sure'))
      {
        var li=e.target.parentElements;
        itemList.removeChild(li);
      }
    }
  }

 }

 //function filter items
 function filterItems()
 {
  //convert text to lower text
  var text=e.target.value.toLowerCase();

  var items=itemList.getElementsByTagName('li');

  //convert to array from html collection
  Array.from(items).forEach(function(item){
  
     var itemName=item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text)!=-1)
     {
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }
  });

 }