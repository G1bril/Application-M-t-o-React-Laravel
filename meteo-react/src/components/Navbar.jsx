import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Make the logo a clickable NavLink */}
            <NavLink to="/" className="logo">
                Ma météo ☀️
            </NavLink>
            <div className="nav-links">
                <NavLink to="/" className="nav-link" activeclassname="active">
                    Accueil
                </NavLink>
                <NavLink to="/contact" className="nav-link" activeclassname="active">
                    Contact
                </NavLink>
                <NavLink to="/about" className="nav-link" activeclassname="active">
                    À propos
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
