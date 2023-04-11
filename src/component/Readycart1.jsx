import "../css/Cart.css";
import React, { useState } from "react";
import r1 from "../images/r1.webp";
import r2 from "../images/r2.webp";
import r3 from "../images/r3.webp";
import r4 from "../images/r4.webp";
import r5 from "../images/r5.webp";
import size from "../images/size.webp";
function Readycart1() {
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
                                        <img class="d-block w-100" src={r1} alt="First slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r2} alt="Second slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r3} alt="Third slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r4} alt="Third slide" style={{ height: 850 }} />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={r5} alt="Third slide" style={{ height: 850 }} />
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
                                <h3 className="mt-3">NYLA FREY-2PC (SHIRT & DUPATTA) </h3>
                                <h4 className="text-left ml-3">₨ 5,810 <small>PKR</small></h4>
                                <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000125051</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBLWN0105</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>KHADDAR</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>PURPLE</p>
                                <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>EMBRIODERED</p>
                                <h6 className="text-left ml-4">COLOR  </h6>
                                <button className="btn d-flex align-start ml-4 text-white" style={{ backgroundColor: "#000000" }}>PURPLE</button>
                                <h6 className="text-left ml-4 mt-2">SIZE</h6>
                                <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 350 }}>
                                    <button type="button" class="btn btn-secondary">XS</button>
                                    <button type="button" class="btn ml-2">M</button>
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
                                <h5 className="ml-4 text-left font-weight-bold">UNSTITCH 3PC:</h5>
                                <h6 className="ml-4 text-left font-weight-bold">SHIRT</h6>
                                <p className="ml-4 text-left">STYLE A-LINE <br />FABRIC KHADDAR <br />FRONT EMBROIDERED <br />PLAIN BACK <br />NECKLINE EMBROIDERED AND BUTTONS <br />SLEEVES EMBROIDERED</p>
                                <h6 className="ml-4 text-left font-weight-bold">DUPATTA</h6>
                                <p className="ml-4 text-left">STAPLE WOOLEN EMBROIDERD SHAWL</p>
                                <h6 className="ml-4 text-left font-weight-bold">STYLE TIP</h6>
                                <p className="ml-4 text-left">Nyla frey is an embroidered 2 piece maroon khaddar suit to make you look all royal. Pair it up with Crosstsitch's Luke-II (footwear) and loose curly hair  </p>
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

export default Readycart1;