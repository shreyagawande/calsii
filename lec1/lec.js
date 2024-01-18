// let h1= documamt.getElementaryById('one')

// console.log(h1)

// let h1= document.getElementsByTagName('h1')
// for(let item of h1){
//     item.style.color='red'
// }
// console.log(h1)
// let h1= document,getElementsByClass('h1')
// let h1= document.querySelector('#one')

// console.log(h1)

// let a= document.querySelector('a')

// console.log(a.getAttribute('href'))
// setAttribute('href', 'abc')
// console.log(a.getAttribute('href'))

// const arr=[
// 'https://media.istockphoto.com/id/1148004761/vector/emoticon-fat-realistic-shadows.jpg?s=1024x1024&w=is&k=20&c=moB-wS8mEz9jBz_tSKQMz3gXviaWSBsIDzBrKMFxg7A=',
// 'https://media.istockphoto.com/id/1149072543/vector/emoticon-cute-color-realistic-shadow.jpg?s=1024x1024&w=is&k=20&c=xWgVLlJtV_kHEksogiyPvhC1Xm1pGl01xHGl-lP6LLU=',
// 'https://media.istockphoto.com/id/1147938747/vector/emoticon-color-realistic-shadow.jpg?s=1024x1024&w=is&k=20&c=_mUnl_A1ms8TEFnK4TuKuybGt0EdZgtAh1WFVNDHyV8=',
// 'https://media.istockphoto.com/id/1148004797/vector/emoticon-fat-realistic-shadows.jpg?s=1024x1024&w=is&k=20&c=NGeYPIJTSi1nF7w5-6cQ_hqHQDaLhHd_Bx0WIyxxNpE=',
// 'https://media.istockphoto.com/id/1149072781/vector/emoticon-cute-color-realistic-shadow.jpg?s=1024x1024&w=is&k=20&c=OXQHmztwhz3SO15wqxGyrQAJc_U-78mgWdGBTxYWcwc='
// ]
// const imageEl= document.querySelector('img');
// let  num=0;
// setInterval(function() {
//     imageEl.setAttribute('src', arr[num]);
//  num=(num+1)% arr.length;
// },400);


//  let div= document.querySelector('div')
//  let h1= document.createElement('h1')
//  h1.innerText='Note taking app'
//  div.appendChild(h1)

//  console.log(div)


//Event

//  function fun1(){
//      console.log('helloooo')
 //}

//  let btn = document.querySelector('button')
//   btn.onclick= function(){
//      console.log('Note taking app')
// }

// let btn = document.querySelector('input')
// btn.addEventListener('input', function(e){
//     console.log(e.target.value)
// })
// let btn = document.querySelector('input')
// let div1= document.querySelector('div')
// inp.addEventListener('input',function(e){
//     div1.innerText=e.target.value
// })
// function addItem() {
//     var itemList = document.getElementById("itemList");
//     var newItem = document.createElement("li");
//     newItem.appendChild(document.createTextNode("New Item"));
//     itemList.appendChild(newItem);
// }

// btn.addEventListener('input', function(e){
//     console.log(e.target.value)
// })

// Select input element
const inputE = document.getElementById('title');

// select list element
const listEl = document.getElementById('list');

// select button element
const addButtonEl = document.getElementById('add-button');

// adding "click" event listener on button element
addButtonEl.addEventListener('click', function() {

    // getting the value of the input field
    const titleText = inputE.value;

    // creating and 'li' element and adding inner text
    const li = document.createElement('li');
    li.innerText = titleText;

    // add the newly created li element to the list
    listEl.appendChild(li);

    // clear the input field after adding li to the list
    inputE.value = '';

    // remove li when it is clicked
    li.addEventListener('click', function() {
        li.remove();
    })

})



