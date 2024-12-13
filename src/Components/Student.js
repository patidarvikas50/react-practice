import React, { useState } from 'react';
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";
import { v4 as uuidv4 } from 'uuid';



const Student = () => {

    const [students, setStudent] = useState([]);
    const [selectedStudent, setselectedStudent] = useState(null)


    const handleSubmit = (values, handleResetForm) => {
        const { name, email, mobile, batch, gender } = values;

        // console.log(values, "value")
        const data = {
            name,
            email,
            mobile,
            batch,
            gender,
            id: uuidv4()
        };

        setStudent([...students, data])
        console.log(data,"id bhi log me he ke ni dekho")
        handleResetForm()
    }

    const handleUpdate=(values,handleResetForm)=>{
        const result = students?.map((student)=>{
            if(student?.id === selectedStudent?.id){
                student={
                    ...values,
                    id : selectedStudent?.id
                }
            }
            return student
        });
        setStudent(result)

        handleResetForm()
    }




  
















    return (
        <div className="page-container">

            <StudentForm
                handleSubmit={handleSubmit}
                handleUpdate ={handleUpdate}
                selectedStudent={selectedStudent} />

            <StudentTable
                students={students}
                setStudent={setStudent} setselectedStudent={setselectedStudent} />
        </div>
    )
}
export default Student
