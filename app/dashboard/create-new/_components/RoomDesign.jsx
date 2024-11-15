import React, { useState } from "react";
import Image from "next/image";

const RoomDesign = ({
  selectedRoomDesign,
}) => {
  const [
    selectedImage,
    setSelectedImage,
  ] = useState(null);

  const images = [
    {
      id: 1,
      src: "/modern.webp",
      label: "Modern",
    },
    {
      id: 2,
      src: "/industrial.webp",
      label: "Industrial",
    },
    {
      id: 3,
      src: "/bohemian.webp",
      label: "Bohemian",
    },
    {
      id: 4,
      src: "/traditional.webp",
      label: "Traditional",
    },
    {
      id: 5,
      src: "/rustic.webp",
      label: "Rustic",
    },
    {
      id: 6,
      src: "/minimalist.webp",
      label: "Minimalist",
    },
  ];

  const handleImageClick = ({
    id,
    label,
  }) => {
    setSelectedImage(id);
    selectedRoomDesign(label);
  };

  return (
    <div className='w-full '>
      <h2 className='text-xl font-bold mb-2'>
        Select Room Design Style
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
        {" "}
        {/* Added md:grid-cols-3 for larger screens */}
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative cursor-pointer border-2 shadow-rose-800 shadow-sm rounded-lg overflow-hidden transition-transform transform ${
              selectedImage === image.id
                ? "border-indigo-500 scale-105 p-1"
                : "border-transparent"
            }`}
            onClick={() =>
              handleImageClick(image)
            }>
            <Image
              src={image.src}
              alt={image.label}
              width={100} // Smaller width
              height={75} // Smaller height
              className='w-full h-auto object-cover' // Make height auto to maintain aspect ratio
            />
            <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-1 text-sm'>
              {" "}
              {/* Smaller padding and text size */}
              {image.label}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default RoomDesign;
