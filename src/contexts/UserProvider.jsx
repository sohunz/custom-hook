import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
