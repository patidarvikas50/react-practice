import React, { useEffect, useState } from 'react'
import ATMTextField from './Atoms/ATMTextField/ATMTextField'
import ATMSelect from './Atoms/ATMTextField/ATMSelect/ATMSelect';






const StudentForm = ({ handleSubmit ,selectedStudent,handleUpdate}) => {

    const initialValues = {
        name:"",
        email:"",
        mobile:"" ,
        batch:"",
        gender:"",
    };

    useEffect(()=>{
        console.log("render")
        setValues(selectedStudent || initialValues);
    }, [selectedStudent,]);


    const [values, setValues] = useState(initialValues);

    const { name, email, mobile, batch, gender } = values;

    const setFieldValues =(fieldName , value)=>{
        setValues({
            ...values,
            [fieldName]:value
        })
    }


    const handleResetForm = () => {

        setValues(initialValues);
    }



    const genderOption = ["Male", "Female", "Other"];
    const batches = ["MERN", "MEAN", "MEVN"];

    const indianMobileRegex = /^(?:\+91\s?)?[6-9]\d{9}$/
    const emailRegEx = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    const nameRegEx = /^([a-z]+\.)?\s?([A-Za-z]{3,})$/;
    const isValid =
        values?.batch !== "" &&
        values?.gender !== "" &&
        indianMobileRegex.test(values?.mobile) &&
        emailRegEx.test(values?.email) &&
        nameRegEx.test(values?.name)



    return (
        <div className="form-container">
            <ATMTextField
                placeholder="Enter Name"
                label="Name:"
                value={values?.name}
                onChange={(e) => setFieldValues('name', e.target.value)}
            />

            <div className='gender-container'>
                <label >Gender:</label>

                <div >
                    {genderOption?.map((el, index) => {
                        const isSelected = el === values?.gender
                        return (

                            <button key={index} onClick={() => setFieldValues('gender', el)} className={isSelected ? "active-btn" : "radio-btn"}
                            >{el}</button>
                        )
                    })}
                </div>


            </div>

            <ATMTextField
                placeholder="Enter Email"
                label="Email:"
                value={values?.email}
                onChange={(e) => setFieldValues('email', e.target.value)}
            />

            <ATMTextField
                placeholder="Enter Mobile"
                label="Mobile:"
                value={values?.mobile}
                onChange={(e) => setFieldValues('mobile', e.target.value)}
            />

            <ATMSelect
                placeholder={"Select Batch"}
                label="Batch:"
                value={values?.batch}
                options={batches}
                onChange={(e) => setFieldValues('batch', e.target.value)}
            />

            <button

                disabled={!isValid}
                type='button'
                className='submit-btn'
                onClick={() =>{
                    if(selectedStudent !==null){
                        handleUpdate({
                            name,
                            email,
                            mobile,
                            batch,
                            gender,
                        },
                        handleResetForm
                        )
                    }else{
                        handleSubmit({
                            name,
                            email,
                            mobile,
                            batch,
                            gender,
                        },
                            handleResetForm
                        )
                    }
                }
                    
                }
                
            >Submit</button>
        </div>
    )
}

export default StudentForm
