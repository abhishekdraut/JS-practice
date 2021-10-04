var itemOne = document.querySelectorAll(".item")
console.log(itemOne)

itemOne.forEach(element => {
        console.log(element.getAttribute("class"));
    }

)

let itemOneArr=[...itemOne];
console.log(itemOneArr)
for (let each of itemOne){
    console.log(each.className);
}

var stored = document.getElementById("item-1")
console.log(stored);
var parent = stored.parentNode;
console.log(parent)

var newHeading =document.createElement('h1');
console.log(newHeading);
var newtext=document.createTextNode('This is nice header text !');
console.log(newtext)
var obj=newHeading.appendChild(newtext);
console.log(obj)



const body=document.body;
const div=document.createElement('div');
const div2=document.createElement('div');
const div3=document.createElement('div');

div.innerHTML="Hello Abhishek";
body.appendChild(div)

var obj3=document.getElementsByClassName('item-one');
console.log(obj3.innerText);

var first_item=document.querySelector('.item-one');  /* getting the element fisrt from html; */
console.log(first_item)                          /*  Note use queryselector or getbyId Class sometimes Gives Null */
first_item.append("hello")        /* append helps us add two or mmore string inside that child. */

let divOne=document.createElement('div');    /* Creation of element */
divOne.innerHTML="Hello Form child"          /* assiginig some html to that new div child */
first_item.appendChild(divOne)          /*  Adding that child to that div tag */