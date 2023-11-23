import React from 'react';

interface TitleProps {
    title: string;
  }

function Title({title}:TitleProps) {
  return (
    <div>
        <h1 className=' text-center py-10 text-xl uppercase'>{title}</h1>
    </div>
  )
}

export default Title