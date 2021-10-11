import InputField from './components/InputField';
import Item from './components/Item';
import List from './components/List';
import React from 'react';
import usePersistanceState from './hooks/usePersistanceState';
import usePrevious from './hooks/usePrevious'
import react from 'react';

function App() {
 
  const [search,setSearch] = usePersistanceState()
  const previousSearch = usePrevious(search)
  let first = react.useRef(true)
  
  React.useEffect(()=>{
    if(first.current){
        first.current = false
        return;
    };
    console.log(search)
},)
  const[Stories,setStories] = React.useState([ {
    title:"redux",
    url:"https://redux.js.org/",
    author:"Dan abramov",
    createdat:"11-02-11 16:47:35,98",
    Object_id:0,
    poits:4,
    num_comments:7,

  },
  {
    title:"react",
    url:"https://react.org/",
    author:"Jordan walke",
    createdat:"11-02-11 16:47:35,98",
    Object_id:1,
    poits:5,
    num_comments:2,
  },
  {
    title:"react components",
    url:"https://react.org/",
    author:"Jordan walke",
    createdat:"11-02-11 16:37:35,98",
    Object_id:1,
    poits:5,
    num_comments:2,
  },
  {
    title:"react hooks",
    url:"https://react.org/",
    author:"Jordan walke",
    createdat:"11-02-11 16:37:35,98",
    Object_id:1,
    poits:5,
    num_comments:2,
  }])

  const uniquetimes = Array.from(new Set(Stories.map(a => a.createdat))).map(createdat => {
   return Stories.find(a => a.createdat === createdat)
 })



  const handleSearch =(e)=>{
   
    setSearch(e.target.value)
 
   }

  const filteredStories  = Stories.filter((story)=>story.title.includes(search) )

  console.log(filteredStories)
  return (
    
    <div className="App">
      <h1>My stories </h1>
     <InputField id="1" type="text" value={search} handleChange={handleSearch}>Search : </InputField> 
     <button onClick={handleSearch}>search</button>
      <h3>searching for :{search}</h3>
      <h4>previously searched: {previousSearch}</h4>
      <List  stories={filteredStories} Component={Item}></List>
    </div>
  );
}

export default App;
