const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Öz Blog</h1>
            <div className="links">
                <a href="/">Anasayfa</a>
                <a href="/create" style={{
                    color: 'white',
                    backgroundColor: '#ff793f',
                    borderRadius: '8px'
                }}>Yeni Yazı</a>
            </div>
        </nav>
    );
}

export default Navbar;