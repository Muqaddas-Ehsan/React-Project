import { Routes, Route } from "react-router-dom"
import './App.css';
import Whislist from "./component/Whislist.jsx";
import Comparison from "./component/Comparison.jsx";
import Home from "./component/Home.jsx";
import Nav from "./component/Nav.jsx";
import Cart from "./component/Cart.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import Featuredcart from "./component/Featurescart1.jsx";
import Featuredcart2 from "./component/Featurescart2.jsx";
import Featuredcart3 from "./component/Featurescart3.jsx";
import Featuredcart4 from "./component/Featurescart4.jsx";
import Featuredcart5 from "./component/Featurescart5.jsx";
import Featuredcart6 from "./component/Featurescart6.jsx";
import Featuredcart7 from "./component/Featurescart7.jsx";
import Featuredcart8 from "./component/Featurescart8.jsx";
import Unstitch from "./component/Unstitch.jsx";
import Newarrival from "./component/Newarrival.jsx";
import Accessories from "./component/Accessories.jsx";
import Accessoriescart1 from "./component/Accessoriescart1.jsx";
import Accessoriescart2 from "./component/Accessoriescart2.jsx";
import Accessoriescart3 from "./component/Accessoriescart3.jsx";
import Accessoriescart4 from "./component/Accessoriescart4.jsx";
import Accessoriescart5 from "./component/Accessoriescart5.jsx";
import Accessoriescart6 from "./component/Accessoriescart6.jsx";
import Accessoriescart7 from "./component/Accessoriescart7.jsx";
import Accessoriescart8 from "./component/Accessoriescart8.jsx";
import Accessoriescart9 from "./component/Accessoriescart9.jsx";
import Accessoriescart10 from "./component/Accessoriescart10.jsx";
import Accessoriescart11 from "./component/Accessoriescart11.jsx";
import Accessoriescart12 from "./component/Accessoriescart12.jsx";
import Fragrances from "./component/Fragrances.jsx";
import Fragrancescart1 from "./component/Fragrancescart1.jsx";
import Fragrancescart2 from "./component/Fragrancescart2.jsx";
import Readytowear from "./component/Readytowear.jsx";
import Readycart1 from "./component/Readycart1.jsx";
import Readycart2 from "./component/Readycart2.jsx";
import Readycart3 from "./component/Readycart3.jsx";
import Readycart4 from "./component/Readycart4.jsx";
import Readycart5 from "./component/Readycart5.jsx";
import Readycart6 from "./component/Readycart6.jsx";
import Readycart7 from "./component/Readycart7.jsx";
import Readycart8 from "./component/Readycart8.jsx";
import Footwear from "./component/Footwear.jsx";
import Footwearcart1 from "./component/Footwearcart1.jsx";
import Footwearcart2 from "./component/Footwearcart2.jsx";
import Footwearcart3 from "./component/Footwearcart3.jsx";
import Footwearcart4 from "./component/Footwearcart4.jsx";
import Footwearcart5 from "./component/Footwearcart5.jsx";
import Footwearcart6 from "./component/Footwearcart6.jsx";
import Footwearcart7 from "./component/Footwearcart7.jsx";
import Footwearcart8 from "./component/Footwearcart8.jsx";
import Footwearcart9 from "./component/Footwearcart9.jsx";
function App(){
   
  var home=[
    {
      button:"UNSTITCHED",
    },
    {
      button:"READY TO WEAR",
    },
    {
      button:"ACCESSORIES",
    },
    {
      button:"FOOTWEAR",
    },
    {
      h1:"Featured Products",
      p:"Our brand is based on loving the hobby and we are proud to present a team of employees that works and selling our products to the world."
    },
    {
      p:"LAVENDER ELARA-3PC LAWN EMBRIODERED SUIT"
    },
    {
      p:"Rs 7.950 PKR"
    },
    {
      p:"BLOOMING SERENE-3PC LAWN EMBRIODERED SUIT"
    },
    {
      p:"Rs 6.950 PKR"
    },
    {
      p:"ROSEATE PEARL-3PC LAWN EMBRIODERED SUIT"
    },
    {
      p:"Rs 6.950 PKR"
    },
    {
      p:"SCARLET JADE-3PC LAWN EMBRIODERED SUIT"
    },
    {
      p:"Rs 6.250 PKR"
    },
    {
      p:"NIGHT BLOOM-2PC KHADDAR PRINTED SUIT"
    },
    {
      p:"Rs 2.130 PKR"
    },
    {
      p:"CRIMSON AURA-3PC- EMBRIODERED KHADDAR SUIT"
    },
    {
      p:"Rs 4.380 PKR"
    },
    {
      p:"SANG-E-YASHM-3PC"
    },
    {
      p:"Rs 5.910 PKR"
    },
    {
      p:"GARLAND BLOOM-3PC-EMBRIODERED KHADDAR SUIT"
    },
    {
      p:"Rs 3.860 PKR"
    },
    
]

    var nav=[
      {
        button:"All",
        Link:"NEW ARRIVALS"
      },
      {
        Link:"UNSTITCHED"
      },
      {
        Link:"READY TO WEAR"
      },
      {
        Link:"FOOTWEAR"
      },
      {
        Link:"FRAGRENCES"
      },
      {
        Link:"ACCESSORIES"
      },
      {
        Link:"login",
        h2:"Returning Customer",
        label:"E-Mail Address"
      },
      {
        label:"Password",
        Link:"Forgotten Password",
        button:"LOGIN"
      },
      {
        Link:"Register",
      },
      {
        Link:"HOME"
      },
      {
        Link:"NEW ARRIVALS"
      },
      {
        Link:"UNSTITCHED"
      },
      {
        Link:"READY TO WEAR"
      },
      {
        Link:"FOOTWEAR"
      },
      {
        Link:"FRAGRANCES"
      },
      {
        Link:"ACCESSORIES"
      },
      {
        Link:"+92456683892"
      },
      {
        Link:"Whislist"
      },
      {
        Link:"Compare"
      }
    ]
     
    var whish=[
      {
        span:"Account",
        h1:"Login",
      },
      {
        span:"New",
        h4:"Customer",
        p:"By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.",
        button:"CONTINUE"
      },
      {
        span:"Returning",
        h4:"Customer",
        label:"E-Mail Address"
      },
      {
        label:"Password",
        Link:"Forgotten Password",
        button:"LOGIN"
      },
    ]
    var compare=[
      {
        span:"Product",
        h1:"Comparison",
        p:"You have not chosen any products to compare.",
        button:"CONTINUE "
      }
    ]
  return(
    <div className="App">
    <Nav button2={nav[0].button}
         link1={nav[0].Link}
         link2={nav[1].Link}
         link3={nav[2].Link}
         link4={nav[3].Link}
         link5={nav[4].Link}
         link6={nav[5].Link}
         link7={nav[6].Link}
         heading1={nav[6].h2}
         label1={nav[6].label}
         label2={nav[7].label}
         link8={nav[7].Link}
         button1={nav[7].button}
         link9={nav[8].Link}
         link10={nav[9].Link}
         link11={nav[10].Link}
         link12={nav[11].Link}
         link13={nav[12].Link}
         link14={nav[13].Link}
         link15={nav[14].Link}
         link16={nav[15].Link}
         link17={nav[16].Link}
         link18={nav[17].Link}
         link19={nav[18].Link}
         />
         
    <Routes>
    <Route path="/" element={<Home 
                                  button1={home[0].button}
                                  button2={home[1].button}
                                  button3={home[2].button}
                                  button4={home[3].button}
                                  heading1={home[4].h1}
                                  pera1={home[4].p}
                                  pera2={home[5].p}
                                  pera3={home[6].p}
                                  pera4={home[7].p}
                                  pera5={home[8].p} 
                                  pera6={home[9].p}
                                  pera7={home[10].p}
                                  pera8={home[11].p}
                                  pera9={home[12].p}
                                  pera10={home[13].p}
                                  pera11={home[14].p}
                                  pera12={home[15].p}
                                  pera13={home[16].p}
                                  pera14={home[17].p}
                                  pera15={home[18].p}
                                  pera16={home[19].p}
                                  pera17={home[20].p}/>}/>

    <Route path="Whislist" element={<Whislist  span1={whish[0].span}
                                                  heading1={whish[0].h1}
                                                  span2={whish[1].span}
                                                  heading2={whish[1].h4}
                                                  pera1={whish[1].p}
                                                  button1={whish[1].button}
                                                  heading3={whish[2].h4}
                                                  span3={whish[2].span}
                                                  label1={whish[2].label}
                                                  label2={whish[3].label}
                                                  link1={whish[3].Link}
                                                  button2={whish[3].button}/>}/>

    <Route path="Comparison" element={<Comparison span1={compare[0].span}
                                                  heading1={compare[0].h1}
                                                  pera1={compare[0].p}
                                                  button1={compare[0].button}/>}/>

    <Route path="Cart" element={<Cart/>}/>
    <Route path="Contact" element={<Contact pera={"Tel: +92456683892"}
                                            heading1={"Call Us"}/>}/>
    <Route path="Featurescart1"element={<Featuredcart/>}/>
    <Route path="Featurescart2"element={<Featuredcart2/>}/>
    <Route path="Featurescart3"element={<Featuredcart3/>}/>
    <Route path="Featurescart4"element={<Featuredcart4/>}/>
    <Route path="Featurescart5"element={<Featuredcart5/>}/>
    <Route path="Featurescart6"element={<Featuredcart6/>}/>
    <Route path="Featurescart7"element={<Featuredcart7/>}/>
    <Route path="Featurescart8"element={<Featuredcart8/>}/>
    <Route path="Unstitch"element={<Unstitch/>}/>
    <Route path="Newarrival"element={<Newarrival/>}/>
    <Route path="Accessories"element={<Accessories/>}/>
    <Route path="Accessoriescart1"element={<Accessoriescart1/>}/>
    <Route path="Accessoriescart2"element={<Accessoriescart2/>}/>
    <Route path="Accessoriescart3"element={<Accessoriescart3/>}/>
    <Route path="Accessoriescart4"element={<Accessoriescart4/>}/>
    <Route path="Accessoriescart5"element={<Accessoriescart5/>}/>
    <Route path="Accessoriescart6"element={<Accessoriescart6/>}/>
    <Route path="Accessoriescart7"element={<Accessoriescart7/>}/>
    <Route path="Accessoriescart8"element={<Accessoriescart8/>}/>
    <Route path="Accessoriescart9"element={<Accessoriescart9/>}/>
    <Route path="Accessoriescart10"element={<Accessoriescart10/>}/>
    <Route path="Accessoriescart11"element={<Accessoriescart11/>}/>
    <Route path="Accessoriescart12"element={<Accessoriescart12/>}/>
    <Route path="Fragrances"element={<Fragrances/>}/>
    <Route path="Fragrancescart1"element={<Fragrancescart1/>}/>
    <Route path="Fragrancescart2"element={<Fragrancescart2/>}/>
    <Route path="Readytowear"element={<Readytowear/>}/>
    <Route path="Readycart1"element={<Readycart1/>}/>
    <Route path="Readycart2"element={<Readycart2/>}/>
    <Route path="Readycart3"element={<Readycart3/>}/>
    <Route path="Readycart4"element={<Readycart4/>}/>
    <Route path="Readycart5"element={<Readycart5/>}/>
    <Route path="Readycart6"element={<Readycart6/>}/>
    <Route path="Readycart7"element={<Readycart7/>}/>
    <Route path="Readycart8"element={<Readycart8/>}/>
    <Route path="Footwear"element={<Footwear/>}/>
    <Route path="Footwearcart1"element={<Footwearcart1/>}/>
    <Route path="Footwearcart2"element={<Footwearcart2/>}/>
    <Route path="Footwearcart3"element={<Footwearcart3/>}/>
    <Route path="Footwearcart4"element={<Footwearcart4/>}/>
    <Route path="Footwearcart5"element={<Footwearcart5/>}/>
    <Route path="Footwearcart6"element={<Footwearcart6/>}/>
    <Route path="Footwearcart7"element={<Footwearcart7/>}/>
    <Route path="Footwearcart8"element={<Footwearcart8/>}/>
    <Route path="Footwearcart9"element={<Footwearcart9/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

