import Image from "next/image"

const Organisations = () => {
    return ( <div>
         <div>
     <div className="text-center">Trusted by Major Church Organizations</div>
     <div className="w-10/12 mx-auto">
     <div className="grid grid-cols-2 md:grid-cols-5 space-y-4  my-5">
      {[
        {image:"/aic.png",title:"AIC"},
        {image:"/ccc.png",title:"CCC"},
        {image:"/sda.png",title:"SDA"},
        {image:"/tag.png",title:"TAG"},
        {image:"/eagt.png",title:"EAGT"},
          
      ].map((item)=>{
             return <div key={item.title} className="flex space-x-2 items-center">
              <Image height={60} width={60} src={item.image}/>
               <h3 className="text-gray-800 font-bold text-2xl">{item.title}</h3>
             </div>
      })}
     </div>
     </div>
     </div>
    </div> );
}
 
export default Organisations;