import Search from './components/Search'
import Item from './components/Item';
import List from './components/List';
import React from 'react';
import Groupby from './components/Groupby';





function App() {
 
  const [search,setSearch] = React.useState("")
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

 console.log("umm",uniquetimes)

  const handleSearch =(e)=>{
   
    setSearch(e.target.value)
 
   }
  const filteredStories  = Stories.filter((story)=>story.title.includes(search) ||story.createdat.includes(search) )

  
  return (
    
    <div className="App">
      <h1>My stories</h1>
      <Search onSearch={handleSearch}/>
      <List  stories={filteredStories} Component={Item}></List>
      <Groupby onSort={handleSearch} uniqueitems={uniquetimes} />
    </div>
  );
}

export default App;
