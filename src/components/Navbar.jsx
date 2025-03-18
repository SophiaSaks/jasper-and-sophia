import './Navbar.css'
import logoWhite from '../assets/logo_white.png'
import burgerWhite from '../assets/hamburger_white.png'
import profileWhite from '../assets/profile_white.png'

function Navbar() {
  return (
    <div className="Navbar">

      <div className="burger">
        <img src={burgerWhite} />
      </div>

      <div className="logo">
        <img src={logoWhite} />
      </div>

      <div className="profile">
        <img src={profileWhite} />
      </div>
      
    </div>
  );
}

export default Navbar;