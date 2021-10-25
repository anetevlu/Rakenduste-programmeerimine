import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';
import AdminHome from './pages/AdminHome';
import SingleItem from './pages/SingleItem';

function App() {
  return (
    <div>
      <Navbar />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart' exact>
        <Cart />
      </Route>
      <Route path='/add-item' exact>
        <AddItem />
      </Route>  
      <Route path='/categories' exact>
          <Categories />
      </Route>   
      <Route path='/add-category' exact>
        <AddCategory />
      </Route>
      <Route path='/admin' exact>
        <AdminHome />
      </Route>
      <Route path='/item/:itemId'>
        <SingleItem />
      </Route>
    </div>
  );
}

export default App;
