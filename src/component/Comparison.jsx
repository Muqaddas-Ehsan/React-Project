
import "../css/Comparison.css";

function Comparison(props){
    return(
        <div>
             <div className="heading1 mt-5">
                <h1 className="font-weight-bold text-left ml-5" style={{ fontFamily: "Oswald", color: "#333333", fontSize: 30 }}> <span className="mr-2">{props.span1}</span>{props.heading1}</h1>
            </div><hr />

            <div className="paragraph">
                <p className="text-left ml-5">{props.pera1}</p>
                <button class="btn text-white text-center d-flex align-left ml-5" style={{ backgroundColor: "rgba(201, 9, 9, 1)", paddingLeft: 600, paddingRight: 600 }}>
                        <a href="#" className="text-white"></a>{props.button1}</button>
            </div>
        </div>
    );
}

export default Comparison;