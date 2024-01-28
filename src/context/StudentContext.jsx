import { createContext } from "react";

const StudentContext = createContext(null);

const student = [
    {
        rollNo: 1,
        name: 'John Doe',
        section: 'A',
        age: 21,
        gender: 'male',
        subject: 'Arts',
    },
    {
        rollNo: 2,
        name: 'Rahul Sarkar',
        section: 'B',
        age: 20,
        gender: 'male',
        subject: 'Commerce',
    }
]

function StudentContextProvider(props) {
    return (
        <StudentContext.Provider value={student}>
            {props.children}
        </StudentContext.Provider>
    )

}

export { StudentContext, StudentContextProvider }
