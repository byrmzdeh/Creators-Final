import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './style.scss'

const UserUpdate = () => {
    const { id } = useParams();
    const { token, decode } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (!decode || decode.role !== "admin") {
            window.location.href = "/usersPanel";
        } else {
            getUser(id);
        }
    }, [decode, id]);

    async function getUser(id) {
        try {
            const response = await fetch(`http://localhost:3600/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const userData = await response.json();
            setUsername(userData.username);
            setEmail(userData.email);
            setRole(userData.role);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (decode && decode.role === "admin") {
            try {
              const response = await fetch(`http://localhost:3600/user/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ username, email, role}),
              });
              if (response.ok) {
                window.location.href = "/usersPanel";
              }
              console.log("User updated successfully");
            } catch (error) {
              console.error("Error occurred while updating user:", error);
            }
          }
    }

    return (
        <>

            <div className="UserUpdate">
                <h1>User Update </h1>
                <form onSubmit={handleSubmit} className="form">


                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />

                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Role"
                    />

                    <br />
                    <button type="submit">Update User</button>
                </form>
            </div>
        </>
    );
};

export default UserUpdate;
