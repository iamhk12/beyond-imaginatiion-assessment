// components/LoginPage.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import logo from "@/public/logo.png";
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState<String | any>('Beyond_Imagination');
  const [password, setPassword] = useState<String | any>('beyond');
  const router = useRouter();

  useEffect(()=>{
    document.title = "Beyond | Login";
  })

  const handleLogin = () => {
    const userData = {
      username,
      password
    };
    
    const now = new Date();
    const userDataWithTimestamp = { ...userData, timestamp: now.getTime() };
    localStorage.setItem('userData', JSON.stringify(userDataWithTimestamp));
    
    router.push('/dashboard');
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10/12 max-w-[450px] p-10 border-[0.5px] border-[#ffffff48] backdrop-blur-lg text-white rounded-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-md font-medium mb-2" htmlFor="username">
              Username or email-id :
            </label>
            <input
              className="bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-md font-medium mb-2" htmlFor="password">
              Password :
            </label>
            <input
              className="bg-transparent appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-center'>
            <button
              className="bg-blue-500 text-white py-2 px-6 mt-5 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
