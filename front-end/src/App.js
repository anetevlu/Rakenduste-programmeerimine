import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/cart' exact>
        <Cart />
      </Route>
      <Route path='/add-item' exact>
        <div>Add-item, mis pole veel valmis</div>
      </Route>
     
    </div>
  );
}

export default App;
