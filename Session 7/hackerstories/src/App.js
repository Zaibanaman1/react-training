

import Search from './components/Search'
import Item from './components/Item';
import List from './components/List';



const Stories = [
  {
    title:"redux",
    url:"https://redux.js.org/",
    author:"Dan abramov",
    Object_id:0,
    poits:4,
    num_comments:7,

  },
  {
    title:"react",
    url:"https://react.org/",
    author:"Jordan walke",
    Object_id:1,
    poits:5,
    num_comments:2,
  }
]

function App() {
  return (
    <div className="App">
      <h1>My stories</h1>
      <Search/>
      <List stories={Stories} Component={Item}></List>
    </div>
  );
}

export default App;
