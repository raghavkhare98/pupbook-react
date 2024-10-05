import GreyDiv from "./components/GreyDiv";
import Header from "./components/Header";
import RandomInfo from "./components/RandomInfo";
import BlueBox from "./components/BlueBox";
import Footer from "./components/Footer";

const App = () =>{

  return (
    <>
    <Header />
    <RandomInfo />
    <GreyDiv />
    <BlueBox />
    <Footer symbol="&copy;"/> {/* The symbol is a props which is basically an argument. This argument was defined/placed in the Footer component */}
    </>
  );
};

export default App;