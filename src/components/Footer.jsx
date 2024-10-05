const Footer = (symbol) => {
    return(
        <div className="footer">
            <p>Copyright {symbol} The Odin Project 2024</p> {/* The props is the argument of the function and the .symbol is the prop which we have passed in the App.jsx file */}
        </div>
    );
}

/* To structure the arguments/proper properly, we wrote the prop name and then passed the prop in it's relevant place. Another undesired
approach is to just give the argument props like this (props) and the place where props has to passed we do {props.propName}*/

export default Footer;