//creating a component here
const App = () =>{
  
  const heroTextPStyle = {
    color: "#F9FaF8", 
    fontSize: "48px",
    margin: "0px",
    fontWeight: "bolder"
  }

  const randomInfoDivStyle = {
    textAlign: "center",
    marginTop: "48px", 
    fontSize: "36px",
    fontWeight: "bolder",
    color: "#1F2937"
  }

  const greyDivStyle = {
    marginTop: "180px", 
    fontSize: "36px",
    fontStyle: "italic", 
    fontWeight: "100",
    color: "#1F2937"
  }

  const greyDivStyleThor = {
    fontSize: "24px",
    textAlign: "end", 
    marginBottom: "120px",
    fontWeight: "bold"
  }

  const blueBoxDivStyle = {
    margin: "80px 80p",
    padding: "8px 120px", 
    backgroundColor: "#3882F6", 
    borderRadius: "4px"
  }

  const blueBoxDivStyleTwo = {
    color: "#F9FaF8",
    display: "flex",
    flexDirection: "column", 
    padding: "24px 36px"
  }

  const blueBoxDivPOneStyle = {
    marginBottom: "0",
    fontSize: "24px",
    fontWeight: "bolder"
  }

  const blueBoxDivPTwoStyle = {
    marginTop: "0",
    color: "#E5E7EB"
  }

  return (
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
    <div className="random-info-div" style={{padding: "8px 120px"}}>
        <p style={randomInfoDivStyle}>Current Pupbook users.</p>
        <div className="cards">
            <div className="card">
                <img src="./resources/pup-1.jpg" alt="pupper 1" width="200px" height="200px" style={{borderRadius: "12px"}}/>
                <p style={{textAlign: "center"}}>Hi! My name is Pupper and I'm a corgi</p>
            </div>    
            <div className="card">
                <img src="./resources/pup-2.jpg" alt="pupper 2" width="200px" height="200px" style={{borderRadius: "12px"}}/>
                <p style={{textAlign: "center"}}>Hi! My name is Upper and I'm a smol bean</p>
            </div>    
            <div className="card">
                <img src="./resources/pup-3.jpg" alt="pupper 3" width="200px" height="200px" style={{borderRadius: "12px"}}/>
                <p style={{textAlign: "center"}}>Hi! My name is doge and I'm a Shiba Inu</p>
            </div>
            <div className="card">
                <img src="./resources/pup-4.jpg" alt="pupper 4" width="200px" height="200px" style={{borderRadius: "12px"}}/>
                <p style={{textAlign: "center"}}>Hi! My name is Windy and I'm a pomeranian</p>
            </div>        
        </div>
    </div>
    <div className="grey-div">
        <p style={greyDivStyle}>
            I love using Pupbook! All my friends use Pupbook and invite me for parties using pupbook! It's also a place where us dogs can bitch(hehe) about our owners.
        </p>
        <p style={greyDivStyleThor}>
            -Thor, God of Thunder
        </p>
    </div>
    <div className="blue-box-div" style={blueBoxDivStyle}>
        <div style={blueBoxDivStyleTwo}>
            <p style={blueBoxDivPOneStyle}>Call to action! It's time!</p>
            <p style={blueBoxDivPTwoStyle}>Sign up for our product by clicking that button right over there</p>
        </div>
        <button>Sign up</button>
    </div>    
    <div className="footer">
        <p>Copyright &#169 The Odin Project 2024</p>
    </div>  
    </>
  );
};

export default App;