import GreyDiv from "./components/GreyDiv";
import Header from "./components/Header";
import RandomInfo from "./components/RandomInfo";
import BlueBox from "./components/BlueBox";
const App = () =>{

  return (
    <>
    <Header />
    <RandomInfo />
    <GreyDiv />
    <BlueBox />
    <div className="footer">
        <p>Copyright &#169 The Odin Project 2024</p>
    </div>  
    </>
  );
};

export default App;