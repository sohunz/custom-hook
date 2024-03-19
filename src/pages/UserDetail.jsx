import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const UserDetail = () => {
    const { id } = useParams();
    const users = useFetch("https://jsonplaceholder.typicode.com/users");

    return (
        <div>
            <p className="mb-5">User Detail</p>
            {users
                .filter((user) => user.id == id)
                .map((user) => {
                    return (
                        <div
                            key={user.id}
                            className="border mb-3 rounded-md p-3"
                        >
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
                    );
                })}
        </div>
    );
};

export default UserDetail;
