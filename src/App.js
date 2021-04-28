import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Weather from './components/Weather'
import Home from './components/Home'


function App() {
  return (
    
    <BrowserRouter>

    <Route exact path="/" component={Home} />
    <Route exact path="/weather" component={Weather} />
    
    </BrowserRouter>
  );
}

export default App;
