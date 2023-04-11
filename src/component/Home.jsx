import "../css/Home.css";
import { Link } from "react-router-dom";

import s1 from "../images/s1.webp";
import s2 from "../images/s2.webp";
import s3 from "../images/s3.webp";
import s4 from "../images/s4.webp";
import unstitch from "../images/unstitch.webp";
import readytowear from "../images/readytowear.webp";
import wedding from "../images/wedding.webp";
import footwear from "../images/footwear.webp";
import fs1 from "../images/fs1.webp";
import fs2 from "../images/fs2.webp";
import fs3 from "../images/fs3.webp";
import fs4 from "../images/fs4.webp";
import fs5 from "../images/fs5.webp";
import fs6 from "../images/fs6.webp";
import fs7 from "../images/fs7.webp";
import fs8 from "../images/fs8.webp";
// import sizechart from "../images/sizechart.webp"
import f1 from "../images/f1.webp";
import f2 from "../images/f2.webp";
import video1 from "../images/vedio1.mp4"
function Home(props) {
  return (
    <div>
      {/* ==================== slider ====================== */}

      <div className="container-fluid">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade mt-5 mb-5"
          data-ride="carousel"
          style={{ zIndex: -1 }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="card mx-3">
                <img
                  src={s1}
                  class="d-block w-100 img-fluid"
                  alt="error"
                  style={{ height: 500, width: 400 }}
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="card mx-3">
                <img
                  src={s2}
                  class="d-block w-100 img-fluid"
                  alt="error"
                  style={{ height: 500, width: 400 }}
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="card mx-3">
                <img
                  src={s3}
                  class="d-block w-100 img-fluid"
                  alt="error"
                  style={{ height: 500, width: 400 }}
                />
              </div>
            </div>
            <div class="carousel-item">
              <div className="card mx-3">
                <img
                  src={s4}
                  class="d-block w-100 img-fluid"
                  alt="error"
                  style={{ height: 500, width: 400 }}
                />
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>

      {/*===================== cards =====================  */}

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card border-0">
                <div className="shop_btn" style={{fontFamily:"Century Gothic,sans-serif"}}>
                <img src={unstitch} alt="error" className="img-fluid" style={{height:450,width:312}}/>
                <Link to="Unstitch"><button className="btn px-4 py-2">{props.button1}</button></Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0">
                <div className="shop_btn" style={{fontFamily:"Century Gothic,sans-serif"}}>
                <img src={readytowear} alt="error" className="img-fluid" style={{height:450,width:312}}/>
               <Link to="Readytowear"><button className="btn px-4 py-2">{props.button2}</button></Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0">
                <div className="shop_btn" style={{fontFamily:"Century Gothic,sans-serif"}}> 
                <img src={wedding} alt="error" className="img-fluid" style={{height:450,width:312}}/>
                <Link to="Accessories"><button className="btn px-4 py-2">{props.button3}</button></Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0">
                <div className="shop_btn" style={{fontFamily:"Century Gothic,sans-serif"}}>
                <img src={footwear} alt="error" className="img-fluid" style={{height:450,width:312}}/>
                <Link to="Footwear"><button className="btn px-4 py-2">{props.button4}</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      
              
  

      {/* ======================== features products ==================== */}

      <div className="container-fluid">
        <div className="row mt-5 bg-dark ml-5 mr-5">
          <div className="col-md-12">
            <h1
              className="text-white mt-5 font-weight-bold"
              style={{ fontSize: 40, fontFamily: "Oswald" }}
            >
              {props.heading1}
            </h1>
            <div class="title-divider"></div>
            <p className="" style={{ color: "#8B9198" }}>
              {props.pera1}
            </p>
          </div>
        </div>
      </div>

      {/* ==========================  slider in featured products =========================== */}

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="container-fluid">
         <div className="row mt-5">
          <div className="col-md-3">
            <div className="card border-0">
              <Link to="/Featurescart1">
            <img src={fs1} alt="error" className="img-fluid" />
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera2}</p>
            <p>{props.pera3}</p>
            </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <Link to="Featurescart2">
            <img src={fs2} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera4}</p>
            <p>{props.pera5}</p>
            </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <Link to="Featurescart3">
            <img src={fs3} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera6}</p>
            <p>{props.pera7}</p>
            </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <Link to="Featurescart4">
            <img src={fs4} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera8}</p>
            <p>{props.pera9}</p>
            </div>
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
              <Link to="Featurescart5">
            <img src={fs5} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera10}</p>
            <p>{props.pera11}</p>
            </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <Link to="Featurescart6">
            <img src={fs6} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera12}</p>
            <p>{props.pera13}</p>
            </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <Link to="Featurescart7">
            <img src={fs7} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera14}</p>
            <p>{props.pera15}</p>
            </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0">
              <Link to="Featurescart8">
            <img src={fs8} alt="error" className="img-fluid"/>
              </Link>
            <div className="data mt-1" style={{fontSize:12}}>
            <p className="font-weight-bold">{props.pera16}</p>
            <p>{props.pera17}</p>
            </div>
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
      {/* ============================= slider end ======================================= */}
      {/* this is card part */}
              {/* <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-3">
                      <div className="card ml-5 rounded">
                      <div className="img">
                      <Link to="Cart">
                  <img
                    src={f1} alt="error" style={{ height: 400, width: 265 }} />
                  <img
                    src={f2} alt="error" className="hover_img img-fluid" style={{ height: 400, width: 265 }} />
                </Link>
                <h4 className="mt-3" to="Cart">
                  OPPULENT BLOOM-B-3PC COTTON JACQUARD SUIT
                </h4>
                      </div>
                    </div>
                    </div>
                </div>
              </div> */}

                 
      
    </div>
  );
}

export default Home;
