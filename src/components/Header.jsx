
function Header() {
    return (
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #ddd'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#2e7d32' }}>
          PureGlow
        </h1>
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
          <a href="#ingredients" style={{ textDecoration: 'none', color: '#333' }}>Ingredients</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
        </nav>
      </header>
    );
  }
  
  export default Header;
  