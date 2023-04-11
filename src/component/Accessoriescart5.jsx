import "../css/Cart.css";
import React, { useState } from "react";
import a12 from "../images/a12.jpg";
function Accessoriescart4() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                          <img src={a12} alt="error" style={{ height: 600,width:500 }}/>
                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h3 className="mt-3">SHAWL-SHW0206</h3>
                                <h4 className="text-left ml-3">₨ 1,230 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000121410</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>SHAWL</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>BLUE</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>DYED</p>
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

                            {/* =================== product details =================== */}

                            <div className="product_details mt-3" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h4 className="ml-4 text-left">PRODUCT DETAILS</h4>
                                <h6 className="ml-4 text-left">READY TO WEAR SHAWL</h6>
                                <h6 className="ml-4 text-left font-weight-bold">STYLE TIP</h6>
                                <p className="ml-4 text-left">Solid Woven Shawl in a Gloomy Midnight Blue Shade that can be Worn with Both Western and Eastern Attires. Our Collection of Shawls is Perfect to Keep you Warm and Trendy at the Same Time.</p>
                                <h6 className="ml-4 text-left font-weight-bold">SIZE AND FIT</h6>
                                <p className="ml-4 text-left">Model Height: 5'5" </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Accessoriescart4;