import "../css/Contact.css";
import { Link } from "react-router-dom";
function Contact(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.99380853778!2d74.3343893!3d31.482940349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1675452948193!5m2!1sen!2s" width="1250" height="500" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="row mt-3 ml-4">
                <div className="col-md-5">
                    <div className="adddress bg-dark text-white">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="location_icon mt-3 ml-2">
                                    <i class="bi bi-geo-alt" style={{ fontSize: 50, color: "#FF4500" }}></i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="address text-secondary text-left mt-4" style={{ marginRight: 50, fontSize: 13 }}>
                                    <h6 className="text-white">Store Address</h6>
                                    <p>Emporium Mall <br />
                                        First FLoor, <br /> Shop no 70, <br /> Near expo center road.</p>
                                </div>
                            </div>
                        </div><hr />
                                            
                        <div className="row">
                            <div className="col-md-2">
                                <div className="call_icon ml-2">
                                    <i class="bi-calculator-fill" style={{ fontSize: 50, color: "#FF4500" }}></i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-secondary text-left mt-2" style={{ marginRight: 50, fontSize: 13 }}>
                                    <h6 className="text-white">{props.heading1}</h6>
                                    <p>{props.pera}<br /></p>
                                </div>
                            </div>
                        </div><hr />

                        <div className="row">
                            <div className="col-md-2">
                                <div className="watch_icon ml-2">
                                    <i class="bi bi-watch" style={{ fontSize: 50, color: "#FF4500" }}></i>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-secondary text-left mt-2" style={{ marginRight: 50, fontSize: 13 }}>
                                    <h6 className="text-white">Store Hours</h6>
                                    <p>Opens 11 am<br /> Closed.</p>
                                </div>
                            </div>
                        </div><hr />

                        <div className="row">
                            <div className="col-md-2">
                                <div className="custom_icon ml-2">
                                    <i class="bi-emoji-smile" style={{ fontSize: 50, color: "#FF4500" }}></i>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="text-secondary text-left mt-2" style={{ marginRight: 50, fontSize: 13 }}>
                                    <h6 className="text-white">Custom Blocks</h6>
                                    <p>Create unlimited blocks with custom styles and add them on any page.</p>
                                </div>
                            </div>
                        </div><hr />
                    </div>
                </div>

                <div className="col-md-7 mt-5">
                    <div className="message ml-2 text-left">
                        <h5 className="font-weight-bold" style={{ fontFamily: "Oswald", color: "#000000" }}> <span>Leave </span>Us a Message</h5>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="label" style={{ fontSize: 17 }}>
                                <label className="text-dark">Your Name<span className="text-danger font-weight-bold">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="input" style={{ paddingRight: 150 }}>
                                <input className="py-1 text-secondary form-control" type="text" placeholder="Your Name" style={{ paddingRight: 200 }} />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="label" style={{ fontSize: 17 }}>
                                <label className="text-dark">Your Email<span className="text-danger font-weight-bold">*</span></label>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="input" style={{ paddingRight: 150 }}>
                                <input className="py-1 text-secondary form-control" type="text" placeholder="Your Email" style={{ paddingRight: 200 }} />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="form-group">
                                <div className="label" style={{ fontSize: 17 }}>
                                    <label className="text-dark">Message<span className="text-danger font-weight-bold">*</span></label>
                                </div>
                               </div>
                            </div>

                            <div className="col-md-8">
                              <div className="form-group mr-2">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" style={{height:150}}></textarea>
                              </div>
                            </div>
                    </div>

                    <div className="row">
                    <button className="btn" style={{backgroundColor:"rgba(201, 9, 9, 1)"}}> <Link className="nav-link text-white" to="/Cart">SUBMIT</Link></button>       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;