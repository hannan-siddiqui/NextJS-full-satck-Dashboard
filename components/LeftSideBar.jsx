"use client";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

import { useRouter } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const LeftSideBar = () => {
  const pathname = usePathname();

  const router = useRouter();
  const supabaseClient = createClientComponentClient();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      router.push("/auth"); // Redirect to login page
    }
  };
 

  return (
    <div className="mt-4 w-[250px]  py-10 h-screen bg-neutral-900  flex justify-start  items-start rounded-2xl  flex-col max-lg:hidden">
      
      {/* Left side: Logo */}
      <div>
        <h1 className="text-4xl text-orange-700 font-extrabold  px-4 py-2 rounded-xl">
        <div className="flex justify-center items-center" >
           <div> Intellify</div> 
           </div>
        </h1>
      </div>

      {/* sidebar toggle */}
      
      {/* Right side: Links and User Profile */}
      <div className="mt-8 flex  gap-x-4 flex-col ">

        {/* Navigation Links */}
        <div className="ml-5 flex  items-center gap-y-8 flex-col ">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.label}
              className={`flex items-center w-[180px] p-2  rounded-lg  mt-4  hover:text-black hover:bg-[#9b9b9c] transition-all ease-in-out ${
                pathname === link.url
                  ? "text-[#000000] bg-[#ffffff]  border border-neutral-400"
                  : "text-white"
              }`}
            >
              {link.icon} <p className="ml-2">{link.label}</p>
            </Link>
          ))}
        </div>


        <div onClick={handleLogout} className="ml-3 flex justify-start items-center w-[180px] p-2 border border-white  rounded-2xl  mt-6  hover:text-black hover:bg-[#9b9b9c] transition-all ease-in-out hover:cursor-pointer">
             
                  <div  className="text-3xl" ><CiLogout/></div><div className="ml-4">Logout</div>
               
        </div> 
        
      </div>

    </div>
  );
};

export default LeftSideBar;
