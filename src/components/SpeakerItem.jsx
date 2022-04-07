import React from 'react';

const Organizer = ({ organizer }) => {
  return (
    <div className='flex flex-col items-center justify-center m-auto'>
      <div className='h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 '>
        <img
          src={organizer.avatar || organizer.img}
          alt={organizer.name}
          className=' '
        />
      </div>
      <h1 className='text-yellow-300 uppercase mb-2 text-sm font-bold'>
        {organizer.position || organizer.role}
      </h1>
      <h1 className=' text-xl lg:text-2xl md:text-2xl font-semibold'>
        {organizer.name}
      </h1>
      <h1 className='text-yellow-300 uppercase mt-2 mb-2 text-sm font-bold'>
        {organizer.company || 'World.Org'}
      </h1>
    </div>
  );
};

export default Organizer;
