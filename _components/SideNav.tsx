import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const SideNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`sidenav hidden md:flex flex-col h-full w-full fixed left-0 top-[50px] py-5 text-white `}>
        <button className='w-full active'>Dashboard</button>
        {/* <div className='line'></div> */}
        <button className='w-full hover:underline' onClick={()=>router.push('/login')}>Login Page</button>
    </div>
  );
};

export default SideNav;
