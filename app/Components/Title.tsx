import React from 'react';

interface titleProps {
    title: string;
  }

function Title({title}:titleProps) {
  return (
    <div>
        <h1 className=' text-center py-10 text-xl uppercase'>{title}</h1>
    </div>
  )
}

export default Title