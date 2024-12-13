import React from 'react'

const ATMGenderField = () => {
    return (
        <div className='Gender'>
            <label >
                Gender :
            </label>
            <br/>
            <label >Male
                <input type="radio" value="male" />
            </label>

            <label >Female
                <input type="radio" value="female" />
            </label>

            <label > Other
                <input type="radio" value="other" />
            </label>

        </div>
    )
}

export default ATMGenderField
