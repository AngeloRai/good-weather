
import { Link } from "react-router-dom";
import sunImage from '../sun-food.png'

function Home() {
  return (
    <div className='d-flex align-items-center vh-100'>

    <Link to={`/weather`} style={{textDecoration: 'none',}}>
    <div className='fixed-top w-50 m-5'><img className='w-25'src={sunImage} alt=''/></div>
    </Link>
      <Link to={`/weather`} style={{textDecoration: 'none',}}>
        <div className="home">
          <h1 className="text">
            CHECK OUT THE WEATHER FOR SELECTED CITY <br /> AND READ SOME NEWS ABOUT REST
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Home;
