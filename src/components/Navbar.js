
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light"  style={{opacity: '.5'}}>
        <div className="container-fluid d-flex justify-content-center">
          <Link className="text-secondary mx-5" to={`/`} style={{textDecoration: 'none',}}>
              <h3>HOME</h3>
          </Link>
          <Link className="text-secondary mx-5" to={`/weather`} style={{textDecoration: 'none',}}>
              <h3>WEATHER</h3>
          </Link>
          <Link className="text-secondary mx-5" to={`/news`} style={{textDecoration: 'none',}}>
              <h3>NEWS</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
