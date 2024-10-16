import { GoGraph } from "react-icons/go";
import { CiShop } from "react-icons/ci";
const Card = ({value, title}) => {
  return (
   
      <div className="w-[300px] p-6 md:p-2 md:w-[230px]   rounded-2xl bg-pink-200 border border-red-600">
        <div className= "ml-4 mt-4 text-6xl md:ml-5  rounded-3xl  flex">
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full  p-1 bg-green-400"><CiShop/> </div> <div className="mt-4 text-red-600 ml-10 text-7xl"><GoGraph/></div>
        </div>
        <div className="md:text-5xl text-4xl font-bold text-black ml-7 mt-4">$ {""+ title}</div>
        <div className="text-3xl  ml-7 mt-2 text-black  font-semibold">Total sales</div>

        <div className="md:mt-6 mt-2 text-5xl  md:text-6xl font-semibold text-blue-600 ml-7">Item  {" " + value}</div>

      
      </div>
   
  );
};




export default Card;
