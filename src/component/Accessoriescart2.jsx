import "../css/Cart.css";
import React, { useState } from "react";
import a4 from "../images/a4.webp";
import a5 from "../images/a5.webp";
import a6 from "../images/a6.webp";
function Accessoriescart2() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={a4} alt="First slide" style={{ height: 600 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={a5} alt="Second slide" style={{ height: 600 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={a6} alt="Third slide" style={{ height: 600 }} />
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h3 className="mt-3">AMIRAH DUPATTA</h3>
                                <h4 className="text-left ml-3">₨ 1,680 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000125154</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>NET</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>PURPLE</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>EMBRIODERED</p>
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
                                <h6 className="ml-4 text-left">RAJJO NET SEQUIN EMBROIDERED DUPATTA</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Accessoriescart2;