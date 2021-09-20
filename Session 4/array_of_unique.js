// Find unique items in the arrayfunction unique(arr)
//  { complete this function}
//  let values = ["green", "green", "red", "red",  "yellow", "pink", "pink", "yellow"];
//  console.log("Unique values are", unique(arr));


function unique(arr) {
    let result = []
    arr.sort()
    for(i=0;i<arr.length;i++){
      let vals = arr.filter(word => word===arr[i])
      if(vals.length===1){
        console.log(vals)
        result.push(vals[0])
      }
      }
    
      return result
    }
  
  
  let values = ["green", "green", "red", "red",
    "yellow", "pink", "pink", "yellow","voilet"];
  
  console.log("Unique values are", unique(values))