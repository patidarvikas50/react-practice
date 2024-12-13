import React from "react";
import Button from "../Buttons/Button";

const ProductInfoCard = ({ ProductDiscription, onView }) => {


    const handleMiddleLevelClick = (newData) => {
        onView(newData); // Pass data back to top level
        //console.log(newData, "newdta")
    };

    return (
        <div className="card-container">

            <div className="card">
                <img className="img" src={ProductDiscription.productImg}
                    alt="mobile" />
                <h4>{ProductDiscription.ProductName}</h4>
                <h5>&#8377; {ProductDiscription.ProductPrice}</h5>

                <Button 
                // onClick={handleMiddleLevelClick}
                onClick={() => handleMiddleLevelClick(ProductDiscription)}
                    color="secondary">{" "}
                    view {" "} </Button>
                    
            </div>


        </div>


    )
}

export default ProductInfoCard;