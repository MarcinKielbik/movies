import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Great Movies</Link>
            </div>

            <div className="vavbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>

        </nav>
    )
}

export default Navbar