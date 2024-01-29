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

    switch (action.type) {
        case 'increment_age': {
            return {
                age: state.age + 1
            }
        }
        case 'decrease_age': {
            return {
                age: state.age - 1
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
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
