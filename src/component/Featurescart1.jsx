import "../css/Cart.css";
import React, { useState } from "react";
import fc1 from "../images/fc1.webp";
import fc2 from "../images/fc2.jpg";
import fc3 from "../images/fc3.webp";
import fc4 from "../images/fc4.webp";
import fc5 from "../images/fc5.webp";
function Featuredcart() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img className="img-fluid pb-3" src={fc1} alt="error" id="MainImg" />

                            <div className="small-img-group d-flex justify-content-between">
                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc2} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc3} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc4} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={fc5} alt="error" />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h3 className="mt-3">LAVENDER ELARA-3PC LAWN EMBRIODERED SUIT</h3>
                                <h4 className="text-left ml-3">₨ 7,950 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000125437</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>LAWN</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>MINT</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>EMBROIDERED</p>
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
                                <p className="ml-4 text-left">LAWN EMBRIODERED SHIRT FRONT, BACK AND SLEEVES <br /> 1 EMBRIODERED NECKLINE </p>
                                <h6 className="ml-4 text-left font-weight-bold">TROUSER</h6>
                                <p className="ml-4 text-left">CAMBRIC DYED TROUSER</p>
                                <h6 className="ml-4 text-left font-weight-bold">DUPATTA</h6>
                                <p className="ml-4 text-left">SHIFFON EMBRIODERED DUPATTA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Featuredcart;