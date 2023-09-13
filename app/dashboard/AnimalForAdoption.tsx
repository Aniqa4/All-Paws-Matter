import React from 'react'

export default function AnimalForAdoption() {
    const handleForm=(e:any)=>{
        e.preventDefault()

        const form=e.target;
        const data={
            animal_type: String (form.animal_type.value),
            photo_url: String (form.photo_url.value),
            age: String (form.age.value),
            breed: String (form.breed.value),
            type: String (form.type.value),
            description: String (form.description.value),
        }
        form.reset()
    }
  return (
    <div>
        <form onSubmit={handleForm} className='grid gap-1 mx-20 pt-5'>
            <input type="text" name='animal_type' className='border p-1' placeholder='Animal Type'/>
            <input type="text" name='photo_url' className='border p-1' placeholder='Photo url'/>
            <input type="text" name='age' className='border p-1' placeholder='Age'/>
            <input type="text" name='breed' className='border p-1' placeholder='Breed'/>
            <input type="text" name='type' className='border p-1' placeholder='Type' defaultValue={'Up for adoption'} disabled/>
            <input type="text" name='description' className='border p-1' placeholder='Description'/>
            <input type="submit" value="Add" className=' bg-emerald-900 text-white py-2 my-2 hover:bg-emerald-700' />
        </form>
    </div>
  )
}
