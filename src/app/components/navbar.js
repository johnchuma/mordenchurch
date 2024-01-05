import CustomButton from "./button";
import Image from "next/image"
const Navbar = () => {
    return ( <div>
        <nav className="px-4 md:px-8 py-8 flex justify-between items-center">
            <div className="flex space-x-8 items-center">
             <div className="flex items-center space-x-5 cursor-pointer">
                <Image height={40} className="" width={40} src={"/logo.png"}/>
             <div className="font-bold text-lg md:text-xl cursor-pointer  ">Modern <span className="text-indigo-600">Church</span> </div>

             </div>
            <div className="hidden md:block">
            <div className="flex space-x-8 items-center text-sm  ">
            {[{title:"Features",path:"#features"},
        {title:"Testimonials",path:"#testimonials"},
        {title:"Pricings",path:"#pricings"},
        
        ].map((item)=><a key={item.title} href={item.path}  className="hover:bg-indigo-50 py-1 px-2 transition-all duration-300 cursor-pointer rounded">{item.title}</a>)}
            </div> 
            </div>
            
            </div>
            <div className="flex space-x-8 items-center">
            <div className="text-sm hidden md:block hover:bg-indigo-50 py-1 px-2 transition-all duration-300 cursor-pointer rounded">Sign in</div>
            <div className=" cursor-pointer py-2 md:py-[10px] px-4 rounded-full hidden md:block bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 font-semibold text-white text-sm">
                Get started
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
            stroke="currentColor" class="w-6 h-6 md:hidden">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            </div>

            </div>
            
        </nav>
    </div> );
}
 
export default Navbar;