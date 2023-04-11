import "../css/Footer.css";
import { Link } from "react-router-dom";
import fs6 from "../images/fs6.webp";
import fs2 from "../images/fs2.webp";
import fs5 from "../images/fs5.webp";
import fs7 from "../images/fs7.webp";
function Footer(){
    return(
     <div>
        {/* ==================== nav ====================== */}
        <div className="container-fluid bg-dark">
            <div className="row mt-5">
            <nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mt-2 nav1">
      <li class="nav-item">
        <Link class="nav-link ml-2 font-weight-bold" to="#Recent" style={{color:"rgba(230, 230, 230, 1)",fontFamily:"Oswald",fontSize:14}}>RECENTLY VIEWED</Link>
      </li>
      <li class="nav-item nav2">
        <a class="nav-link font-weight-bold" href="#" style={{color:"rgba(200, 200, 230, 1)",fontFamily:"Oswald",fontSize:14}}>MOST VIEWED</a>
      </li>
    </ul>
  </div>
</nav>

     {/* ================== card 1 ================== */}
     <div className="col-md-3 linkremove">
        <Link to="Featurescart6">

            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={fs6} alt="error" className="img-fluid" />
                    </div>

                    <div className="col-md-7">
                    <h6 className="mt-4 font-weight-bold text-left text-dark" style={{fontSize:12}}>CRIMSON AURA-3PC....</h6>
                    <p className="text-left text-dark">₨ 4,380 <small>PKR</small></p>
                    <div className="star" style={{marginRight:90}}>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>

                    </div>
                    </div>
                </div>
            </div>
        </Link>
         </div>

{/* ================== card 2 ================== */}
<div className="col-md-3 linkremove">
    <Link to="Featurescart2">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={fs2} alt="error" className="img-fluid" />
                    </div>

                    <div className="col-md-7">
                    <h6 className="mt-4 font-weight-bold text-left text-dark" style={{fontSize:12}}>BLOOMING SERENE-3PC....</h6>
                    <p className="text-left text-dark">₨ 6,950 <small>PKR</small></p>
                    <div className="star" style={{marginRight:90}}>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>

                    </div>
                    </div>
                </div>
            </div>
    </Link>
         </div>

{/* ================== card 3 ================== */}
<div className="col-md-3 linkremove">
    <Link to="Featurescart5">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={fs5} alt="error" className="img-fluid" />
                    </div>

                    <div className="col-md-7">
                    <h6 className="mt-4 font-weight-bold text-left text-dark" style={{fontSize:12}}>NIGHT BLOOM-2PC ....</h6>
                    <p className="text-left text-dark">₨ 2,130 <small>PKR</small></p>
                    <div className="star" style={{marginRight:90}}>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>

                    </div>
                    </div>
                </div>
            </div>
    </Link>
         </div>

{/* ================== card 4 ================== */}

<div className="col-md-3 linkremove">
    <Link to="Featurecart7">
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={fs7} alt="error" className="img-fluid" />
                    </div>

                    <div className="col-md-7">
                    <h6 className="mt-4 font-weight-bold text-left text-dark" style={{fontSize:12}}>SANG-E-YASHM-3PC....</h6>
                    <p className="text-left text-dark">₨ 5,910 <small>PKR</small></p>
                    <div className="star" style={{marginRight:90}}>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>

                    </div>
                    </div>
                </div>
            </div>
   </Link>
         </div>

             {/* ======================== social media links ====================== */}
             <div className="row mb-4">
                <div className="col-md-6">
               <div className="social mt-5" style={{fontFamily:"Oswald"}}>
                   <h3 className="text-left text-white font-weight-bold ml-5">Follow us On Social networks...</h3>
               </div>
              </div>

              <div className="col-md-1 mt-5">
              <a href="https://www.facebook.com/crossstitchpakistan/" target="_blank" className="nav-link"><i class="bi bi-facebook d-flex justify-content-start" style={{color:"rgba(201, 9, 9, 1)",fontSize:40}}></i></a>
              </div>

              <div className="col-md-1 mt-5">
              <a href="https://www.youtube.com/channel/UCNBNOA-ULqQOqO2qMSZfZPA" target="_blank" className="nav-link"><i class="bi bi-youtube d-flex justify-content-start" style={{color:"rgba(201, 9, 9, 1)",fontSize:40}}></i></a>
              </div>

              <div className="col-md-1 mt-5">
              <a href="https://www.instagram.com/crossstitch_official/" target="_blank" className="nav-link"><i class="bi bi-instagram d-flex justify-content-start" style={{color:"rgba(201, 9, 9, 1)",fontSize:40}}></i></a>
              </div>
             </div>
            </div>
        </div>

        {/* ===================================  next row ================================== */}

        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-3">
                    <div className="heading1">
                <h4 className="font-weight-bold text-left ml-5" style={{ fontFamily: "Oswald", color: "#333333"}}> <span>About </span> Us</h4>
                <div className="footer_link text-left ml-4">
                <a href="#" className="nav-link">THE BRAND</a>
                <a href="#" className="nav-link">SHIPPING POLICY</a>
                <a href="#" className="nav-link">TERMS & CONDITIONS</a>
                  </div>
                   </div>
                </div>

                <div className="col-md-3">
                    <div className="heading1">
                    <h4 className="font-weight-bold text-left ml-5" style={{ fontFamily: "Oswald", color: "#333333"}}> <span>Customer</span> Care</h4>
                    <div className="footer_link text-left ml-4">
                    <a href="#" className="nav-link">STORE LOCATIONS</a>
                    <a href="#" className="nav-link">POLICIES</a>
                    <a href="#" className="nav-link">ORDERING & TRACKING</a>
                    </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="heading1">
                    <h4 className="font-weight-bold text-left ml-5" style={{ fontFamily: "Oswald", color: "#333333"}}> <span>Information</span></h4>
                    <div className="footer_link text-left ml-4">
                    <a href="#" className="nav-link">PRIVACY POLICY</a>
                    <a href="#" className="nav-link">PAYMENT METHOD</a>
                    <a href="#" className="nav-link">RETURNS & EXCHANGES</a>
                    <a href="Contact" className="nav-link">CONTACT US</a>
                    </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="heading1">
                    <h4 className="font-weight-bold text-left ml-5" style={{ fontFamily: "Oswald", color: "#333333"}}> <span>Stay In Touch</span></h4>
                    <p>You can in touch with us by entering your Email Address.</p>
                    <form>
                        <label className="mr-2 p-1">Email:</label>
                        <input type="email" placeholder="Email address" className="mt-2 p-2"  />
                    </form>
                    </div>
                </div>
            </div>
        </div>

        {/* ======================= copy right ================== */}

        <div className="container-fluid">
            <div className="row bg-dark">
                 <p className="text-white p-2 mt-2 fs-5">© 2000-2023. Clothing Brand . All rights reserved</p>
            </div>
        </div>
       
     </div>   
     
    );
}

export default Footer;