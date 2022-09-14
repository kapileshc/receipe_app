import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home.js'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/recipe/:id">
            <Recipe/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
