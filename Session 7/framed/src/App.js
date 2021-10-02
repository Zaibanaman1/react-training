import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Main  from './components/Main.js';
function App() {
  return (
    <div className="App">
     <Layout Header={Header} Sidebar={Sidebar} Footer={Footer} Main={Main}></Layout>
    </div>
  );
}

export default App;
