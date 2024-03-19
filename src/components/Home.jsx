import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Home = () => {
    const users = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <div>
            <p className="mb-5">USERS</p>
            {users.map((user) => {
                return (
                    <Link to={`/user/detail/${user.id}`} key={user.id}>
                        <div className="border mb-3 rounded-md p-3">
                            <p className="text-lg font-bold">
                                {" "}
                                Name: {user.name}
                            </p>
                            <p className="text-gray-500">
                                Username : @{user.username}
                            </p>
                            <p>
                                Email :
                                <span className="text-blue-600">
                                    {user.email}
                                </span>
                            </p>
                            <p>Phone : {user.phone}</p>
                            <div>
                                <p>Address : {user.address.city}</p>
                                <p>
                                    Website :{" "}
                                    <span className="text-blue-600">
                                        {user.website}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Home;
