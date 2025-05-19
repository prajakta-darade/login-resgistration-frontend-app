import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; 
import { useNavigate } from 'react-router-dom';

function Dashboard({ setIsLoggedIn }) {
    console.log("Inside Dashobar screen")
      const [users, setUsers] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');
      const navigate = useNavigate();
    // Fetch user data from backend
  useEffect(() => {
    axios.get('http://localhost:4343/users', { withCredentials: true })
      .then(response => {
        setUsers(response.data);
        console.log("getAllUsers=>",response);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
    // Filtered users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
    // Logout handler
    const handleLogout = () => {
        axios.post('http://localhost:4343/logout', {}, { withCredentials: true })
          .then(() => navigate('/login'))
          .catch(err => console.log(err));
      };

  return (
    <div className="dashboard-container">
       <button className="logout-btn" onClick={handleLogout}>Logout</button>

        <h2>User Dashboard</h2>
      
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;