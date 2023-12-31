import HomeLayouts from '../HomeLayouts'
import Title from '@/app/components/Title'
import AdoptionProgramProps from '@/app/interfaces/adoptionProgramProps';
import Image from 'next/image';

async function getAdoptionProgramData() {
  const res = await fetch('https://all-paws-matter-server.vercel.app/up-for-adoption', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}

const Page:React.FC<{}> = async () => {
  const adoptionData = await getAdoptionProgramData()

  return (
    <HomeLayouts>
      <Title title='Up for adoption' />
      <div className='grid grid-cols-4 w-3/4 mx-auto gap-5 mb-20'>
        {
          adoptionData?.map((x: AdoptionProgramProps) =>
            <div key={x._id} className='grid gap-2 text-gray-600 text-sm'>
              <Image src={x.photo_url} alt='' width={500} height={500} />
              <div className='grid gap-2'>
                <p className='text-base font-semibold'>{x.animal_type}</p>
                <h1>age: {x.age}</h1>
                <p>Breed: {x.breed}</p>
                <p className={x.type === 'Up for adoption' ? 'text-green-700' : 'text-red-600'}>Status: {x.type}</p>
                <p>{x.description}</p>
                <button className=' bg-emerald-700 text-white hover:bg-emerald-500 py-2'>Adopt</button>
              </div>
            </div>)
        }
      </div>
    </HomeLayouts>
  )
}

export default Page
