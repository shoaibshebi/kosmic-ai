import React from "react";

const Container = ({ children }: any) => {
  return (
    <div className='bg-primary-clr h-full w-full flex flex-col '>
      {children}
    </div>
  );
};

export default Container;
