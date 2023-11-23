import React from 'react'
import Swal from 'sweetalert2';

export default function AddVets() {

    const handleForm=(e:any)=>{
        e.preventDefault()

        const form=e.target;
        const data={
            vetName: String (form.vetName.value),
            photo_url: String (form.photo_url.value),
            specialty: String (form.specialty.value),
            years_of_experience: String (form.years_of_experience.value),
            phone_number: String (form.phone.value),
            email: String (form.email.value),
        }
        fetch('https://all-paws-matter-server.vercel.app/veterinarians', {
            method: 'POST',
            headers:
                { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'added',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        form.reset()
    }
  return (
    <div>
         <form onSubmit={handleForm} className='grid gap-1 mx-20 pt-5'>
            <input type="text" name='name' className='border p-1' placeholder='Vet Name'/>
            <input type="text" name='photo_url' className='border p-1' placeholder='Photo url'/>
            <input type="text" name='specialty' className='border p-1' placeholder='Specialty'/>
            <input type="text" name='years_of_experience' className='border p-1' placeholder='years_of_experience'/>
            <input type="text" name='email' className='border p-1' placeholder='Email'/>
            <input type="text" name='phone_number' className='border p-1' placeholder='Phone'/>
            <input type="submit" value="Add" className=' bg-emerald-900 text-white py-2 my-2 hover:bg-emerald-700' />
        </form>
    </div>
  )
}
