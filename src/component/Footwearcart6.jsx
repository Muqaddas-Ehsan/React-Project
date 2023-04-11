import "../css/Cart.css";
import React, { useState } from "react";
import sh20 from "../images/sh20.webp";
import sh21 from "../images/sh21.webp";
import sh22 from "../images/sh22.webp";
import sh23 from "../images/sh23.webp";
function Footwearcart6() {
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
                                        <img class="d-block w-100" src={sh20} alt="First slide" style={{ height: 600 }} />
                                    </div>
                                    <div class="carousel-item">
                                       <img class="d-block w-100" src={sh21} alt="Second slide" style={{ height: 600 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={sh22} alt="Third slide" style={{ height: 600 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={sh23} alt="Third slide" style={{ height: 600 }} />
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
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif",fontSize:12 }}>
                                <h3 className="mt-3">SCARLETT-1</h3>
                                <h4 className="text-left ml-3">₨ 4,950 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000124552</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>SHOES</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>METALLIC</p>
                                <h6 className="text-left ml-4">COLOR</h6>
                                <button className="btn d-flex align-start ml-4 text-white" style={{ backgroundColor: "#000000" }}>METALLIC</button>
                                <div class="btn-group mt-3" role="group" aria-label="Basic example" style={{ marginRight: 350 }}>
                                    <button type="button" class="btn text-white" style={{backgroundColor:"#000000",cursor:"pointer"}}>36</button>
                                    <button type="button" class="btn ml-2">37</button>
                                    <button type="button" class="btn ml-2">38</button>
                                    <button type="button" class="btn ml-2">39</button>
                                    <button type="button" class="btn ml-2">40</button>
                                </div>
                            </div>

                            {/* ===========================  Quantity item ========================= */}

                            <div className="row mt-3">
                                <h5 className="ml-4 text-left">Quantity</h5>
                                <div className="col-md-2">
                                    <button className="btn font-weight-bold text-white" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => setCount(count + 1)}>+</button>
                                </div>

                                <div className="col-md-1 mt-1">
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

                            <div className="product_details mt-3" style={{ fontFamily: "Century Gothic, sans-serif",fontSize:12 }}>
                                <h4 className="ml-4 text-left">PRODUCT DETAILS</h4>
                                <h6 className="ml-4 text-left font-weight-bold" ><u>FOOTWEAR</u></h6>
                                <p className="ml-4 text-left">Alora features a mettalic khussa bedazzled to lift your mood as well as your attire with the right dash of pink threadwork</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footwearcart6;