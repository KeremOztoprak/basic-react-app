import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Öz Blog</h1>
            <div className="links">
                <Link to="/">Anasayfa</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#ff793f',
                    borderRadius: '8px'
                }}>Yeni Yazı</Link>
            </div>
        </nav>
    );
}

export default Navbar;