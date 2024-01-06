"use client"
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase_helper";
import { getOrder } from "../controllers/order_controller";

export const UserContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [order, setOrder] = useState(null);
    useEffect(() => {
       auth.onAuthStateChanged((user)=>{
         if(user){
            getOrder(user.email).then((data)=>{
                setOrder(data)
            })
            setUser(user)
         }
         else{
            setUser(null)
         }
       })
    }, []);
    return ( <div>
       <UserContext.Provider value={{user,order}}>{children}</UserContext.Provider>
    </div> );
}
 
export default AuthProvider;