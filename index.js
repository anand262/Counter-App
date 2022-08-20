let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// document.getElementById its used for getting id by html for function and var.
//("count-el") is id 

let count = 0
 
function increment(){
    count = count +1
    countEl.innerText = count 
}

function save(){
    let countstr = count + "-"
    saveEl.innerText  =  countstr
    countEl.textContent = 0
    //.textcontent is used for retun on given valu
    count=0
    //console.log(count)
   // document.write(countstr)
}
