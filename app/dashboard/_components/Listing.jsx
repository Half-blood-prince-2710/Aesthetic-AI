"use client"

import { useState, useContext } from "react";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import React from "react";
import EmptyState from "./EmptyState";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";


const Listing = () => {
  const { userDetail } = useContext(
    UserDetailContext
  );
  const { user } = useUser()
  const [roomList, setRoomList] = useState([])
  return (

    <div className="flex flex-col gap-4 justify-center items-center w-full  h-full p-16 ">
      <div className="flex w-full gap-8 justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl text-rose-800 font-semibold">
            {/* {`Hello ${userDetail?.name}`}
             */}
            Hello Manish Gupta
          </h1>
          <div className="text-lg mt-1 p-1 text-rose-400 overflow-hidden">
            {" "}
            Welcome to Aesthetic Ai
            where Crafting Tommorow's
            Art Today
          </div>
        </div>
        <Link href='/dashboard/create-new' >
        <button className='cursor-pointer my-4 mx-2 w-fit shadow-md bg-rose-800 text-white px-4 py-2 m-2 rounded-xl'>
          + Design your Room
        </button>
        </Link>
      </div>
      {roomList.length == 0 ? <EmptyState /> :
        <div>
        LISTING
        </div>}
    </div> 
  );
};

export default Listing;
