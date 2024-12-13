import React from "react";
// import samsung from "./samsung.jpg"

const ProductDiscription =({ProductDiscription })=>{
    // console.log(ProductDiscription)

    return (
        <div className="pr-details-div">
            
         <img className="pic-detail" src= {ProductDiscription !== null && ProductDiscription.productImg}
         alt="mobile"/>
       <div className="name-price"><h4>{ProductDiscription !== null && ProductDiscription.productName}</h4>
        <h5> {ProductDiscription !== null && ProductDiscription.productPrice}</h5> </div>
    </div>
    )


}

export default ProductDiscription;