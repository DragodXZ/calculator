(function(){
    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll(".btn");
    console.log(buttons);

    let clear=  document.getElementById("btn1");

    let equal =document.getElementById("btn");
    buttons.forEach(button => {
        button.addEventListener("click", (e)=>{
            let value = e.target.dataset.num
            screen.value += value

        });

        
    });

    equal.addEventListener("click",(e)=>{
       
        if(screen.value !== ''){
            let answer = eval(screen.value)
            screen.value = answer
        }
    })
    clear.addEventListener("click",(e)=>{
    
            screen.value = ''
        
    })

})()