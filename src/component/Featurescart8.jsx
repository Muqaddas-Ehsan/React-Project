import "../css/Cart.css";
import React, { useState } from "react";
import fc36 from "../images/fc36.webp";
import fc37 from "../images/fc37.webp";
import fc38 from "../images/fc38.webp";
import fc39 from "../images/fc39.webp";
import fc40 from "../images/fc40.webp";
function Featuredcart8() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img className="img-fluid pb-3" src={fc36} alt="error" id="MainImg" />

                            <div className="small-img-group d-flex justify-content-between">
                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc37} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc38} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc39} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc40} alt="error" />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h3 className="mt-3">GARLAND BLOOM-3PC-EMBRIODERED KHADDAR SUIT</h3>
                                <h4 className="text-left ml-3">₨ 3,860 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000124345</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>KHADDAR</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>TEAL</p>
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
                                <p className="ml-4 text-left">DYED EMBROIDERED KHADDAR FRONT AND SLEEVES<br /> DIGITAL PRINTED BACK</p>
                                <h6 className="ml-4 text-left font-weight-bold">TROUSER</h6>
                                <p className="ml-4 text-left">DYED KHADDAR TROUSER</p>
                                <h6 className="ml-4 text-left font-weight-bold">SHAWL</h6>
                                <p className="ml-4 text-left">KHADDAR DIGITAL PRINTED SHAWL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featuredcart8;