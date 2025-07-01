import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar ">
     <Link to="/" className="navbar-logo">ComplianceApp</Link>
      <div className="navbar-links">
        <Link to="/about">About Us</Link>
        <Link to="/product">Product</Link>
        <Link to="/solutions">Solutions</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/loginSignUp">SignUp</Link>
         <Link to="/login">SignIn</Link>

      </div>
    </nav>
  );
}
