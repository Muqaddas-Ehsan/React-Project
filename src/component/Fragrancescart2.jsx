import "../css/Cart.css";
import React, { useState } from "react";
import fr7 from "../images/fr7.webp";
import fr8 from "../images/fr8.webp";
import fr9 from "../images/fr9.webp";
import fr10 from "../images/fr10.webp";
import fr11 from "../images/fr11.webp";
import a22 from "../images/a22.webp";
function Fragrancescart2() {
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
        <img class="d-block w-100" src={fr7} alt="First slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr8} alt="Second slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr9} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr10} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr11} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={a22} alt="Third slide" style={{ height: 750 }} />
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
</a>                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h3 className="mt-3">TWINLIGHT BREW</h3>
                                <h4 className="text-left ml-3">₨ 4,000 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000123958</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>FRAGRANCE</p>
                                <h6 className="text-left ml-4">Size</h6>
                                <button className="btn d-flex align-start ml-4 text-white" style={{ backgroundColor: "#000000" }}>BOTTLE</button>
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
                                <h6 className="ml-4 text-left font-weight-bold">CROSS STITCH FRAGRANCES PRESENTING “TWINLIGHT BREW”</h6>
                                <p className="ml-4 text-left">EAU DE PARFUM-  A strong scent for the strong & independent woman.
The fragrance contrasts top notes of Citrus Fruits, Shinus Molle as well as fresh tones of Osmanthus, Rose and Mosses.
 <br />Available in  -100 ML
</p>
                                <h6 className="ml-4 text-left font-weight-bold">FRAGRANCE FROM ITALY</h6>
                                <h6 className="ml-4 text-left font-weight-bold">FRAGRANCES ARE NOT SHIPPED INTERNATIONALLY DUE TO THE COURIER AND AIRLINE DG POLICY.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fragrancescart2;