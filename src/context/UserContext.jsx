import { createContext, useState } from "react";

const UserContext = createContext(null);

const user = {
    fullName: "Sanjoy Gorai",
    age: 23,
    skinColor: 'Brown',
    height: '6 feets',
    relegion: 'Hinduism'
}

const UserContextProvider = (p) => {
    const [userName, setUserName] = useState("Sanjoy Gorai");
    return (
        <UserContext.Provider value={{ userName, setUserName, user }} >
            {p.children}
        </UserContext.Provider>
    )
}


export { UserContext, UserContextProvider }