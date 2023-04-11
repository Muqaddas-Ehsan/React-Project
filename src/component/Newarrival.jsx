
import "../css/Newarrival.css";
import { Link } from "react-router-dom";
import fs5 from "../images/fs5.webp";
import fs2 from "../images/fs2.webp";
import fs6 from "../images/fs6.webp";

function Newarrival(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row mt-5">
                     <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Featurescart5">
                            <div className="img_new">
            <img src={fs5} alt="error" className="img-fluid"/>
                            </div>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">NIGHT BLOOM-2PC KHADDAR PRINTED SUIT</p>
            <p>Rs 2.130 PKR</p>
            </div>
                        </div>
                     </div>

                     {/* ============================ */}

                     <div className="col-md-4">
                     <div className="card border-0">
              <Link to="/Featurescart2">
                <div className="img_new">
            <img src={fs2} alt="error" className="img-fluid"/>
                </div>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">BLOOMING SERENE-3PC LAWN EMBRIODERED SUIT</p>
            <p>Rs 6.950 PKR</p>
            </div>
            </div>
                     </div>

                     {/* ========================= */}

                     <div className="col-md-4">
                     <div className="card border-0">
              <Link to="/Featurescart6">
                <div className="img_new">
            <img src={fs6} alt="error" className="img-fluid"/>
                </div>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">CRIMSON AURA-3PC- EMBRIODERED KHADDAR SUIT</p>
            <p>Rs 4.380 PKR</p>
            </div>
            </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Newarrival;