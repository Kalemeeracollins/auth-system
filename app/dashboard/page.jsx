'use client'
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('current_user'));
    setUser(currentUser);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Created at: {user.created_at}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
