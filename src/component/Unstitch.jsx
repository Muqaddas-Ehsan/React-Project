import "../css/Unstitch.css";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import u1 from "../images/u1.webp";
import u2 from "../images/u2.webp";
import u3 from "../images/u3.webp";
import u4 from "../images/u4.webp";
import u5 from "../images/u5.webp";
import u6 from "../images/u6.webp";
import u7 from "../images/u7.webp";
import u8 from "../images/u8.webp";
import u9 from "../images/u9.webp";
import u10 from "../images/u10.webp";
import u11 from "../images/u11.webp";
import u12 from "../images/u12.webp";
import u13 from "../images/u13.webp";
import u14 from "../images/u14.webp";
import u15 from "../images/u15.webp";
import u16 from "../images/u16.webp";
import u17 from "../images/u17.webp";
import u18 from "../images/u18.webp";
import u19 from "../images/u19.webp";
function Unstitch() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    return (
        <div>
            {/* ====================== multiple cards ====================== */}

            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="img">
                                <img
                                    src={u2} alt="error" style={{ height: 450, width: 312 }} />
                                <img
                                    src={u4} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div class="carousel-inner">
                                                                    <div class="carousel-item active">
                                                                        <img class="d-block w-100" src={u1} alt="First slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u2} alt="Second slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u3} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u4} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u5} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                </div>
                                                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Previous</span>
                                                                </a>
                                                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Next</span>
                                                                </a>

                                                                <div className="small-img-group d-flex justify-content-between">
                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u2} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u3} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u4} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u5} alt="error" />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                                                    <h6 className="mt-3 text-dark font-weight-bold">MAUVE HUE-3PC PRINTED LAWN SUIT</h6>
                                                                    <h6 className="text-left ml-3 text-dark">₨ 4,750 <small>PKR</small></h6>

                                                                </div>

                                                                {/* ===========================  Quantity item ========================= */}
                                                                <div className="row mt-3">
                                                                    <h6 className="ml-4 text-left text-dark">Quantity</h6>
                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => setCount(count + 1)}>+</button>
                                                                    </div>

                                                                    <div className="col-md-1 text-dark ml-3 mt-2">
                                                                        {count}
                                                                    </div>

                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => {
                                                                            if (count > 0) {
                                                                                setCount(count - 1)
                                                                            }
                                                                            else {
                                                                                setCount(0)
                                                                            }
                                                                        }
                                                                        }>-</button>
                                                                    </div>
                                                                    <Link to="#">
                                                                        <button className="btn text-white mt-3" style={{ backgroundColor: "#000000" }}>ADD TO CART</button>
                                                                    </Link>
                                                                </div>

                                                                {/* =================== product details =================== */}

                                                                <div className="product_details mt-3 text-dark" style={{ fontFamily: "Century Gothic, sans-serif", fontSize: 10 }}>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 14 }}>PRODUCT DETAILS</p>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 12 }}>UNSTITCH 3PC:</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>SHIRT</h6>
                                                                    <p className="ml-4 text-left">DIGITAL PRINTED LAWN SHIRT</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>TROUSER</h6>
                                                                    <p className="ml-4 text-left">DYED CAMBRIC TROUSER</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>DUPATTA</h6>
                                                                    <p className="ml-4 text-left">CHIFFON DIGITAL PRINTED DUPPATA</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="add btn text-white" data-toggle="modal" data-target="#exampleModalCenter1">Add to cart</button>

                            </div>
                        </div>
                        <h6>MAUVE HUE-3PC PRINTED LAWN SUIT</h6>
                        <p className="text-start ml-3">Rs4,750 PKR</p>
                        <button className="btn d-flex align-start">UNSTITCH</button>
                    </div>

                    {/* =============================== next card ========================= */}

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img">
                                <img
                                    src={u6} alt="error" style={{ height: 450, width: 312 }} />
                                <img
                                    src={u9} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div class="carousel-inner">
                                                                    <div class="carousel-item active">
                                                                        <img class="d-block w-100" src={u6} alt="First slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u7} alt="Second slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u8} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u9} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                </div>
                                                                <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Previous</span>
                                                                </a>
                                                                <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Next</span>
                                                                </a>

                                                                <div className="small-img-group d-flex justify-content-between">
                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u6} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u7} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u8} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u9} alt="error" />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                                                    <h6 className="mt-3 text-dark font-weight-bold">CHALKY MUSTARD-3PC PRINTED LAWN SUIT</h6>
                                                                    <h6 className="text-left ml-3 text-dark">₨ 3,950 <small>PKR</small></h6>

                                                                </div>

                                                                {/* ===========================  Quantity item ========================= */}
                                                                <div className="row mt-3">
                                                                    <h6 className="ml-4 text-left text-dark">Quantity</h6>
                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => setCount1(count1 + 1)}>+</button>
                                                                    </div>

                                                                    <div className="col-md-1 text-dark ml-3 mt-2">
                                                                        {count1}
                                                                    </div>

                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => {
                                                                            if (count1 > 0) {
                                                                                setCount1(count1 - 1)
                                                                            }
                                                                            else {
                                                                                setCount1(0)
                                                                            }
                                                                        }
                                                                        }>-</button>
                                                                    </div>
                                                                    <Link to="">
                                                                        <button className="btn text-white mt-3" style={{ backgroundColor: "#000000" }}>ADD TO CART</button>
                                                                    </Link>
                                                                </div>

                                                                {/* =================== product details =================== */}

                                                                <div className="product_details mt-3 text-dark" style={{ fontFamily: "Century Gothic, sans-serif", fontSize: 10 }}>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 14 }}>PRODUCT DETAILS</p>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 12 }}>UNSTITCH 3PC:</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>SHIRT</h6>
                                                                    <p className="ml-4 text-left">DIGITAL PRINTED LAWN SHIRT</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>TROUSER</h6>
                                                                    <p className="ml-4 text-left">DYED CAMBRIC TROUSER</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>DUPATTA</h6>
                                                                    <p className="ml-4 text-left">LAWN DIGITAL PRINTED DUPPATA</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="add btn text-white" data-toggle="modal" data-target="#exampleModalCenter2">Add to cart</button>
                            </div>
                        </div>
                        <h6>CHALKY MUSTARD-3PC PRINTED LAWN</h6>
                        <p className="text-start ml-3">Rs3,950 PKR</p>
                        <button className="btn d-flex align-start">UNSTITCH</button>
                    </div>

                    {/* =============================== next card 2 ========================= */}

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img">
                                <img
                                    src={u10} alt="error" style={{ height: 450, width: 312 }} />
                                <img
                                    src={u13} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div class="carousel-inner">
                                                                    <div class="carousel-item active">
                                                                        <img class="d-block w-100" src={u10} alt="First slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u11} alt="Second slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u12} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u13} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u14} alt="Third slide" style={{ height: 350 }} />
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

                                                                <div className="small-img-group d-flex justify-content-between">
                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u11} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u12} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u13} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u14} alt="error" />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                                                    <h6 className="mt-3 text-dark font-weight-bold">SEPAL BLUSH-4PC</h6>
                                                                    <h6 className="text-left ml-3 text-dark">₨ 12,500 <small>PKR</small></h6>

                                                                </div>

                                                                {/* ===========================  Quantity item ========================= */}
                                                                <div className="row mt-3">
                                                                    <h6 className="ml-4 text-left text-dark">Quantity</h6>
                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => setCount2(count2 + 1)}>+</button>
                                                                    </div>

                                                                    <div className="col-md-1 text-dark ml-3 mt-2">
                                                                        {count2}
                                                                    </div>

                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => {
                                                                            if (count2 > 0) {
                                                                                setCount2(count2 - 1)
                                                                            }
                                                                            else {
                                                                                setCount2(0)
                                                                            }
                                                                        }
                                                                        }>-</button>
                                                                    </div>
                                                                    <Link to="#">
                                                                        <button className="btn text-white mt-3" style={{ backgroundColor: "#000000" }}>ADD TO CART</button>
                                                                    </Link>
                                                                </div>

                                                                {/* =================== product details =================== */}

                                                                <div className="product_details mt-3 text-dark" style={{ fontFamily: "Century Gothic, sans-serif", fontSize: 10 }}>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 14 }}>PRODUCT DETAILS</p>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 12 }}>UNSTITCH 4PC:</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>SHIRT</h6>
                                                                    <p className="ml-4 text-left">ORGANZA EMBROIDERED SHIRT FRONT PANEL <br />2 SIDE PANELS <br />BACK AND SLEEVES</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>TROUSER</h6>
                                                                    <p className="ml-4 text-left">RAWSILK DYED TROUSER</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>DUPATTA</h6>
                                                                    <p className="ml-4 text-left">ORGANZA DIGITAL PRINTED AND EMBROIDERED DUPATTA</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>SLIP</h6>
                                                                    <p className="ml-4 text-left">DYED COTTON SILK</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="add btn text-white" data-toggle="modal" data-target="#exampleModalCenter3">Add to cart</button>
                            </div>
                        </div>
                        <h6>SEPAL BLUSH-4PC</h6>
                        <p className="text-start ml-3">Rs12,500 PKR</p>
                        <button className="btn d-flex align-start">UNSTITCH</button>
                    </div>


                    {/* =============================== next card 3 ========================= */}

                    <div className="col-md-3">
                        <div className="card">
                            <div className="img">
                                <img
                                    src={u15} alt="error" style={{ height: 450, width: 312 }} />
                                <img
                                    src={u18} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                {/* <!-- Modal --> */}
                                <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div id="carouselExampleControls3" class="carousel slide" data-ride="carousel">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div class="carousel-inner">
                                                                    <div class="carousel-item active">
                                                                        <img class="d-block w-100" src={u15} alt="First slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u16} alt="Second slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u17} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u18} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <img class="d-block w-100" src={u19} alt="Third slide" style={{ height: 350 }} />
                                                                    </div>
                                                                </div>
                                                                <a class="carousel-control-prev" href="#carouselExampleControls3" role="button" data-slide="prev">
                                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Previous</span>
                                                                </a>
                                                                <a class="carousel-control-next" href="#carouselExampleControls3" role="button" data-slide="next">
                                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                    <span class="sr-only">Next</span>
                                                                </a>

                                                                <div className="small-img-group d-flex justify-content-between">
                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u16} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u17} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u18} alt="error" />
                                                                    </div>

                                                                    <div className="small-img-col mt-2">
                                                                        <img className="img-fluid small-img" id="small" src={u19} alt="error" />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                                                    <h6 className="mt-3 text-dark font-weight-bold">CARMINE BLOOM-2PC (SHIRT & DUPATTA)</h6>
                                                                    <h6 className="text-left ml-3 text-dark">₨ 12,500 <small>PKR</small></h6>

                                                                </div>

                                                                {/* ===========================  Quantity item ========================= */}
                                                                <div className="row mt-3">
                                                                    <h6 className="ml-4 text-left text-dark">Quantity</h6>
                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => setCount3(count3 + 1)}>+</button>
                                                                    </div>

                                                                    <div className="col-md-1 text-dark ml-3 mt-2">
                                                                        {count3}
                                                                    </div>

                                                                    <div className="col-md-2">
                                                                        <button className="btn font-weight-bold text-white mt-2" style={{ backgroundColor: "rgba(201, 9, 9, 1)" }} onClick={() => {
                                                                            if (count3 > 0) {
                                                                                setCount3(count3 - 1)
                                                                            }
                                                                            else {
                                                                                setCount3(0)
                                                                            }
                                                                        }
                                                                        }>-</button>
                                                                    </div>
                                                                    <Link to="#">
                                                                        <button className="btn text-white mt-3" style={{ backgroundColor: "#000000" }}>ADD TO CART</button>
                                                                    </Link>
                                                                </div>

                                                                {/* =================== product details =================== */}

                                                                <div className="product_details mt-3 text-dark" style={{ fontFamily: "Century Gothic, sans-serif", fontSize: 10 }}>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 14 }}>PRODUCT DETAILS</p>
                                                                    <p className="ml-4 text-left font-weight-bold" style={{ fontSize: 12 }}>UNSTITCH 2PC:</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>SHIRT</h6>
                                                                    <p className="ml-4 text-left">CARMINE BLOOM-2PC (SHIRT & DUPATTA) <br />FABRIC VELVET <br />FRONT SEQUIN EMBROIDERED</p>
                                                                    <h6 className="ml-4 text-left font-weight-bold" style={{ fontSize: 13 }}>DUPATTA</h6>
                                                                    <p className="ml-4 text-left">POLY ORGANZA SEQUIN EMBROIDERED DUPATTA</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="add btn text-white" data-toggle="modal" data-target="#exampleModalCenter4">Add to cart</button>
                            </div>
                        </div>
                        <h6>CARMINE BLOOM-2PC (SHIRT & DUPATTA)</h6>
                        <p className="text-start ml-3">Rs12,500 PKR</p>
                        <button className="btn d-flex align-start">UNSTITCH</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Unstitch;