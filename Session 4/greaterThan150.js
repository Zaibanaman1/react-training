// Given the following list of items[1,33,99,50,100,150,60,99,1000,999,0,-1,10],
//  write a function which returns an arraythat contains all numbers more than or equal to 150

function arrayfilter(arr){

    let newarr = arr.filter((value)=>value>=150)
    return newarr
  }
  
  
  
  console.log(arrayfilter([1,33,99,50,100,150,60,99,1000,999,0,-1,10]))