import React from 'react';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div>
      <h1 className=' text-center py-10 text-xl uppercase'>{title}</h1>
    </div>
  )
}