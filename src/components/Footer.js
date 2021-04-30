import {
  FaInstagram,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="">
      <nav
        className="navbar fixed-bottom navbar-light bg-light d-flex justify-content-between"
        style={{ opacity: ".7" }}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div className='d-flex'>
            <h6 className="m-0 text-dark"> ANGELO RAIMONDI: </h6>
            <a
              href="https://www.instagram.com/raimondiangelo/"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;
              <FaInstagram className="h3 mx-1 my-0 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.facebook.com/ang.raimondi"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="h3 mx-1 my-0" />
              &nbsp;
            </a>
            <a
              href="https://github.com/AngeloRai"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h3 mx-1 my-0 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.linkedin.com/in/angelo-raimondi-b521031/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h3 mx-1 my-0" />
              &nbsp;
            </a>
          </div>
          <div className='d-flex'>
            <h6>SAMUEL FONSECA </h6>
            <a href="https://www.instagram.com/sam_fonsecatr/" target="_blank" rel="noreferrer">
              &nbsp;
              <FaInstagram className="h3 mx-1 my-0 text-dark" />
              &nbsp;
            </a>
            <a href="https://www.facebook.com/samfonsecatr/" target="_blank" rel="noreferrer">
              <FaFacebookSquare className="h3 mx-1" />
              &nbsp;
            </a>
            <a
              href="https://github.com/samuelbatista3rios?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h3 mx-1 my-0 text-dark" />
              &nbsp;
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-fonseca-0289a6121/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h3 my-0 mx-1" />
              &nbsp;
            </a>
          </div>
        </div>
        <p className=" m-0">
         <small>
            Developed by: <strong>Angelo Raimondi</strong> &{" "}
            <strong>Samuel Fonseca</strong>
         </small>
        </p>
        <p className=" m-0">
          <small>© 2020 Copyright:
          AngeloRaimondi/SamuelFonseca</small>
        </p>
      </nav>
    </div>
  );
}

export default Footer;


