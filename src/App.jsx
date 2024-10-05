import GreyDiv from "./components/GreyDiv";
import Header from "./components/Header";
import RandomInfo from "./components/RandomInfo";

const App = () =>{

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
    <RandomInfo />
    <GreyDiv />
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