'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useFetchData from '../hooks/useFetchData';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { fetchData } = useFetchData();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { result, error } = await fetchData('https://api.huven.boogiecoin.com/signup', 'POST', false, {
      username,
      email,
      password,
    });

    if (error) {
      console.error('Error:', error);
      return;
    }

    localStorage.setItem('access_token', result.access_token);
    localStorage.setItem('current_user', JSON.stringify(result.current_user));
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
