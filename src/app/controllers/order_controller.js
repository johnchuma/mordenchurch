const { firestore } = require("../utils/firebase_helper")
import {Timestamp, collection, addDoc, serverTimestamp, doc, setDoc, getDoc, query, getDocs, where} from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid';
export const sendOrder = async(name,email,plan,address,church,appointmentDate)=>{
var timestamp = Timestamp.now();
  var id = uuidv4();
  const ordersCollection = collection(firestore, 'orders');
  const randomIdDocRef = doc(ordersCollection, id);

  await setDoc(randomIdDocRef, {
    id: id,
    name: name,
    email: email,
    plan: plan,
    address: address,
    church: church,
    appointmentDate: appointmentDate,
    status: 'waiting',
    createdAt: serverTimestamp(),
  });
}

export const getOrder = async(email)=>{
    try {
        const ordersCollection = collection(firestore, 'orders');
        var response =  await getDocs(query(ordersCollection,where("email","==",email)))
        // console.log(response.docs[0].data())
        if(response.docs.length > 0){
            return response.docs[0].data();
        }
        return null;
    } catch (error) {
        throw error;
    }
   

}