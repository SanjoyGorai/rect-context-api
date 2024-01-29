import { useContext } from "react"
import { StudentContext } from "../context/StudentContext";

function Student() {
    const studentContext = useContext(StudentContext);
    // console.log('Student Context :', studentContext);
    console.log('Student Context State', studentContext.state);

    function handleClick(e) {
        console.log(studentContext.state);
        if (e.target.id == 'ins') {
            studentContext.dispatch({
                type: 'increment_age'
            });
        }
        if (e.target.id == 'dec') {
            studentContext.dispatch({
                type: 'decrease_age'
            });

        }
    }

    return (
        <div>
            <h2>Student Componant</h2>
            <h3 className="font-bold text-red-600">Student age is : {studentContext.state.age} </h3>
            {
                studentContext?.student?.map((student, index) => {
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
            <button className="bg-pink-600 mt-2" onClick={handleClick} id="ins">Increase Age</button> <br />
            <button className="bg-pink-600 mt-2" onClick={handleClick} id="dec">Decrese Age</button>
        </div>
    )
}

export { Student }