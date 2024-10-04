const Header = () => {
    
    const heroTextPStyle = {
        color: "#F9FaF8", 
        fontSize: "48px",
        margin: "0px",
        fontWeight: "bolder"
      }

    return(
        <>
        <div className="header-and-hero">
        <div className="header-flex">
            <h2>Pupbook</h2>
            <ul style={{listStyle: "none"}}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="hero-flex">
            <div className="hero-text-section">
                <p style={heroTextPStyle}>This website is pawsome</p>
                <p>Pupbook is a social media service for puppers where they can chat, share images, host events or request treatos!</p>
                <button>Sign up</button>
            </div>
            <img src="./resources/hero-img.jpg" alt="Pupbook introduction image" width="600px" height="280px"/>
        </div>
    </div>
        </>
    )
}

export default Header;