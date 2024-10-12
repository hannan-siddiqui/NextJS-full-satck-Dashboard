"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navLinks } from "@/lib/constants";
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const TopBar = () => {
  
  const [dropdownMenu, setDropdownMenu] = useState(false);
  
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
    <div className="bg-[#323434]  sticky top-0 z-20 w-[400px]  flex  justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
      <h1 className="text-red-600 font-extrabold text-lg ">Intellify</h1>

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-white" : "text-neutral-500"}`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div onClick={handleLogout} className="ml-8 flex justify-start items-center w-[80px] p-2 border border-white  rounded-2xl  mt-6  hover:text-black hover:bg-[#9b9b9c] transition-all ease-in-out hover:cursor-pointer">
             
                  <div className="ml-4">Logout</div>
               
        </div>

      <div className="relative flex gap-4 items-center text-white">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
         <div>
           <div className="absolute top-10 right-6 flex flex-col gap-8 p-5 bg-[#121212] shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                onClick={() => setDropdownMenu(!dropdownMenu)}
                href={link.url}
                key={link.label}
                className="flex gap-4 text-body-medium text-neutral-500"
              >
                {link.icon} <p>{link.label}</p>
              </Link>
              
            ))}
          </div>
         
           
         </div>
          
        )}
    
      </div>
    </div>
  );
};

export default TopBar;