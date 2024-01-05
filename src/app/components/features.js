
import Image from "next/image"
import { useState } from "react";
const Features = () => {
    const [selectedIndex, setselectedIndex] = useState(0);
    const [xNumber, setxNumber] = useState("translate-x-[3rem]");
    return (<div>
          <div className="w-11/12 md:w-6/12 text-start md:text-center mx-auto py-16 md:py-32">
     <div className="text-3xl  md:text-4xl font-bold pb-3">Simplify everyday church tasks.</div>
     <div>Effortless Daily Tasks and Detailed Reports with Our Streamlined Software.</div>
     </div>
  <div className="w-11/12 mx-auto">
  <div className="grid  grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 pb-24">
    {[
        {
        image:"/members.png",
        subTitle:"Members reports",
        title:"Simplifying Congregational Insight with our Advanced Report System.",
        description:"Stay Informed, Stay Connected, Stay Ahead – Explore the Power of Always Up-to-Date Reporting Features Tailored for Your Congregation"},
        {
        image:"/members.png",
        subTitle:"Contributions reports",
        title:"Insights into Generosity: Navigating Contributions Reports with Ease",
        description:"Effortless Tracking and In-Depth Analysis for a Transparent Overview of Congregational offerings and contributions"},
        {
        image:"/members.png",
        subTitle:"Events calender",
        title:"Seamless Scheduling: Elevating Your Experience with our Events Calendar",
        description:"Unlock Seamless Event Management with Intuitive Planning and Easy Attendance Tracking– Your Ultimate Companion for a Stress-Free Calendar Experience."}
    ].map((item,index)=>{
      return <div onClick={()=>{
        switch (index) {
          case 0:
          setxNumber("translate-x-[3rem]")
            break;
            case 1:
              setxNumber("-translate-x-[35rem]")
                break;  
                case 2:
                  setxNumber("-translate-x-[72rem]")
                    break;  
          default:
            break;
        }
           setselectedIndex(index)
      }} className="">
      <div className="">
      {index == 0 &&<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`w-8 h-8 text-white ${selectedIndex == 0 ? "bg-indigo-600":"bg-gray-400"}  p-1 rounded-lg`}>
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
      </svg>}
      {index == 1 &&  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`w-8 h-8 text-white ${selectedIndex == 1 ? "bg-indigo-600":"bg-gray-400"}  p-1 rounded-lg`}>
        <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
        <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
        <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
      </svg>}
      {index == 2 &&<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class={`w-8 h-8 text-white ${selectedIndex == 2 ? "bg-indigo-600":"bg-gray-400"}  p-1 rounded-lg`}>
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
      </svg>}

       
     
      


      </div>
      <div className={`text-sm ${selectedIndex == index ? "text-indigo-600":"text-gray-500"} text-indigo-600 font-semibold mt-5`}>{item.subTitle}</div>
      <div className="text-xl text-black py-2 font-semibold">{item.title}</div>
      <div className="text-sm text-gray-600">{item.description}</div>
      {/* <Image fill src={item.image} className="block md:hidden" /> */}
     </div>
    })}
     
     
  </div>
  <div className=" bg-gray-300 py-14 mx-auto rounded-3xl hidden md:block">
    <div className="flex overflow-hidden mx-0 space-x-10  ">
      {["","",""].map((item,index)=>{
        return <div onMouseEnter={()=>{
          setselectedIndex(index)
          switch (index) {
            case 0:
            setxNumber("translate-x-[3rem]")
            break;
            case 1:
            setxNumber("-translate-x-[35rem]")
            break;  
            case 2:
            setxNumber("-translate-x-[72rem]")
            break;  
            default:
            break;
              
          }
        }}>
        <Image width={2000} height={2000} className={`max-w-none w-[45rem]  rounded-2xl transition-all duration-300
         ${xNumber} `} src={"/members.png"}/>
        </div>
        
      })}
      
    </div>
  </div>
  </div>
    </div>  );
}
 
export default Features;