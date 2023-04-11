import "../css/Cart.css";
import React, { useState } from "react";
import a35 from "../images/a35.webp";
import a36 from "../images/a36.webp";
import a37 from "../images/a37.webp";
import a38 from "../images/a38.webp";
import a39 from "../images/a39.webp";
function Accessoriescart12() {
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
                                        <img class="d-block w-100" src={a35} alt="First slide" style={{ height: 750 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={a36} alt="Second slide" style={{ height: 750 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={a37} alt="Third slide" style={{ height: 750 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={a38} alt="Third slide" style={{ height: 750 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={a39} alt="Third slide" style={{ height: 750 }} />
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
                                <h3 className="mt-3">PLUMP LIP CAPSULE MASK JAR-30 CAPSULES</h3>
                                <h4 className="text-left ml-3">₨ 2,790 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000118870</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0320ACCCOS0113</p>
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
                                <h6 className="ml-4 text-left">Instantly hydrates dry, chapped lips and gradually makes the lips plumper and fuller.</h6>
                                <h4 className="ml-4 text-left">HOW TO USE</h4>
                                <p className="ml-4 text-left">Twist off the tip of a heart-shaped lip plumping capsule. Squeeze some amount of serum onto a fingertip. Apply the serum to the lips. TIP! One capsule contains a sufficient amount of serum to share with friends and family (2 to 4 treatments available for each capsule)</p>
                                <h4 className="ml-4 text-left">INGREDIENTS</h4>
                                <p className="ml-4 text-left">Hydrogenated Polyisobutene, Simmondsia Chinensis (Jojoba) Seed Oil, Argania Spinosa Kernel Oil, Anemarrhena Asphodeloides Root Extract, Tocopheryl Acetate, Vanillyl Butyl Ether, Adenosine, Olea Europaea (Olive) Fruit Oil, Limnanthes Alba (Meadowfoam) Seed Oil, Camellia Japonica Seed Oil, Hydrogenated Lecithin, Glycerin, Polyglyceryl-10 Oleate, Water, Dipropylene Glycol, Phenoxyethanol, Fragrance</p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Accessoriescart12;