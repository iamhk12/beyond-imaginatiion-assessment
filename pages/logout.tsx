import { useRouter } from "next/router";
import { useEffect } from "react"

export default function Logout(){
    const router = useRouter();
    
    useEffect(()=>{
        localStorage.removeItem('userData');
        // toast.success("Logged out ")
        router.push("/login");
    })
    return(
        <>
        </>
    )
}