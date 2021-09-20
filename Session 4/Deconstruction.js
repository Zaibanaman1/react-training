
// Destructure the following object to extract firstname and the 'second' likes itemconst 
// user = { person: { employee: { firstname: "Rahul" }, likes: ["Cycling", "Hiking", "Driving"] } }



const user = { person:
    { employee: {
       firstname: "Rahul" 
     },
        likes: ["Cycling", "Hiking", "Driving"] 
       } 
       }
 
 let {person:{employee:{firstname:fname},likes:[,secondlike]}}  = user
 console.log(fname,secondlike)