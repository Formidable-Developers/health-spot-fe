import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'
import {BsApple, BsFacebook} from 'react-icons/bs'
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
     e.preventDefault()
     console.log({email, password})
     setEmail('')
     setPassword('')
    }
  return (
    <div className="flex flex-col items-center gap-4 pb-4 w-full">
        <div className="text-center text-black -mt-10">
        <h2 className="font-semibold text-xl">Login</h2>
      <p className="text-sm px-4">Please enter your personal details to access your account</p>
        </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col w-full px-6 gap-2">
        <div>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-md p-2 border border-[#8A888A]" />
        </div>
        <div>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-md p-2 border border-[#8A888A]"/>
        </div>
        <Link to="" className="text-sm underline p-1 text-[#545254]">Forgot your Password?</Link>
        <button className="bg-[#9F20AB] rounded-full text-white py-2">Login</button>
      </form>
      <p className="text-black">Or</p>
      <div className="flex flex-col w-full px-6 gap-2 text-black">
      <button className="flex items-center justify-evenly bg-[#F0EFEF] rounded-md shadow-md py-2"><BsFacebook className="text-2xl text-blue-600"/> Continue with Facebook</button>
      <button className="flex items-center justify-evenly bg-[#F0EFEF] rounded-md shadow-md py-2"><FcGoogle className="text-2xl" />Continue with Google</button>
      <button className="flex items-center justify-evenly bg-[#F0EFEF] rounded-md shadow-md py-2"><BsApple className="text-2xl text-black" />Continue with Apple</button>
      </div>
      <p className="text-[#545254] text-sm">
        Do not have an account? <Link to="/signup" className="text-[#9F20AB]">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
