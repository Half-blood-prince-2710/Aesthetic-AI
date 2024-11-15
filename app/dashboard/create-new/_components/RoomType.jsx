import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RoomType = ({ selectedRoomType }) => {
  return (
    <div className='flex flex-col w-full  justify-center shadow-white items-start '>
      <label>Select Room Type</label>
      <Select
        onValueChange={(value) =>
          selectedRoomType(value)
        }>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Room Type' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>
              select Room Below:
            </SelectLabel>
            <SelectItem value='Bedroom'>
              Bedroom
            </SelectItem>
            <SelectItem value='Office'>
              Office
            </SelectItem>
            <SelectItem value='Kitchen'>
              Kitchen
            </SelectItem>
            <SelectItem value='Living Room'>
              Living Room
            </SelectItem>
            <SelectItem value='Bathroom'>
              Bathroom
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType
 