import React from 'react';
import { Circles } from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Circles
        height={50}
        width={100}
        color="#00BFFF"
        ariaLabel="circles-loading"
       visible={true}
       className='m-5'
      />
      <p className='text-lg text-center px-2 '> { message }</p>
    </div>
  )
}

export default Spinner