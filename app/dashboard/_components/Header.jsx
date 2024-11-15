"use client"
import Image from "next/image";
import { useContext } from "react";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
    const {userDetail} = useContext(UserDetailContext);
    return (
        <div className="p-5 h-20 w-full flex items-center bg-gray-900 justify-between shadow-md">
            <div className="flex gap-1 w-1/3 items-center">
                {/* <Image src="/madagascar.png" alt="logo" width={60} height={40}  className="text-red-500"/>
                 */}
                <h1 className="text-4xl text-rose-800 md:text-rose-700 font-bold pr-1">MG </h1>
                <h1 className="hidden md:block md:text-3xl md:font-bold md:text-rose-700">Aesthetic Ai</h1>
            </div>
            <div className="flex w-1/3 justify-center text-xl ">
                <button className="p-1 my-4 md:p-4  md:mx-2 w-fit  bg-rose-800 text-white rounded p-2 "> Buy Credits </button>
            </div>
            <div className="flex  gap-4 p-3 justify-end w-1/3">
                <div className="flex items-center gap-2 bg-rose-800 ring-1 ring-gray-900 py-2 px-4 mx-2 rounded-full" >
                    <Image src='/money.png' alt= "credit logo " width={20} height={20} />
                    <h2 className="text-white font-semibold">{userDetail?.credits }</h2>
                </div>
                <UserButton className="h-10 bg-black"/>
            </div>

        </div>
    )
}
export default Header;