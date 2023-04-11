import "../css/Cart.css";
import React, { useState } from "react";
import fr1 from "../images/fr1.webp";
import fr2 from "../images/fr2.webp";
import fr3 from "../images/fr3.webp";
import fr4 from "../images/fr4.webp";
import fr5 from "../images/fr5.webp";
import fr6 from "../images/fr6.webp";
import a22 from "../images/a22.webp";

function Fragrancescart1() {
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
        <img class="d-block w-100" src={fr1} alt="First slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr2} alt="Second slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr3} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr4} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr5} alt="Third slide" style={{ height: 750 }} />
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src={fr6} alt="Third slide" style={{ height: 750 }} />
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
                                <h3 className="mt-3">ENCHANTED ROSE</h3>
                                <h4 className="text-left ml-3">₨ 4,500 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000123957</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
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
                                <h6 className="ml-4 text-left font-weight-bold">CROSS STITCH FRAGRANCES PRESENTING “ENCHANTED ROSE”</h6>
                                <p className="ml-4 text-left">EAU DE PARFUM - A delicate and comforting scent a celebration of those looking to leave their mark on the world.
The fragrance contrasts top notes of Rose, Ginger as well as mesmerizing middle notes of Tube Rose, Honeysuckle and Jasmine.
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

export default Fragrancescart1;