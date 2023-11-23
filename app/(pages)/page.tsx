import HomeLayouts from './home/HomeLayouts'
import Services from '../components/Services'
import { ServicesDataProps } from '../interfaces/servicesDataProps'

async function getServices() {
  const res = await fetch('https://all-paws-matter-server-enpletn2q-aniqa4.vercel.app/services', {
    cache: 'no-store'
  })
  const data = await res.json()
  return data
}

const Page:React.FC<{}> = async () => {
  const services = await getServices()

  return (
    <HomeLayouts>
      <div className=' p-5 text-center border my-10'>
        <h1 className='text-3xl font-semibold text-emerald-700'>Welcome To allPawsMatter</h1>
        <p>A Nonprofit Animal Welfare Organization.</p>
      </div>
      <div className=' text-gray-500 container mx-auto'>
        <h1 className=' text-center text-xl font-semibold '>Our Services!</h1>
        <div className='grid grid-cols-2 gap-5 my-10'>
          {
            services.map((service: ServicesDataProps) =>
              <Services key={service._id} heading={service.service_name}
                description={service.description} />)
          }
        </div>
      </div>
    </HomeLayouts>
  )
}

export default Page


