import './Home.css';
import resumePDF from '../../images/SuryaResume68.pdf'

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <div className="hello_name">
          <div className="hello">
            <span>Hello There, I'm </span>
          </div>

          <div className="name">
            <span>SURYA</span>
          </div>
        </div>

        <div className="role">
          <h1>I AM AN</h1>
          <h1>ENGINEER</h1>
        </div>

        <div className="docs">
          <a href={resumePDF} download className="resume">
            <button>RESUME</button>
          </a>
          <a href="mailto:suryakyadav171@gmail.com" className="email">
            <span>EMAIL</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
