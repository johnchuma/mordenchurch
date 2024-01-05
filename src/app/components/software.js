import { useState } from "react";
import Image from "next/image"
const Software = () => {
  const [selectedIndex, setselectedIndex] = useState(0);

    return ( <div>
          <div className="w-screen py-32 mt-32  text-start md:text-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-600 to-indigo-400">
          
          
          <div className="text-white text-2xl md:text-5xl w-11/12 mx-auto font-bold mb-5 ">Everything you need to run your church.</div>
          <div className=" w-11/12 md:w-8/12 mx-auto">
          <p className="text-white text-base">All-encompassing, from managing church members' information to overseeing finances, handling documents, and organizing calendars.</p>
          </div>
     <div className="flex pt-12 md:pt-24 items-center">
      <div className="w-11/12 mx-auto md:w-4/12   md:pl-8  ">
        <div className="space-y-0">
        {[
            {title:"Church members",description:"Register and manage church members using our system",image:""},
            {title:"Offerings & contributions",description:"Store record of offerings and contributions using our system ",image:""},
            {title:"Church groups",description:"All church groups have their sub system for data management",image:""},
            {title:"Documents",description:"Store all important files and images so they don't get lost ",image:""},
          ].map((item,index)=>{
            return <div onClick={()=>{
                     setselectedIndex(index)
            }} className={`text-start cursor-pointer py-6 px-8 ${index==selectedIndex && 'bg-white bg-opacity-5'}  rounded-l-xl`} >
              <div className="font-semibold text-lg pb-1 text-white">{item.title}</div>
              <div className="text-white text-sm">{item.description}</div>
            </div>
          })}
        </div>
          
      </div>
      <div className="w-8/12 hidden md:block">
        <Image width={2000} height={2000} className="rounded-l-xl " src={"/members.png"}/>
      </div>
     </div>
     
     </div>
    </div> );
}
 
export default Software;