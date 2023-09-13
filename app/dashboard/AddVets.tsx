import React from 'react'

export default function AddVets() {
    const handleForm=(e:any)=>{
        e.preventDefault()

        const form=e.target;
        const data={
            vetName: String (form.vetName.value),
            photo_url: String (form.photo_url.value),
            specialty: String (form.specialty.value),
            email: String (form.email.value),
            phone: String (form.phone.value),
        }
        form.reset()
    }
  return (
    <div>
         <form onSubmit={handleForm} className='grid gap-1 mx-20 pt-5'>
            <input type="text" name='vetName' className='border p-1' placeholder='Vet Name'/>
            <input type="text" name='photo_url' className='border p-1' placeholder='Photo url'/>
            <input type="text" name='specialty' className='border p-1' placeholder='Specialty'/>
            <input type="text" name='email' className='border p-1' placeholder='Email'/>
            <input type="text" name='phone' className='border p-1' placeholder='Phone'/>
            <input type="submit" value="Add" className=' bg-emerald-900 text-white py-2 my-2 hover:bg-emerald-700' />
        </form>
    </div>
  )
}
