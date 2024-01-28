import { useContext } from "react"
import { StudentContext } from "../context/StudentContext";

function Student() {
    const studentContext = useContext(StudentContext);
    console.log('Student Con :', studentContext);
    return (
        <div>
            <h2>Student Componant</h2>
            {
                studentContext.map((student, index) => {
                    return (
                        <div key={student.rollNo} className="flex gap-3 p-2 rounded bg-orange-200">
                            <h3>Roll No: {student.rollNo} </h3>
                            <h3>Name: {student.name} </h3>
                            <h3> Section: {student.section} </h3>
                            <h3>Gender: {student.gender} </h3>
                            <h3>Age: {student.age} </h3>
                            <h3>Subject: {student.subject} </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { Student }