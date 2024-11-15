import React from 'react';
import Image from 'next/image';
import { usePollinationsImage } from '@pollinations/react';
const AiContent = ({ prompt }) => {
   const seednum = Math.floor(Math.random() * 100);
  const imageUrl = usePollinationsImage(prompt, {
    width: 1024,
    height: 1024,
      seed: seednum,
    model: 'flux',
    nologo: true
  });

  return (
    <div>
      
        <Image
          src={imageUrl} 
        alt="Generated image" 
        width="512"
        height='512'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
    
    </div>
  );
  
};
export default AiContent






    
    