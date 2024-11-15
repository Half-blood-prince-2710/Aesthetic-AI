"use client";
import { useState } from "react";
import ImageSelectionComponent from "./_components/ImageSelectionComponent";
import RoomType from "./_components/RoomType";
import RoomDesign from "./_components/RoomDesign";
import TextArea from "./_components/TextArea";
// import { AlertDialogComponent } from "./_components/alertDialog";
import { Button } from "@/components/ui/button";

import AiContent from "./_components/AiContent";

import Image from "next/image";

export default function Page() {
  const [data, setData] = useState({ image: "", roomType: "", roomDesign: "", descrip: "" });
  const { roomDesign, roomType, descrip } = data;
  const [imageDisplay, setImageDisplay] = useState(false)
  
  const prompt = `An imaginative and visually captivating room type ${roomType} illustrating a style of ${roomDesign} design in styling the room with no extra with bold and vibrant colors unique and creative shapes for each node and a lively background with most futuristic and realistic type of design you provide for this room description ${descrip}`;
  

  const handleInputChange = (value, field) => {
    setData({
      ...data,
      [field]: value,
    });
  };
  const handleGenerate = () => {
    if (roomDesign && roomType) {
      
      setImageDisplay(true)
    } else {
      console.log('add fields')
    }
  }
  

  return (
    <div className='w-full bg-gray-950 h-screen flex flex-col gap-4 mt-4 '>
      <div className='flex flex-col w-full items-start md:items-center p-4 justify-center'>
        <h1 className='text-2xl text-rose-800 font-bold md:text-4xl mb-4'>
          Redesign Your Space Effortlessly
        </h1>
        <div className='text-md  text-rose-500 md:text-lg'>
          Upload your room photo and select a style. Aesthetic AI transforms your space in moments. Start your journey today!
        </div>
      </div>
      <div className='flex flex-col md:flex-row h-3/4 gap-24 items-center mt-8 p-2 mb-10'>
        <div className='w-full h-4/5 md:w-1/2 flex justify-center items-center mb-8 pb-4'>
          {imageDisplay ? <AiContent prompt={prompt}/> : <ImageSelectionComponent
            imageSelected={(e) => handleInputChange(e, "image")}
          />}
          {/* <Image src={`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`} width='512' height='512'/> */}
        
        </div>
        <div className="flex flex-col h-full w-full md:w-1/2 gap-4 items-center justify-center p-4 mt-8 mb-8 shadow-md shadow-rose-900">
          <RoomType selectedRoomType={(value) => handleInputChange(value, "roomType")} />
          <RoomDesign selectedRoomDesign={(value) => handleInputChange(value, "roomDesign")} />
          <TextArea selectedText={(value) => handleInputChange(value, "descrip")} />
          {/* <AlertDialogComponent data={data} />
           */}
          <Button onClick={()=>handleGenerate()} className="pb-8 mb-8 border-2 rounded-xl border-rose-800 w-fit  my-4 mx-2 w-fit  bg-rose-800 text-white rounded p-4 w-2/3">Generate</Button>
        </div>
      </div>
    </div>
  );
}