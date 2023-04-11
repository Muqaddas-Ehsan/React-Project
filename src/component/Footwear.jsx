import "../css/Footwear.css"
import { Link } from "react-router-dom";
import sh1 from "../images/sh1.webp";
import sh2 from "../images/sh2.webp";
import sh5 from "../images/sh5.webp";
import sh6 from "../images/sh6.webp";
import sh9 from "../images/sh9.webp";
import sh10 from "../images/sh10.webp";
import sh13 from "../images/sh13.webp";
import sh14 from "../images/sh14.webp";
import sh17 from "../images/sh17.webp";
import sh18 from "../images/sh18.webp";
import sh20 from "../images/sh20.webp";
import sh21 from "../images/sh21.webp";
import sh24 from "../images/sh24.webp";
import sh25 from "../images/sh25.webp";
import sh28 from "../images/sh28.webp";
import sh29 from "../images/sh29.webp";
import sh32 from "../images/sh32.webp";
import sh33 from "../images/sh33.webp";
function Footwear(){

    return(
        <div>
              <div className="container">
              <h1 className="mt-2" style={{ fontFamily: "Oswald" }}>More To Explore</h1>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Footwearcart1">
                            <div className="img">         
                            <img src={sh1} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh2} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>ALORA<br />Rs3,550 PKR</p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart2">
                            <div className="img">        
                            <img src={sh5} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh6} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link> 
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>CLAIRE-2<br />Rs4,950 PKR</p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart3">
                            <div className="img">          
                            <img src={sh9} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh10} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>AMBER-1-FLATS<br />Rs2,240 PKR</p>
                    </div>
                </div>
              </div>

              {/* ============================================== */}

              <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart4">
                           <div className="img">            
                            <img src={sh13} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh14} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>EVANDER-2<br />Rs 3,410 PKR</p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart5">
                            <div className="img">        
                            <img src={sh17} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh18} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>AMELIA-1-FLATS<br />Rs 1,910 PKR</p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart6">
                            <div className="img">          
                            <img src={sh20} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh21} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>SCARLETT-1<br />Rs 4,950 PKR</p>
                    </div>
                </div>
              </div>

              {/* ========================================================= */}

              <div className="container">
               <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart7">
                            <div className="img">
                            <img src={sh24} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh25} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>LUKE-1<br />Rs 4,160 PKR</p>
                    </div>

                    <div className="col-md-4">

                        <div className="card border-0">
                        <Link to="/Footwearcart8">
                            <div className="img">        
                            <img src={sh28} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh29} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>KENNA-2<br />Rs 2,300 PKR</p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                        <Link to="/Footwearcart9">
                            <div className="img">          
                            <img src={sh32} alt="error" style={{ height: 450, width: 356 }} />
                            <img src={sh33} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 356 }} />
                            <button className="add btn text-white">Add to cart</button>
                            </div>
                        </Link>
                        </div>
                        <p className="text-left ml-3" style={{ fontSize: 12 }}>HONEY-1<br />Rs 2,370 PKR</p>
                    </div>
                </div>
              </div>
        </div>
    )
}

export default Footwear;