import Weather from './components/Weather'
import GooglePlaces from './components/GooglePlaces'

import './App.css';

function App() {
  return (
    <div className='d-flex' style={{background: 'transparent'}}>
    <Weather/>
      {/* <div className="container">
        <GooglePlaces/>
        
        
      </div> */}
    </div>
  );
}

export default App;
