"use client"

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { sendOrder } from "../../controllers/order_controller";
import { auth } from "../../utils/firebase_helper";
import { useParams } from "next/navigation";
import Link from "next/link"
import { useEffect, useState } from "react";

const CreatePage = () => {
    const {plan} = useParams()
    const [price, setPrice] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [isSent, setIsSent] = useState(false);
  
    useEffect(() => {
       auth.onAuthStateChanged((user)=>{
          if(user){
            setUser(user)
          }else{
            setUser(null)
          }
       })
    }, []);

    useEffect(() => {
     switch (plan) {
      case "1":
        setPrice("35,000TSH")
        break;
      case "2":
        setPrice("50,000TSH")
        break;
      case "3":
        setPrice("65,000TSH")
        break;
     
      default:
        break;
     }
    }, []);
    return ( <div>
        <Navbar/>
        {isSent?<div className="w-8/12 mx-auto text-center py-20">
          <div className="font-semibold text-green-600 text-sm">Sent successfully </div>
                    <div className="text-3xl font-bold pb-2 pt-2">View your order</div>
                    <div className="w-6/12 mx-auto">
                        <div className="text-base ">Your order is sent, we will contact you soon, you can view your order below</div>
                        <div className="w-6/12 mx-auto">
                        <Link href="/order"  className="px-5 py-3 mt-6 cursor-pointer items-center w-full justify-center space-x-2
                         flex text-sm text-center rounded-full bg-gray-900 text-white">View order</Link>
                        </div>
                        </div>
                       

        </div>:
        <div>
          <form onSubmit={(e)=>{
                      e.preventDefault();
                      setIsLoading(true)
                      const name = e.target.name.value;
                      const email = e.target.email.value;
                      const church = e.target.church.value;
                      const address = e.target.address.value;
                      const appointmentDate = e.target.appointmentDate.value
                      sendOrder(name,email,plan,address,church,appointmentDate).then(()=>{
                      setIsLoading(false)
                      setIsSent(true)
                      // router.push("/")
                      })
                }}>
                <div className="py-24 w-10/12 mx-auto text-center justify-center">
                  {/* {user&&user.displayName} */}
                    <div className="font-semibold text-indigo-600 text-sm">Send an order </div>
                    <div className="text-3xl font-bold pb-4 pt-2">Place a new order</div>
                    <div className="space-y-5">
                        <div className="w-6/12 mx-auto">
                        <div className="text-base ">Send us this request and we will check with you in few minutes for next steps</div>
                        </div>
                        <div className="w-8/12 mx-auto space-y-5">
                          <div className="grid grid-cols-2 gap-5">
                              
                          <input type="text" name="name" value={user&&user.displayName} placeholder="Your name" className="py-1   placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          <input type="text" name="email" value={user&&user.email} placeholder="Your email" className="py-1   placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          <input type="text" name="phone" placeholder="Your phone" required className="py-1 placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          <input type="text" name="address" placeholder="Your address" required className="py-1 placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          <input type="text" name="church" placeholder="Church name" required className="py-1 placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          <input type="text" name="price" value={price} placeholder="Plan price" className="py-1 placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          <div>
                          <div className="text-sm text-start text-indigo-600 pb-2">When can we come to your church/office ?</div>
                          <input type="date" name="appointmentDate" placeholder="Appointment date" className="py-1 placeholder:text-sm rounded-lg w-full ring-1 border-gray-200 ring-gray-200  focus:ring-indigo-600 "/>
                          </div>
                          </div>
                          
                        
                        </div>
                    <div className="w-2/12 mx-auto py-10  ">
                  
                    
                    <button type="submit" className="px-5 py-3 items-center w-full justify-center space-x-2 flex text-sm text-center rounded-full bg-indigo-600 text-white">
                    {isLoading&&<svg class="text-indigo-600 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24">
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-white">
            </path>
          </svg>}
                      Send order</button>
                    </div>
                    </div>
                </div>
                </form>
        </div>
        
        }
      
        
        <Footer/>
    </div> );
}
 
export default CreatePage;