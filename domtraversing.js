var form = document.getElementById('addForm');
 var itemList= =document.getElementById('items');

 //form submit event
 form.addEventListener('submit',addItem);

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

 }