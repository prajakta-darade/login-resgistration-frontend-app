import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ setIsLoggedIn }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4343/dashboard', { withCredentials: true })
            .then(res => setUser(res.data))
            .catch(() => {
                setIsLoggedIn(false);
            });
    }, [setIsLoggedIn]);

    const handleLogout = async () => {
        await axios.post('http://localhost:4343/logout', {}, { withCredentials: true });
        setIsLoggedIn(false);
    };

    return (
        <div>
            <h2>Dashboard</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;
