import {
    LayoutDashboard,
    Shapes,
    
    Tag,
    UsersRound,
    Clock,
    MessagesSquare,
    Weight,
    ShieldCheck,
  } from "lucide-react";
  
 
  export const navLinks = [
  
    {
      url: "/dashboard",
      icon: <LayoutDashboard />,
      label: "Dashboard",
    },
  
    {
      url: "#",
      icon: <Clock />,
      label: "Schedule",
    },
   
    {
      url: "/changedata",
      icon: <MessagesSquare />,
      label: "change data",
    },
   
    {
      url: "#",
      icon: <UsersRound />,
      label: "Customers",
    },
  
    {
      url: "#",
      icon: <UsersRound />,
      label: "Customers",
    },
  
   {
    url:"#",
    icon:<ShieldCheck />,
    label:"Certificate",
   }
  
  ];