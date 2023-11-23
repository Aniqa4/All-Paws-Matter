import HomeLayouts from '../HomeLayouts'
import Title from '@/app/components/Title'
import Image from 'next/image'
import AnimalRescueProps from '@/app/interfaces/animalRescueProps'

async function getRescuedAnimalData() {
  const res = await fetch('https://all-paws-matter-server.vercel.app/rescued-animals', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}

const Page: React.FC<{}> = async () => {
  const rescuedAnimals = await getRescuedAnimalData()

  const formatDate = (date: string) => {
    const options: any = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <HomeLayouts>
      <Title title='Rescued Animals' />
      <div className='grid grid-cols-3 w-3/4 gap-10 mx-auto mb-20'>
        {
          rescuedAnimals?.map((x: AnimalRescueProps) =>
            <div key={x._id} className='grid gap-2 text-gray-600 text-sm'>
              <Image src={x.photo_url} alt='' width={500} height={500} />
              <div className='grid gap-2'>
                <p className='text-base font-semibold'>{x.animal_type}</p>
                <h1>age: {x.age}</h1>
                <p>Breed: {x.breed}</p>
                <p className={x.type === 'Up for adoption' ? 'text-green-700' : 'text-red-600'}>Status: {x.type}</p>
                <p>Rescued Time: {formatDate(x.date)}
                </p>
                <p>{x.description}</p>
                <button className={x.type === 'Under observation' ? ' bg-gray-700 text-white py-2'
                  : ' bg-emerald-700 text-white hover:bg-emerald-500 py-2'}
                  disabled={x.type === 'Under observation'}>Make an adoption request</button>
              </div>
            </div>)
        }
      </div>
    </HomeLayouts>
  )
}

export default Page
