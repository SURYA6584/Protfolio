import './Header.css';
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from 'react';
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Import Instagram and LinkedIn icons
import logo from '../images/fest_img.jpg';

const Header = () => {
  const [Nav, setNav] = useState('Nav');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ company: '', email: '', role: '' });

  function handleNav() {
    setNav((prevNav) => (prevNav === 'Nav' ? 'Nav_media' : 'Nav'));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleFormSubmit() {
    const message = `Company: ${formData.company}%0AEmail: ${formData.email}%0ARole: ${formData.role}`;
    const phoneNumber = 918073029928; // Replace with your phone number including country code

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  }

  return (
    <div className="header">
      <div className="logo-menu-container">
        <div className="logo_container">
          <img src={logo} alt="Logo" className="pf_logo" />
          {/* Social media links */}
          <div className="social-links">
            <a href="https://www.instagram.com/surya_k_641/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/surya-k-3b3145208/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
        <div className="menu_container">
          <CgMenuRightAlt onClick={handleNav} className='menu' />
        </div>
      </div>
      <nav className={Nav}>
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#Skills">Skills</a>
        <a href="#Projects">Projects</a>
        <a href="#certificate">Certificates</a>
        <a href="#Achievments">Achievements</a>
      </nav>
      <div>
        <button className='hireme' onClick={() => setShowModal(true)}>
          Hire ME
          <FaSquareArrowUpRight className="hireme-icon" />
        </button>
      </div>

      {/* Modal for input form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Hire Me</h2>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Role:
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleFormSubmit}>Send to WhatsApp</button>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
