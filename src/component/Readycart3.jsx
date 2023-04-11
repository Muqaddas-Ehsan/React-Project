import "../css/Cart.css";
import React, { useState } from "react";
import r10 from "../images/r10.webp";
import r11 from "../images/r11.webp";
import r12 from "../images/r12.webp";
import r13 from "../images/r13.webp";
import r14 from "../images/r14.webp";
import size from "../images/size.webp";
function Readycart3() {
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
                                        <img class="d-block w-100" src={r10} alt="First slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r11} alt="Second slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r12} alt="Third slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r13} alt="Third slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r14} alt="Third slide" style={{ height: 850 }} />
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
                                <h3 className="mt-3">SHAHWAR-EMBROIDERED SHIRT </h3>
                                <h4 className="text-left ml-3">₨ 4,890 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000125051</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>ORGANZA</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>GREEN</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>EMBRIODERED</p>
                                <h6 className="text-left ml-4">COLOR  </h6>
                                <button className="btn d-flex align-start ml-4 text-white" style={{ backgroundColor: "#000000" }}>GREEN</button>
                                <h6 className="text-left ml-4 mt-2">SIZE</h6>
                                <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 350 }}>
                                    <button type="button" class="btn btn-secondary">X   L</button>
                                    <button type="button" class="btn ml-2">L</button>
                                    <button type="button" class="btn ml-2">S</button>
                                </div>

                                {/* ============= model ================= */}
                        

                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <img src={size} alt="error" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ============= */}
                            </div>

                            {/* ===========================  Quantity item ========================= */}

                            <div className="row mt-3">
                                <h5 className="ml-4 text-left">Quantity <button type="button" class="btn ml-5" data-toggle="modal" data-target="#exampleModalCenter4">
                                    Size guide
                                </button></h5>
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

                            <div className="product_details mt-3" style={{ fontFamily: "Century Gothic, sans-serif",fontSize:12 }}>
                                <h4 className="ml-4 text-left">PRODUCT DETAILS</h4>
                                <h6 className="ml-4 text-left font-weight-bold">SHIRT</h6>
                                <p className="ml-4 text-left">STYLE LONG A-LINE <br />FABRIC ORGANZA <br />FRONT EMBROIDERED <br />PLAIN BACK <br />NECKLINE EMBROIDERED AND BUTTONS <br />SLEEVES EMBROIDERED</p>
                                <h6 className="ml-4 text-left font-weight-bold">STYLE TIP</h6>
                                <p className="ml-4 text-left">Shahwar is a gorgeous embroidered A-line shirt in a deep green color with patchwork on the hem and neckline. Style it with traditional jhumkas or studs to complete the attire.</p>
                                <h6 className="ml-4 text-left font-weight-bold">SIZE AND FIT</h6>
                                <p className="ml-4 text-left">Model Height: 5'3"  <br /> Model Wears: XS</p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Readycart3;