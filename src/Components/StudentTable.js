import React from 'react';

const StudentTable = ({ students, setStudent,setselectedStudent}) => {
   
    const handleDelete = (id) => {
        const deleteStudents = students.filter((el, index) =>
        index !== id);
        setStudent(deleteStudents);
    };

   
    return (
        <div className="table-container">
            <table className='table'>
                <thead >
                    <tr>
                        <th className='th' align='left'>Name</th>
                        <th className='th' align='left'>Gender</th>
                        <th className='th' align='left'>Email</th>
                        <th className='th' align='left'>Mobile</th>
                        <th className='th' align='left'>Batch</th>
                        <th className='th' align='left'>Action</th>
                       

                    </tr>
                </thead>

                <tbody className='tbody'>
                    {students?.map((student,id) => {

                        return (

                            <tr key={student?.id} className='tr'>
                                <td className='td'>{student?.name}</td>
                                <td className='td'>{student?.gender}</td>
                                <td className='td'>{student?.email}</td>
                                <td className='td'>{student?.mobile}</td>
                                <td className='td'>{student?.batch}</td>
                                <td className='td'><div className='btn-action'>
                                    <button onClick={()=>handleDelete(id)} className="delete-btn">Delete</button>
                                    <button  onClick={() => setselectedStudent(student)} className="edit-btn">Edit</button>
                                   
                                </div>
                                </td>
                               

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable
