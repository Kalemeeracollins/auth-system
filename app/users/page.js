'use client'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user]);

    if (!user) return null;

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;

