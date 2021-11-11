import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from 'antd'
import './components/App.css'

import Posts from "./pages/Posts";
import Header from './components/Header'
import Logout from './pages/Logout'
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const { Content } = Layout

function App() {

  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh'}}>
          <Route path="/" component={Header} />
        <Content> 
            <Switch>
              <Route exact path="/" component={Posts} />              
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/logout" component={Logout} />
            </Switch>         
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;