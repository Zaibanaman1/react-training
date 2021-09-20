
var buttons = document.querySelectorAll("button")
var result =  document.getElementById("rs")
console.log(buttons)

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        value = this.dataset.value
        if(value == "+" || value == "-" || value == "/" || value == "*" || value == "%" || value < 10 ){
            
            display(value)
        }

       else if(this.dataset.value=="CE"){
            
                    clear()
       }

       else if(this.dataset.value=="del"){
           
                    del()

       }
       
       else{

           evaluate()
       }

    })
}

function del(){
   var expression = result.value

    result.value = expression.substring(0, expression.length - 1)
}

function display(value){
   
    result.value += value
   
}

function evaluate(){
    var expression = result.value
    try{

        result.value = eval(expression)
    }
    catch{
        result.value = "invalid expression"
    }
}
   

function clear(){
    result.value = ""
}