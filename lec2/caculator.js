let inp= document.querySelector('input')
let btn= document.querySelectorAll('button')
for(let button of btn){
    button.addEventListener('click',(e)=>{
        let text= e.target.innerText
        if(text=='C'){
            inp.value=''
        }
        else if(text === '='){
            inp.value= eval(inp.value)
        }
        else{
            inp.value+=text
        }
    })
}