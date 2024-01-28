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
                        <div key={student.rollNo} className="flex gap-3 bg-orange-200">
                            <h3>{student.rollNo} </h3>
                            <h3>{student.name} </h3>
                            <h3>{student.section} </h3>
                            <h3>{student.gender} </h3>
                            <h3>{student.age} </h3>
                            <h3>{student.subject} </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { Student }