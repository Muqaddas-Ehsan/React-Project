import "../css/Cart.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import f1 from "../images/f1.webp";
import f2 from "../images/f2.webp";
import f3 from "../images/f3.webp";
import f4 from "../images/f4.webp";
import f5 from "../images/f5.webp";
function Cart() {
    // ============ for add to cart use state =============
    const [count, setCount] = useState(0);

    // ============== for click on image ==============

    // function changeimage(){
    //     var image=document.getElementById('MainImg');
    //     image.src='f2.webp';
    // }

    // var MainImg = document.getElementById("MainImg")
    //     var smallimg = document.getElementsById("small")
        //  console.log(smallimg);

        // smallimg[0].onclick = function(){
        //     MainImg.src = smallimg[0].src
        // }
        // smallimg[1].onclick = function(){
        //     MainImg.src = smallimg[1].src
        // }
        // smallimg[2].onclick = function(){
        //     MainImg.src = smallimg[2].src
        // }
        // smallimg[3].onclick = function(){
        //     MainImg.src = smallimg[3].src
        // }
        // smallimg[4].onclick = function(){
        //     MainImg.src = smallimg[4].src
        // }
       

       

       

        

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid pb-3" src={f1} alt="error" id="MainImg"/>

                            <div className="small-img-group d-flex justify-content-between">
                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={f2} alt="error"/>
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={f3} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={f4} alt="error" />
                                </div>

                                <div className="small-img-col">
                                    <img className="img-fluid small-img" id="small" src={f5} alt="error" />
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="detail" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                            <h3 className="mt-3">OPPULENT BLOOM-B-3PC COTTON JACQUARD SUIT</h3>
                            <h4 className="text-left ml-3">₨ 4,060 <small>PKR</small></h4>
                            <p className="text-left ml-4"><span className="font-weight-bold">SKU:</span>1000000125264</p>
                            <p className="text-left  ml-4"><span className="font-weight-bold">DESIGN CODE:</span>0123RTSEMBJAC0104</p>
                            <p className="text-left  ml-4"><span className="font-weight-bold">FABRIC:</span>JACQUARD</p>
                            <p className="text-left  ml-4"><span className="font-weight-bold">COLOR:</span>PEACH</p>
                            <p className="text-left  ml-4"><span className="font-weight-bold">WORK DETAILS:</span>DYED</p>
                            <h6 className="text-left ml-4">Size</h6>
                            <button className="btn d-flex align-start ml-4 text-white" style={{backgroundColor:"#000000"}}>UNSTITCH</button>

                            </div>

                            {/* ===========================  Quantity item ========================= */}
                             <div className="row mt-3">
                                <h5 className="ml-4 text-left">Quantity</h5>
                                <div className="col-md-2">
                                    <button className="btn font-weight-bold text-white" style={{backgroundColor: "rgba(201, 9, 9, 1)"}} onClick={() => setCount(count + 1)}>+</button>
                                </div>

                                <div className="col-md-1">
                                    {count}
                                </div>

                                <div className="col-md-2">
                                     <button className="btn font-weight-bold text-white" style={{backgroundColor: "rgba(201, 9, 9, 1)"}}  onClick={() => {
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
                            {/* =========================== */}

                              {/* =================== product details =================== */}

                              <div className="product_details mt-3" style={{ fontFamily: "Century Gothic, sans-serif" }}>
                                <h4 className="ml-4 text-left">PRODUCT DETAILS</h4>
                                <h5 className="ml-4 text-left font-weight-bold">UNSTITCH 3PC:</h5>
                                <h6 className="ml-4 text-left font-weight-bold">SHIRT</h6>
                                <p className="ml-4 text-left">100% COTTON JACQUARD SHIRT</p>
                                <h6 className="ml-4 text-left font-weight-bold">TROUSER</h6>
                                <p className="ml-4 text-left">100% COTTON CAMBRIC DYED TROUSER</p>
                                <h6 className="ml-4 text-left font-weight-bold">DUPATTA</h6>
                                <p className="ml-4 text-left">100% COTTON JACQUARD DUPATTA</p>
                              </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart;