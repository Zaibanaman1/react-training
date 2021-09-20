// Write a function which camelizes input wordExample:camelize("background-color")
//  should output 'backgroundColor';camelize("list-style-image") 
// should output 'listStyleImage';camelize("-webkit-transition")
//  should output 'WebkitTransition';


function Camelize(str) {
    let str2 = str.split("")
 
    for(i=0;i<str.length;i++){
      if(str2[i]==="-"){
        str2[i]=str2[i+1].toUpperCase()
        str2.splice(i+1,1)
   
        
       
      }
     
    }
    str2  = str2.toString()
    
    return str2.replaceAll(",","")
    
   
 }
 
 
 console.log(Camelize("list-style-image"))
 