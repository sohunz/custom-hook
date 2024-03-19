import axios from "axios";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

export const useFetch = (url) => {
    const { users, setUsers } = useContext(UserContext);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(url);
                setUsers(response.data);
            } catch (err) {
                console.log(err.message);
            }
        };
        fetchUser();
    }, []);

    return users;
};
