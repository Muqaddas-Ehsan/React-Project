
import "../css/Nav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"
function Nav(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mt-5">
                <div className="logo">
                    <img src={logo} alt="error" style={{ width: 200, height: 100 }} />
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline my-2 my-lg-0" style={{ marginLeft: 200 }}>
                        <div className="enter dropdown">

                            <button class="btn dropdown-toggle dropbtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "rgba(223, 231, 246, 1)" }}>
                                {props.button2}
                            </button>
                            <div class="dropdown-content dropdown-menu bg-white" aria-labelledby="dropdownMenuButton">
                                <Link class="dropdown-item" to="Newarrival">{props.link1}</Link>
                                <Link class="dropdown-item" to="Unstitch">{props.link2}</Link>
                                <Link class="dropdown-item" to="Readytowear">{props.link3}</Link>
                                <Link class="dropdown-item" to="Footwear">{props.link4}</Link>
                                <Link class="dropdown-item" to="Fragrances">{props.link5}</Link>
                                <Link class="dropdown-item" to="Accessories">{props.link6}</Link>
                            </div>
                            <input class="form-control mr-sm-2 pr-5" type="search" placeholder="Search here..." aria-label="Search" />
                        </div>
                        <div className="btn1">
                            <button class="btn" type="submit"><i class="bi bi-search" style={{ color: "rgba(223, 231, 246, 1)" }}></i></button>
                        </div>
                    </form>


                    <ul class="navbar-nav mr-auto">
                        {/* <div className="icons"> */}
                            <li class="nav-item">
                                <Link class="nav-link ml-5" to="#" data-toggle="modal" data-target="#exampleModal" style={{ color: "#696973" }}><i class="bi bi-person-circle"><br />{props.link7}</i>
                                    {/* <!-- Modal --> */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h2 class="modal-title text-dark" id="exampleModalLabel" style={{ fontFamily: "oswald", fontWeight: 600, fontSize: 17 }}>{props.heading1}</h2>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="label" style={{ fontSize: 17 }}>
                                                                <label className="text-dark">{props.label1}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="input" style={{ paddingRight: 150 }}>
                                                                <input className="py-1" type="text" placeholder="E-Mail Address" style={{ paddingRight: 110 }} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-3">
                                                        <div className="col-md-4">
                                                            <div className="label" style={{ fontSize: 17 }}>
                                                                <label className="text-dark">{props.label2}</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="input" style={{ paddingRight: 150 }}>
                                                                <input className="py-1" type="text" placeholder="Password" style={{ paddingRight: 110 }} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-3">
                                                        <div className="col-md-5">
                                                            <Link to="#" className="text-start" style={{ color: "rgba(201, 9, 9, 1)" }}>{props.link8}</Link>
                                                        </div>
                                                    </div>

                                                    <button class="btn text-white mt-3" style={{ backgroundColor: "rgba(201, 9, 9, 1)", paddingLeft: 200, paddingRight: 200 }}>
                                                        {props.button1}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                </Link>
                            </li>
                        {/* </div> */}
  
                               {/* ========================= register ================================= */}

                        <li class="nav-item">
                            <Link class="nav-link " to="#" data-toggle="modal" data-target="#exampleModalCenter"  style={{ color: "#696973" }}><i class="bi bi-pencil-square"><br />{props.link9}</i>
                                {/* <!-- Modal --> */}
                                 {/* ============================ personal details ================================ */}
                                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h2 class="modal-title" id="exampleModalLongTitle" style={{ fontFamily: "oswald", fontWeight: 600, fontSize: 17 }}>Your Personal Details</h2>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <form action="/action_page.php" method="post">

                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="label" style={{ fontSize: 17 }}>
                                                            <label className="text-dark">First Name <span className="text-danger font-weight-bold">*</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="input" style={{ paddingRight: 150 }}>
                                                            <input className="py-1 text-secondary" type="text" placeholder="First Name" style={{ paddingRight: 110 }} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <div className="label" style={{ fontSize: 17 }}>
                                                            <label className="text-dark">Last Name <span className="text-danger font-weight-bold">*</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="input" style={{ paddingRight: 150 }}>
                                                            <input className="py-1 text-secondary" type="text" placeholder="Last Name" style={{ paddingRight: 110 }} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <div className="label" style={{ fontSize: 17 }}>
                                                            <label className="text-dark">Email<span className="text-danger font-weight-bold">*</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="input" style={{ paddingRight: 150 }}>
                                                            <input className="py-1 text-secondary" type="email" placeholder="Email" style={{ paddingRight: 110 }} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <div className="label" style={{ fontSize: 17 }}>
                                                            <label className="text-dark">Telephone<span className="text-danger font-weight-bold">*</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="input" style={{ paddingRight: 150 }}>
                                                            <input className="py-1 text-secondary" type="number" placeholder="Telephone" style={{ paddingRight: 110 }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* =========================== your password ============================ */}

                                                <div class="modal-header">
                                                    <h2 class="modal-title" id="exampleModalLongTitle" style={{ fontFamily: "oswald", fontWeight: 600, fontSize: 17 }}>Your Password</h2>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-4">
                                                        <div className="label" style={{ fontSize: 17 }}>
                                                            <label className="text-dark">Password<span className="text-danger font-weight-bold">*</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="input" style={{ paddingRight: 150 }}>
                                                            <input className="py-1 text-secondary" type="password" placeholder="Password" style={{ paddingRight: 110 }} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-5">
                                                        <div className="label" style={{ fontSize: 17 }}>
                                                            <label className="text-dark"> Password Confirm<span className="text-danger font-weight-bold">*</span></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input">
                                                            <input className="py-1 text-secondary" type="pssword" placeholder="Password Confirm" style={{ paddingRight: 68 }} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* ======================== news letter ============================= */}

                                                <div class="modal-header">
                                                    <h2 class="modal-title" id="exampleModalLongTitle" style={{ fontFamily: "oswald", fontWeight: 600, fontSize: 17 }}>News Letter</h2>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <p class="modal-title text-dark" id="exampleModalLongTitle" style={{ fontSize: 17 }}>Subcribe</p>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                            <label class="form-check-label" for="exampleRadios1">
                                                                Yes
                                                            </label>
                                                        </div>

                                                    </div>

                                                    <div className="col-md-0">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                            <label class="form-check-label" for="exampleRadios2">
                                                                No
                                                            </label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="row mt-3">
                                                    <div className="col-md-10">
                                                        <div class="form-check">
                                                            <label class="form-check-label d-flex justify-content-end text-dark mr-5" style={{fontSize:12}} for="defaultCheck1">
                                                                I have read and agree to the<a href="#" className="text-danger">Privacy Policy.</a>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                    </div>
                                                </div>

                                                 <button class="btn text-white mt-3" style={{ backgroundColor: "rgba(201, 9, 9, 1)", paddingLeft: 200, paddingRight: 180 }}>CONTINUE</button>
                                                 </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Whislist" style={{ color: "#696973" }}><i class="bi bi-suit-heart"><br />{props.link18}</i></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Comparison" style={{ color: "#696973" }}><i class="bi bi-arrow-left-right"><br /> {props.link19}</i></Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
        <Link class="nav-link ml-5" to="/" style={{ fontFamily: "Oswald", color: "#333333"}}><i class="bi bi-house-heart mr-2"></i>{props.link10}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Newarrival" style={{ fontFamily: "Oswald", color: "#333333" }}>{props.link11}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Unstitch" style={{ fontFamily: "Oswald", color: "#333333"}}>{props.link12}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Readytowear" style={{ fontFamily: "Oswald", color: "#333333" }}>{props.link13}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Footwear" style={{ fontFamily: "Oswald", color: "#333333"}}>{props.link14}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Fragrances" style={{ fontFamily: "Oswald", color: "#333333"}}>{props.link15}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Accessories" style={{ fontFamily: "Oswald", color: "#333333"}}>{props.link16}</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link ml-3" to="Contact" style={{ fontFamily: "Oswald", color: "#333333",fontWeight:600 }}><i class="bi bi-telephone-outbound-fill"></i>{props.link17}</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Nav;