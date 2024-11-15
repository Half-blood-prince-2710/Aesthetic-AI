import Image from "next/image";
import Link from "next/link";

const EmptyState = () => {
    return (
      <div className='w-full flex flex-col gap-4 justify-center items-center mt-16 '>
        <div className=''>
          <Image
            alt='design placeholder'
            src='/room.jpg'
            width={700}
            height={500}
          />
        </div>
        <Link href='/dashboard/create-new'>
          <button className='cursor-pointer my-4 mx-2 w-fit shadow-md bg-rose-800 text-white px-4 py-2 m-2 rounded-xl'>
            + Design your Room
          </button>
        </Link>
      </div>
    );
}
export default EmptyState;