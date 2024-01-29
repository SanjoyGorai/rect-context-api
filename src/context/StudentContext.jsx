import { createContext, useReducer } from "react";

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

function reducer(state, action) {
    console.log(state);
    if (action.type == 'increment_age') {
        return {
            age: state.age + 1
        }
    }
    if (action.type == 'decrease_age') {
        return {
            age: state.age - 1
        }

    }
    throw Error('Unknown action.');
}

function StudentContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, { age: 23 })

    return (
        <StudentContext.Provider value={{ student, state, dispatch }}>
            {props.children}
        </StudentContext.Provider>
    )

}

export { StudentContext, StudentContextProvider }
