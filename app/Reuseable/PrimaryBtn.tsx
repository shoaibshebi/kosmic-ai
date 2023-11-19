import React from "react";

interface Props {
  bg: boolean;
  text: string;
  clickhandle: () => void;
}

export default function PrimaryBtn({ bg, text, clickhandle }: Props) {
  return (
    <button
      onClick={clickhandle}
      className={`px-12 py-4 text-white rounded-full transition-colors duration-300  hover:border-neutral-700 font-poppins ${
        bg ? "bg-indigo-700" : "bg-transparent border-neutral-700  border-[1px]"
      } `}
    >
      {text}
    </button>
  );
}
