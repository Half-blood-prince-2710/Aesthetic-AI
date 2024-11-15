"use client"
import Image from "next/image"
import { useState } from "react"

const ImageSelectionComponent = ({ imageSelected }) => {
    const [file,setFile] = useState()
    const handleChange = (e) => {
        imageSelected(e.target.files[0])
        setFile(e.target.files[0]);
    }
   
    return <div className="flex flex-col w-full h-full items-center justify-center shadow-md shadow-rose-900 p-2">
        <label className="text-lg ">Select Image of your room</label>
        <div className={`${file?'p-2':'p-36'} mt-4 border-rose-600 border-2 rounded-xl  flex justify-center items-center`}>
            <label htmlFor="upload-image" >
                {!file ? <Image src="/upload.svg" alt="image-upload" width='80' height='80'  /> :
                <Image src={URL.createObjectURL(file)} alt='uploaded image' width='300' height='300' className="object-cover"/>
                }
            </label>
            <input type='file' accept='image/*' id="upload-image" style={{ display: 'none' }}
            onChange={handleChange}
            />
        </div>
    </div>
}
export default ImageSelectionComponent