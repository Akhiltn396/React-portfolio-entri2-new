import './App.css';
import About from './components/AboutF/About';
import Intro from './components/Introduction/Intro';
import Contact from './components/contact/Contact';
import New from './components/new/New';
import ProductList from './components/productLists/ProductList';

function App() {
  return (
    <div className="App">
{/* <New/> */}
   <Intro />
   <About />
   <ProductList />
   <Contact/>
    </div>
  );
}

export default App;
