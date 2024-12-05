import './App.css'
import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/Login/index'
import Home from './components/Home/index'
import ProtectedRoute from './components/ProtectedRoute/index'
import NotFound from './components/NotFound/index'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <NotFound />
  </Switch>
)

export default App
