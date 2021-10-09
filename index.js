// var itemOne = document.querySelectorAll(".item")
// console.log(itemOne)

// itemOne.forEach(element => {
//         console.log(element.getAttribute("class"));
//     }

// )

// let itemOneArr=[...itemOne];
// console.log(itemOneArr)
// for (let each of itemOne){
//     console.log(each.className);
// }

// var stored = document.getElementById("item-1")
// console.log(stored);
// var parent = stored.parentNode;
// console.log(parent)

// var newHeading =document.createElement('h1');
// console.log(newHeading);
// var newtext=document.createTextNode('This is nice header text !');
// console.log(newtext)
// var obj=newHeading.appendChild(newtext);
// console.log(obj)



// const body=document.body;
// const div=document.createElement('div');
// const div2=document.createElement('div');
// const div3=document.createElement('div');

// div.innerHTML="Hello Abhishek";
// body.appendChild(div)

// var obj3=document.getElementsByClassName('item-one');
// console.log(obj3.innerText);

// var first_item=document.querySelector('.item-one');  /* getting the element fisrt from html; */
// console.log(first_item)                          /*  Note use queryselector or getbyId Class sometimes Gives Null */
// first_item.append("hello")        /* append helps us add two or mmore string inside that child. */

// let divOne=document.createElement('div');    /* Creation of element */
// divOne.innerHTML="Hello Form child"          /* assiginig some html to that new div child */
// first_item.appendChild(divOne)          /*  Adding that child to that div tag */

// var newnode=document.createElement('div');
// var newnode1=document.createElement('span')
// newnode1.innerHTML="This is new span block added"
// newnode.appendChild(newnode1)
// var parent=first_item.parentNode; 
// console.log(parent)
// parent.insertBefore(newnode,first_item)
// parent.insertAdjacentHTML('afterend','<div><p>thi is before paragraph</p></div>')

// function abhi(greeting, name) {

//     console.log(`Hi my name is ${name} and I am saing ${greeting}`)
// }
// abhi("bunjorn", "abhi")

// var newgreet=(greeting,name)=>{

//     return (`my name is ${name} and ${greeting}`)
// }

// var hi=newgreet("hi",'abhi')
// console.log(hi)



// let arrow_function=(name)=>{
//     return (`my name is ${name}.`)
// };


// let name=arrow_function('abhishek')
// console.log (name)


// const userData = () => ({
//     name: 'Vivek',
//     email: 'vivek@example.com'
//   })

//   console.log(userData());

// const function1=(name)=>({

// name

// })

// let one=function1("abhi")
// console.log(one)


// event handeler

// let child = document.querySelector('.child')
// console.log(child)
// child.addEventListener('click', function(e) {
//     let name='abhi'
//     return(console.log(`${name}`))
// });

// let parant = document.querySelector('.parent')
// console.log(parant)
// parant.addEventListener('click',function(e) {
//     let name='dipak'
//     console.log(e.target)
//     return(console.log(`${name}`))
// });

// function greet(event){
//     var child=document.querySelector('.child')




// }
// let child = document.querySelector('.child')
// child.addEventListener('click',greet());

// let obj1={
//     name:"abhi",
//     age:21



// }
// let obj2={
//     address:"shivajinagr",
//     picode:422401


// }

// Object.setPrototypeOf(obj2,obj1);
// console.log(obj2)
// console.log(obj2.age)



// let abhi = (name, age) => ({
//     name,
//     age,

// })
// let one = abhi("abhi", 21);
// console.log(one)

// =========================================================
// Event listener and propogation
// let child = document.querySelector('.child');
// let parent = child.parentNode;
// let grandparent = parent.parentNode;

// child.addEventListener('click', function (e) {

//         child.style.backgroundColor = "green"
//         console.log("child is clicked")
//         e.preventDefault();    
//     }

// )
// parent.addEventListener('click', function (e) {

//     if (parent.style.backgroundColor=="yellow"){
//         parent.style.backgroundColor = "blue"
//     }
//     else{
//         parent.style.backgroundColor = "green"
//     }
//     console.log("parant is clicked")
    
   
// })



// grandparent.addEventListener('click', function (e) {

//     parent.style.backgroundColor = "red"
//     console.log("grandparent is clicked")


// })

// =================================================


let child= document.querySelector('.child')


let parent=child.parentNode
console.log(parent)
parent.style.backgroundColor ="gold"





child.addEventListener('click', function (e) {

    if (parent.style.backgroundColor=="gold") {
        
        parent.style.backgroundColor ="green"
        console.log("parent color is changed")
    }
    
   
})