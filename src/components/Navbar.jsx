import './Navbar.css'
import logoWhite from '../assets/logo_white.png'
import burgerWhite from '../assets/hamburger_white.png'
import profileWhite from '../assets/profile_white.png'
import closeCross from '../assets/closeCross.png'

function Navbar({isOpen, setIsOpen}) {
  return (
    <div className="Navbar">

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen? 
         <img src={closeCross} />
        :
        <img src={burgerWhite} />}
       
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