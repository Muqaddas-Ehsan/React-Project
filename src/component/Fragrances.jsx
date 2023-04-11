import { Link } from "react-router-dom";
import "../css/Newarrival.css";

import fr1 from "../images/fr1.webp";
import fr7 from "../images/fr7.webp";
import s4 from "../images/s4.webp";
import a19 from "../images/a19.webp";
function Fragrances() {
    return (
        <div>

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <img src={s4} alt="error" className="img-fluid" />
                    </div>
                </div>
            </div>

             {/* ================  vard below fragrence image =================== */}

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Accessoriescart8">
                                <div className="img_new">
                                    <img src={a19} alt="error" className="img-fluid" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3">LOVE POTION <small style={{fontSize:11}}>Rs4,000 PKR</small></p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Fragrancescart1">
                                <div className="img_new">
                                    <img src={fr1} alt="error" className="img-fluid" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3">ENCHANTED ROSE <small style={{fontSize:11}}>Rs4,500 PKR</small></p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Fragrancescart2">
                                <div className="img_new">
                                    <img src={fr7} alt="error" className="img-fluid" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3">TWINLIGHT BREW <small style={{fontSize:11}}>Rs4,000 PKR</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fragrances;