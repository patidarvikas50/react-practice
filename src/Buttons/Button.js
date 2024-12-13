import React from "react";

const Button = ({ children,
    onClick,
    varient ="outlined",
    color = "primary",
    size = "small",
}) => {

    const containedPrimaryClasses = "bg-primary border-primary";
    const containedSecondaryClasses = "bg-secondary border-secondary";

    const outLinedPrimaryClasses = "border-primary text-primary outlined-button-primary";
    const outLinedSecondaryClasses = "border-secondary text-secondary outlined-button-secondary";


    const customClasses =
        varient === "contained"
            ? `custom-button${color === "primary"
                ? containedPrimaryClasses
                : containedSecondaryClasses
            }`
            : `outlined-button ${color === "primary"
                ? outLinedPrimaryClasses
                : outLinedSecondaryClasses
            }`

        

    return (
        <button onClick={onClick} className={customClasses}>{children}</button>

    )
}


export default Button;