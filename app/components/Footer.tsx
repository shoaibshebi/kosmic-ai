import { Button } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='flex items-center flex-col md:flex-row bg-zinc-950 justify-between px-6 md:px-12 py-8 space-y-2 text-white border-t-[1px] border-t-neutral-700 md:absolute md:bottom-0 w-full'>
      <Button
        variant='outlined'
        className='px-16 py-4 w-full md:w-fit bg-transparent border-neutral-700 text-white border-[1px] rounded-full font-poppins'
      >
        Back
      </Button>
      <Button className='bg-white w-full md:w-fit py-4 bg-transparent border-neutral-700 text-white border-[1px] rounded-full space-x-32 px-8'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-400 font-poppins'>
          Next
        </span>
        <Image
          className='hidden md:block'
          src='/icons/next-icon.svg'
          alt='next-arrow'
          width={13}
          height={13}
        />
      </Button>
    </footer>
  );
};

export default Footer;