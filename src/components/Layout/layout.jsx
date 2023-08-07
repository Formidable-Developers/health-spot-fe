import eclipse from '../../assets/eclipse.svg'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex justify-center w-screen max-w-full h-full'>
    <div className='flex flex-col items-center justify-center md:shadow max-w-[400px]'>
        <img src={eclipse}  alt='eclipse' className=' w-full -mt-16 object-cover rounded'/>
        <Outlet />
    </div>
    </div>
  )
}

export default Layout