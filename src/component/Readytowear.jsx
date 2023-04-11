import { Link } from "react-router-dom";
import "../css/Accessories.css";
import r1 from "../images/r1.webp";
import r4 from "../images/r4.webp";
import r6 from "../images/r6.webp";
import r9 from "../images/r9.webp";
import r10 from "../images/r10.webp";
import r13 from "../images/r13.webp";
import r15 from "../images/r15.webp";
import r18 from "../images/r18.webp";
import r19 from "../images/r19.webp";
import r22 from "../images/r22.webp";
import r24 from "../images/r24.webp";
import r27 from "../images/r27.webp";
import r28 from "../images/r28.webp";
import r29 from "../images/r29.webp";
import r33 from "../images/r33.webp";
import r36 from "../images/r36.webp";


function Readytowear() {
    return (
        <div>
            <h1 className="mt-2" style={{ fontFamily: "Oswald" }}>More To Explore</h1>
            <div className="container-fluid">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="container-fluid">
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart1">
                                                <div className="img">
                                                    <img src={r1} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r4} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>NYLA FREY-2PC (SHIRT & DUPATTA) <br />Rs5,810 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">M</button>
                                            <button type="button" class="btn ml-2">S</button>
                                        </div>

                                    </div>

                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart2">
                                                <div className="img">
                                                    <img src={r6} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r9} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>PRISTINE WHITE EMBROIDERED SHIRT<br />Rs4,320 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">M</button>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart3">
                                                <div className="img">
                                                    <img src={r10} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r13} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>SHAHWAR-EMBROIDERED SHIRT<br />Rs4,890 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">L</button>
                                            <button type="button" class="btn ml-2">S</button>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart4">
                                                <div className="img">
                                                    <img src={r15} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r18} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>RAVEN ASTRE EMBROIDERED SHIRT<br />Rs3,900 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">L</button>
                                            <button type="button" class="btn ml-2">S</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="carousel-item">
                            <div className="container-fluid">
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart5">
                                                <div className="img">
                                                    <img src={r19} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r22} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>SUNEHRI-3PC (SHIRT, DUPATTA & TROUSER)<br />Rs9,950 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">XS</button>
                                            <button type="button" class="btn ml-2">L</button>
                                            <button type="button" class="btn ml-2">M</button>
                                            <button type="button" class="btn ml-2">S</button>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart6">
                                                <div className="img">
                                                    <img src={r24} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r27} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white" data-toggle="modal" data-target="#exampleModalCenter3">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>FLINT GRAY-2PC (SHIRT & TROUSER)<br />Rs3,020 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">XS</button>
                                            <button type="button" class="btn ml-2">L</button>
                                            <button type="button" class="btn ml-2">M</button>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart7">
                                                <div className="img">
                                                    <img src={r28} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r29} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>GUL-E-RANA-3PC EMBROIDERED LUXURY PRET<br />Rs53,500 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">XS</button>
                                            <button type="button" class="btn ml-2">S</button>
                                            <button type="button" class="btn ml-2">M</button>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="card border-0">
                                            <Link to="/Readycart8">
                                                <div className="img">
                                                    <img src={r33} alt="error" style={{ height: 450, width: 307 }} />
                                                    <img src={r36} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                                                    <button className="add btn text-white">Add to cart</button>
                                                </div>
                                            </Link>
                                        </div>
                                        <p className="text-left ml-3" style={{ fontSize: 12 }}>VANILLA ORCHIDS-2PC (SHIRT & DUPATTA) <br />Rs4,870 PKR</p>
                                        <div class="btn-group" role="group" aria-label="Basic example" style={{ marginRight: 200 }}>
                                            <button type="button" class="btn">XS</button>
                                            <button type="button" class="btn ml-2">S</button>
                                            <button type="button" class="btn ml-2">L</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </div>

            {/* ============================= slider end ======================================= */}


            {/* ========================= next cards start ========================= */}

            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Readycart7">
                                <div className="img_new">
                                    <img src={r28} alt="error" className="img-fluid" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3">VANILLA ORCHIDS-2PC (SHIRT & DUPATTA)<br />Rs53,500 PKR</p>
                    </div>


                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Readycart2">
                                <div className="img_new">
                                    <img src={r6} alt="error" className="img-fluid" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3">PRISTINE WHITE EMBROIDERED SHIRT<br />Rs4,320 PKR</p>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0">
                            <Link to="/Readycart5">
                                <div className="img_new">
                                    <img src={r19} alt="error" className="img-fluid" />
                                </div>
                            </Link>
                        </div>
                        <p className="text-left ml-3">ORABELLE DUPATTA<br />Rs1,950 PKR</p>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Readytowear;