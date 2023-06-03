
function show(){
    let main = document.querySelector('.main');
    
    
      let hi = localStorage.getItem("dict");
      hi=JSON.parse(hi);
   
    let htmlCode = ``;
    hi.forEach((part) => {
        htmlCode = htmlCode+`
        <div class="card">
        <h3 class="word-heading">word: </h3><span class="actual-word">${part.wordi}</span>
                    <p class="mean">${part.meani}</p>
                    <button class="delete-btn"><i class="fa-solid fa-trash-can"></i></button>
    </div>`
    });
    main.innerHTML = htmlCode;
                
            }

            show();


            let btn = document.getElementsByClassName("delete-btn");
            // console.log(btn)
            for(let i=0;i<btn.length;i++){
         btn[i].addEventListener("click", function(event){
  event.target.parentElement.parentElement.remove();
let tar=event.target.parentElement.previousElementSibling.previousElementSibling.innerHTML;
console.log(tar)
let hi = localStorage.getItem("dict");
hi=JSON.parse(hi);
let index = hi.findIndex(h => h.wordi == tar)
// console.log(index)
hi.splice(index,1)
localStorage.setItem("dict", JSON.stringify(hi))
         })}
         