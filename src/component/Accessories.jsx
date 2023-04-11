import { Link } from "react-router-dom";
import "../css/Accessories.css";
import a1 from "../images/a1.webp";
import a2 from "../images/a2.webp";
import a4 from "../images/a4.webp";
import a5 from "../images/a5.webp";
import a7 from "../images/a7.webp";
import a8 from "../images/a8.webp";
import a10 from "../images/a10.jpg";
import a11 from "../images/a11.jpg";
import a12 from "../images/a12.jpg";
import a13 from "../images/a13.webp";
import a14 from "../images/a14.webp";
import a16 from "../images/a16.webp";
import a17 from "../images/a17.webp";
import a19 from "../images/a19.webp";
import a20 from "../images/a20.webp";
import a30 from "../images/a30.webp";
import a33 from "../images/a33.webp";
import a35 from "../images/a35.webp";
import a36 from "../images/a36.webp";
import a27 from "../images/a27.webp";
// import a20 from "../images/a20.webp";

function Accessories() {
  return (
    <div>
      <h1 className="mt-2" style={{fontFamily:"Oswald"}}>More To Explore</h1>
      <div className="container-fluid">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="container-fluid">
                <div className="row mt-5">
                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart1">
                        <div className="img">
                          <img src={a1} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a2} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">SAANJH-ORGANZA DUPATTA <br />Rs1,460 PKR</p>
                  </div>

                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart2">
                        <div className="img">
                          <img src={a4} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a5} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">AMIRAH DUPATTA <br />Rs1,680 PKR</p>
                  </div>

                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart3">
                        <div className="img">
                          <img src={a7} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a8} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">SHAWL-SHW0203 <br />Rs1,230 PKR</p>
                  </div>

                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart4">
                        <div className="img">
                          <img src={a10} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a11} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">SHAWL-SHW0105 <br />Rs1,350 PKR</p>
                  </div>
                </div>
              </div>
            </div>


            <div class="carousel-item">
              <div className="container-fluid">
                <div className="row mt-5">
                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart5">
                        <div className="img">
                          <img src={a12} alt="error" className="img-fluid" style={{ height: 450, width: 307 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">SHAWL-SHW0206 <br />Rs1,230 PKR</p>
                  </div>

                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart6">
                        <div className="img">
                          <img src={a13} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a14} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white" data-toggle="modal" data-target="#exampleModalCenter3">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">SEHER DUPATTA  <br />Rs1,460 PKR</p>
                  </div>

                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart7">
                        <div className="img">
                          <img src={a16} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a17} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">BLACK OYSTER DUPATTA<br />Rs1,950 PKR</p>
                  </div>

                  <div className="col-md-3">
                    <div className="card border-0">
                      <Link to="/Accessoriescart8">
                        <div className="img">
                          <img src={a19} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a20} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 312 }} />
                          <button className="add btn text-white">Add to cart</button>
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">LOVE POTION <br />Rs4,000 PKR</p>
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
              <Link to="/Accessoriescart9">
                <div className="img_new">
                  <img src={a30} alt="error" className="img-fluid" />
                </div>
              </Link>
            </div>
            <p className="text-left ml-3">HAISLEY DUPATTA<br />Rs1,460 PKR</p>
          </div>


          <div className="col-md-4">
            <div className="card border-0">
              <Link to="/Accessoriescart10">
                <div className="img_new">
                  <img src={a33} alt="error" className="img-fluid" />
                </div>
              </Link>
            </div>
            <p className="text-left ml-3">NOORI DUPATTA<br />Rs1,680 PKR</p>
          </div>

          <div className="col-md-4">
            <div className="card border-0">
              <Link to="/Accessoriescart11">
                <div className="img_new">
                  <img src={a27} alt="error" className="img-fluid" />
                </div>
              </Link>
            </div>
            <p className="text-left ml-3">ORABELLE DUPATTA<br />Rs1,950 PKR</p>
          </div>

        </div>
      </div>

      {/* ======================= lip balm card ========================= */}

      <div className="container">
        <dv className="row">
        <div className="col-md-4">
                    <div className="card border-0">
                      <Link to="/Accessoriescart12">
                        <div className="img">
                          <img src={a35} alt="error" style={{ height: 450, width: 307 }} />
                          <img src={a36} alt="error" className="hover_img img-fluid" style={{ height: 450, width: 425 }} />
                        </div>
                      </Link>
                    </div>
                    <p className="text-left ml-3">PLUMP LIP CAPSULE MASK JAR-30 CAPSULES<br />Rs2,790 PKR</p>
                  </div>
        </dv>
      </div>
    </div>
  )

}

export default Accessories;