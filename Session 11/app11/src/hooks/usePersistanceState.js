import React,{useState,useEffect} from 'react'

const usePersistanceState = ()=>{
    
    const [search,setSearch] = useState(localStorage.getItem("searchterm")||"")
  
    useEffect(()=>{
        localStorage.setItem("searchterm",search);
    },[search])
    
    return [search,setSearch];
  
}


export default usePersistanceState