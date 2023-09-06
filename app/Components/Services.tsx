interface ServicesProps {
  heading: string;
  description: string;
}

export default function Services({heading,description}:ServicesProps) {
    
  return (
    <div className='bg-gray-100 p-5'>
        <h1 className=' font-semibold'>
            {heading}
        </h1>
        <p className='text-sm'>{description}</p>
    </div>
  )
}
