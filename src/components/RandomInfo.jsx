// import 

const RandomInfo = () => {
    
    const randomInfoDivStyle = {
        textAlign: "center",
        marginTop: "48px", 
        fontSize: "36px",
        fontWeight: "bolder",
        color: "#1F2937"
    }

    return(
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
    );
}

export default RandomInfo;