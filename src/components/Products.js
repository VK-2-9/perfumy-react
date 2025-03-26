import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


function Products(){
    return(
      <div className="products">
        <div className="box">
            <img src={one} alt="one"></img>
            <p>Fogg wood, extreme, Eud perfume. Long lasting, 100ml</p>
        </div>
  
        <div className="box">
            <img src={two} alt="two"></img>
            <p>Fogg wood, extreme, Eud perfume. Long lasting, 100ml</p>
        </div>
  
        <div className="box">
            <img src={three} alt="three"></img>
            <p>Fogg wood, extreme, Eud perfume. Long lasting, 100ml</p>
        </div>
      </div>  
    )
  }




  export default Products;