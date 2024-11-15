import React from 'react'
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TextArea = ({selectedText}) => {
  return (
    <div className='grid w-full gap-1.5'>
      <Label htmlFor='message' className='text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        Additional Details
      </Label>
      <Textarea
        placeholder='Type your Additional details to design your room'
              id='message'
        onChange={(e) => selectedText(e.target.value)}
        className='w-full h-24 border-rose-800 shadow-sm shadow-gray-800'
      />
    </div>
  );
}

export default TextArea
