//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import NavBar from './components/NavBar';
import AddCategory from './pages/AddCategory';
import CategoryList from "../components/CategoryList";


function App() {
  return (
    <div>
      <NavBar/>
      
      good ebening
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='/add-item'>
        <AddItem/>
      </Route>
        <Route path='/add-category'>
            <AddCategory />
        </Route>
    </div>
  );
}

export default App;
