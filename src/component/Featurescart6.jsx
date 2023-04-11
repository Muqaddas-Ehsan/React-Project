import "../css/Cart.css";
import React, { useState } from "react";
import fc26 from "../images/fc26.webp";
import fc27 from "../images/fc27.webp";
import fc28 from "../images/fc28.webp";
import fc29 from "../images/fc29.webp";
import fc30 from "../images/fc30.webp";
function Featuredcart6() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img className="img-fluid pb-3" src={fc26} alt="error" id="MainImg" />

                            <div className="small-img-group d-flex justify-content-between">
                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc27} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc28} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc29} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc30} alt="error" />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h3 className="mt-3">CRIMSON AURA-3PC- EMBRIODERED KHADDAR SUIT</h3>
                                <h4 className="text-left ml-3">₨ 4,380 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000124343</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>KHADDAR</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>RED</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>EMBRIODERED</p>
                                <h6 className="text-left ml-4">Size</h6>
                                <button className="btn d-flex align-start ml-4 text-white" style={{ backgroundColor: "#000000" }}>UNSTITCH</button>

                            </div>

                            {/* ===========================  Quantity item ========================= */}
                            <div className="row mt-3">
                                <h5 className="ml-4 text-left">Quantity</h5>
                                <div className="col-md-2">
                                    <button className="btn font-weight-bold text-white" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => setCount(count + 1)}>+</button>
                                </div>

                                <div className="col-md-1">
                                    {count}
                                </div>

                                <div className="col-md-2">
                                    <button className="btn font-weight-bold text-white" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => {
                                        if (count > 0) {
                                            setCount(count - 1)
                                        }
                                        else {
                                            setCount(0)
                                        }
                                    }
                                    }>-</button>
                                </div>

                                <div className="col-md-4">
                                    <button className="btn text-white px-5" style={{ backgroundColor: "#000000" }}>ADD TO CART</button>
                                </div>
                            </div>
                            {/* =========================== */}
                            {/* =================== product details =================== */}

                            <div className="product_details mt-3" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h4 className="ml-4 text-left">PRODUCT DETAILS</h4>
                                <h5 className="ml-4 text-left font-weight-bold">UNSTITCH 3PC:</h5>
                                <h6 className="ml-4 text-left font-weight-bold">SHIRT</h6>
                                <p className="ml-4 text-left">DYED EMBROIDERED KHADDAR FRONT AND SLEEVES
                                 <br /> DIGITAL PRINTED BACK <br /> 1 EMBROIDERED NECKLINE</p>
                                <h6 className="ml-4 text-left font-weight-bold">TROUSER</h6>
                                <p className="ml-4 text-left">DYED KHADDAR TROUSER</p>
                                <h6 className="ml-4 text-left font-weight-bold">SHAWL</h6>
                                <p className="ml-4 text-left">EMBRIODERED SHAWL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featuredcart6;