import "../css/Cart.css";
import React, { useState } from "react";
import a19 from "../images/a19.webp";
import a20 from "../images/a20.webp";
import a21 from "../images/a21.webp";
import a22 from "../images/a22.webp";
import a23 from "../images/a23.webp";
import a24 from "../images/a24.webp";
function Accessoriescart8() {
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
        <img class="d-block w-100" src={a19} alt="First slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={a20} alt="Second slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={a21} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={a22} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={a23} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={a24} alt="Third slide" style={{ height: 750 }} />
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
                                <h3 className="mt-3">LOVE POTION</h3>
                                <h4 className="text-left ml-3">₨ 4,000 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000123959</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>FRAGRANCE</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>BLUE</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>DYED</p>
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
                                <h6 className="ml-4 text-left font-weight-bold">CROSS STITCH FRAGRANCES PRESENTING “LOVE POTION”</h6>
                                <p className="ml-4 text-left">EAU DE PARFUM - A sweet and warm scent for the glamorous you.
The fragrance contrasts top notes of Blackcurrant, Pear, Grapefruit with subtle middle notes of Iris, Jasmine Sambac, Sweet notes and Orange flowers.
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

export default Accessoriescart8;