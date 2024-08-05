'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('current_user'));
    if (!currentUser) {
      router.push('/login'); // Redirect to login page if user is not found
    } else {
      setUser(currentUser);
    }
  }, [router]);

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
