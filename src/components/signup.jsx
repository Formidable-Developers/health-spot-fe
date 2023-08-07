import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [userData, setUserData] = useState({firstname: '', surname: '', email: '',DOB: '', phone: '', password: ''})

    const handleSubmit = (e) => {
     e.preventDefault()
     console.log(userData)
     setUserData({firstname: '', surname: '', email: '',DOB: '', phone: '', password: ''})
    }
  return (
    <div className="flex flex-col items-center gap-4 pb-4"> 
        <div className="text-center text-black -mt-10">
        <h2 className="font-semibold text-xl">Sign Up</h2>
     <p className="text-sm px-4">Please enter your personal details to create your account</p>
        </div>
        
     <form onSubmit={handleSubmit} className="flex flex-col w-full px-6 gap-3">
        <div>
            <label>Name</label>
            <div className='flex gap-2'>
                <input type='text' placeholder='Firstname' value={userData.firstname} onChange={(e) => setUserData(userData => ({...userData, firstname:e.target.value}))} className="w-full rounded-md p-2 border border-[#8A888A]" />
                <input type='text' placeholder='Surname' value={userData.surname} onChange={(e) => setUserData(userData => ({...userData, surname:e.target.value}))} className="w-full rounded-md p-2 border border-[#8A888A]" />
            </div>
        </div>
        <div>
        <input type='email' placeholder='Email' value={userData.email} onChange={(e) => setUserData(userData => ({...userData, email:e.target.value}))} className="w-full rounded-md p-2 border border-[#8A888A]" />
        </div>
        <div>
            <label>Date of Birth</label>
        <input type='date' value={userData.DOB} onChange={(e) => setUserData(userData => ({...userData, DOB:e.target.value}))} className="w-full rounded-md p-2 border border-[#8A888A]" />
        </div>
        <div>
            <label>Phone Number</label>
        <input type='tel' placeholder='Phone Number' value={userData.phone} onChange={(e) => setUserData(userData => ({...userData, phone:e.target.value}))} className="w-full rounded-md p-2 border border-[#8A888A]" />
        </div>
        <div>
            <label htmlFor='password'>Password</label>
        <input type='password' id='password' placeholder='Password' value={userData.password} onChange={(e) => setUserData(userData => ({...userData, password:e.target.value}))} className="w-full rounded-md p-2 border border-[#8A888A]" />
        </div>
        <button className="bg-[#9F20AB] rounded-full text-white py-2">Sign up</button>
     </form>
     <p className="text-[#545254] text-sm">Already have an account?<Link to='/login' className="text-[#9F20AB]">Login</Link> </p>

    </div>
  )
}

export default Signup