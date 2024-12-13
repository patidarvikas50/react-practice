import React from "react";
import ProductInfoCard from "./ProductInfoCard";
import samsung from "./samsung.jpg";

const Products = ({ onView }) => {

    const productList = [
        {
            productImg: samsung,
            ProductName: "apple",
            ProductPrice: 119000,

        },
        {
            productImg: samsung,
            ProductName: "nokia",
            ProductPrice: 52000,

        },
        {
            productImg: samsung,
            ProductName: "samsung",
            ProductPrice: 32000,

        },
        {
            productImg: samsung,
            ProductName: "oneplus",
            ProductPrice: 12000,

        },
        {
            productImg: samsung,
            ProductName: "motorola",
            ProductPrice: 40000,

        },

    ]
    
    return (<div className="main-container">
        <div className="products-container" >
            {productList.map((product, index) => {
                return <ProductInfoCard
                    key={index}
                    ProductDiscription={product} onView={(f) => onView(f)}
                />
            })}
        </div>
    </div>

    )
}

export default Products;