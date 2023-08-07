import logo from "../assets/logo.svg";
import { Link} from "react-router-dom";

const Home = () => {
    
  return (
    <div className="px-8 py-8 flex flex-col items-center gap-16">
      <h2 className="text-[#9F20AB] -mt-20 text-2xl">Welcome to the fastest link to your medical service</h2>
      <div className="flex justify-center">
      <img src={logo} alt="logo" />
      </div>
      
      <Link to='/login' className=" flex justify-center items-center bg-[#9F20AB] rounded-full text-white w-[193px] h-[50px] border-none">Get Started</Link>
    </div>
  );
};

export default Home;
