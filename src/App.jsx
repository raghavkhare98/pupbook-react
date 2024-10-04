//creating a component here

import Header from "./components/Header";

const App = () =>{

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
    <Header />
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