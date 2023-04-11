
import "../css/Whislist.css";
import { Link } from "react-router-dom";
function Whislist(props) {
    return (
        <div>
            <div className="heading1 mt-5">
                <h1 className="font-weight-bold text-left ml-5" style={{ fontFamily: "Oswald", color: "#333333", fontSize: 30 }}> <span>{props.span1}</span> {props.heading1}</h1>
            </div><hr />
            <div className="row mt-5">
                <div className="col-md-5">
                    <div className="heading4">
                        <h4 className="font-weight-bold text-left ml-5" style={{ fontSize: 20, fontFamily: "Oswald", color: "#333333" }}> <span>{props.span2}</span> {props.heading2}</h4>
                    </div>
                    <p className="text-left w-75 ml-5 mt-3">{props.pera1}</p>

                    <button class="btn text-white text-center d-flex align-left ml-5" style={{ backgroundColor: "rgba(201, 9, 9, 1)", paddingLeft: 180, paddingRight: 180, marginTop: 73 }}>
                        <a href="#" className="text-white"></a>{props.button1}</button>
                </div>

                <div className="col-md-4 border-right">
                    <div className="heading4">
                        <h4 className="font-weight-bold text-left" style={{ fontSize: 20, fontFamily: "Oswald", color: "#333333" }}> <span>{props.span3}</span> {props.heading3}</h4>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div className="label" style={{ fontSize: 17 }}>
                                <label className="text-dark">{props.label1}</label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="input" style={{ paddingRight: 150 }}>
                                <input className="py-1" type="email" placeholder="E-Mail Address" style={{ paddingRight: 80 }} />
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
                                <input className="py-1" type="password" placeholder="Password" style={{ paddingRight: 80 }} />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-5">
                            <Link to="#" className="text-start" style={{ color: "rgba(201, 9, 9, 1)" }}>{props.link1}</Link>
                        </div>
                    </div>

                    <button class="btn text-white mt-3 d-flex align-left" style={{ backgroundColor: "rgba(201, 9, 9, 1)", paddingLeft: 200, paddingRight: 180 }}>
                        {props.button2}
                    </button>
                </div>

                <div className="col-md-3">
                    <div className="card text-left w-75 border-0 shadow">

                    
                    <div className="sidebar ml-3">
                        <div className="mt-2">
                            <a href="#" className="mt-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>My Account</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="mt-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Address Book</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Whislist</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Order History</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Downloads</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Recurring Payments</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Reward Points</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Returns</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Transactions</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Newsletter</a>
                        </div>
                        <div className="mt-2">
                            <a href="#" className="ml-2" style={{ textDecoration: "none" }}><i class="bi bi-caret-right text-secondary"></i>Custom Menus</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whislist;