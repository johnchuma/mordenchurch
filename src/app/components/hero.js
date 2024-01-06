import Link from "next/link"

const Hero = () => {
    return ( <div>
         <div className=" py-20 md:py-32">
     <div className="leading-tight md:leading-tight w-10/12 md:w-8/12  mx-auto text-5xl md:text-6xl text-center font-bold ">Bringing Churches Into The Digital Age</div>
     
     <div className="w-11/12 md:w-6/12 mx-auto text-center text-lg py-10">Empowering Ministries with Seamless Church Management Software for Mobile and Desktop and Elevating Online Presence</div>
     <div className=" w-11/12 md:w-4/12 mx-auto">
      <div className="flex justify-center space-x-3">
      <Link href="#pricings"  className=" py-2 md:py-3 px-5 rounded-full bg-black hover:bg-gray-800 cursor-pointer transition-all duration-300 font-semibold text-white text-sm">
                Get 1 month free
        </Link>
      <div className=" py-2 md:py-3 px-5 flex rounded-full space-x-2 border border-gray-300 hover:border-gray-500 cursor-pointer transition-all duration-300 font-semibold text-black text-sm">
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
        class="w-5 h-5 text-indigo-600">
  <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
</svg>

        </span>

          Watch video
      </div>
      </div>
     
     </div>
     </div>
   
    </div> );
}
 
export default Hero;