const GreyDiv = () => {
    
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

    return(
        <div className="grey-div">
            <p style={greyDivStyle}>
                I love using Pupbook! All my friends use Pupbook and invite me for parties using pupbook! It's also a place where us dogs can bitch(hehe) about our owners.
            </p>
            <p style={greyDivStyleThor}>
                -Thor, God of Thunder
            </p>
        </div>
    );
};

export default GreyDiv;