import React, { useEffect, useState } from 'react';
import  Link  from 'next/link';
import { IoExitOutline } from "react-icons/io5";
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("User");
    useEffect(()=>{
        const userData = JSON.parse((localStorage as any).getItem('userData'));
        if(!userData){
            alert("Please log in");
            router.push("/login");            
            return;
        }
        setUsername(userData.username);
        // eslint-disable-next-line
    },[])
    
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav style={{padding : '0px 20px'}}  className="navbar shadow-lg z-20">
                <div className="navbar__logo">
                        ♾️ BEYOND
                </div>
                
                <p className='hideInMob md:inline-flex text-white text-xl'>Welcome, {username} 👋</p>
                <ul  style={{marginBottom : "0px", paddingLeft: "0"}} className={open ? "navbar__list active" : "navbar__list"}>
                    <li>
                        <Link href="/logout" >
                            <span className='flex items-center '>
                            <span><IoExitOutline /></span> <span className="ml-3">Logout</span>
                            </span>
                        </Link>
                    </li>
                    
                </ul>
                <div className="navbar__menu" onClick={handleClick}>
                    <div className={open ? "navbar__menu-icon open" : "navbar__menu-icon"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav