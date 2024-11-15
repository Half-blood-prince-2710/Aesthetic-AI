"use client";
import { useUser  } from "@clerk/nextjs";
import { useEffect,useState } from "react";
import axios from 'axios'; // Make sure to import axios
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) {
    const { user } = useUser();
    const [userDetail,setUserDetail] = useState([])
    // console.log(user)

    const verifyUser  = async () => {
        try {
            const dataResult = await axios.post('/api/verify-user', {
                user: user
            });
            setUserDetail(dataResult.data.result)
            console.log(" inside verify user function",dataResult.data.result);
        } catch (error) {
            console.error("Error verifying user:", error);
        }
    };

    useEffect(() => {
        if (user) {
            verifyUser (); // Call verifyUser  only if user is defined
        }
    }, [user]);

    return (
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }} >

        <div>
            {children}
        </div>
        </UserDetailContext.Provider>
    );
}

export default Provider;