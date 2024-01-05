const Pricing = () => {
    return ( <div>
        <div className="bg-gray-900 py-20 md:py-40 my-16 md:my-32">
     <div className=" text-3xl md:text-4xl font-bold md:text-center w-11/12 md:w-7/12 mx-auto text-white">Our subscription plans</div>
      <div className="w-11/12 md:w-7/12 mx-auto md:text-center">
      <div className="text-lg mt-4 text-gray-400">Choose any subscriptions that works with your budget.</div>
      </div>
      <div className="w-11/12 mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 ">
       <div className=" px-8 py-10 rounded-3xl order-1">
            <div className="text-white text-5xl font-bold">35K<span className="text-sm">TSH/month</span></div>
            <div className="text-white pt-4 pb-2">Software only </div>
            <div className="text-gray-400">You will get full access to our software system with this plan</div>
            <div className="border  border-gray-300 text-sm text-white rounded-full text-center py-2 my-8">Get started</div>
          <div className="space-y-4 ">
          {[
             "Mobile App with Your Church's Name",
             "Desktop-Based Management System",
             "Regular Data Backup",
             "Generous 100GB Data Storage",
             "Training for Staff and Congregation"
            ].map((item,index)=>{
              return <div key={index} className="flex items-center ">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   class="w-6 h-6 text-gray-500 ">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <div className="text-white text-sm pl-2">
                    {item}
                  </div>

              </div>
            })}
          </div>

          </div>

          <div className=" px-8 py-10 rounded-3xl bg-indigo-600 order-first md:order-2">
          <div className="text-white text-5xl font-bold">50K<span className="text-sm">TSH/month</span></div>
            <div className="text-white pt-4 pb-2">Software plus website</div>
            <div className="text-white">With this plan you will have both management system and website</div>
            <div className="border   text-black font-bold text-sm bg-white rounded-full text-center py-2 my-8">Get started</div>
          <div className="space-y-4 ">
          {[
"Mobile App with Your Church's Name",
"Desktop-Based Management System",
"Development of 1 Website",
"Ongoing Website Maintenance",
"Regular Data Backup",
"Generous 100GB Data Storage",
"Training for Staff and Congregation"
].map((item)=>{
              return <div key={item} className="flex items-center ">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   class="w-6 h-6 text-white ">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <div className="text-white text-sm pl-2">
                    {item}
                  </div>

              </div>
            })}
          </div>

          </div>

          <div className=" px-8 py-10 rounded-3xl order-3">
          <div className="text-white text-5xl font-bold">65K<span className="text-sm">TSH/month</span></div>
            <div className="text-white pt-4 pb-2">Plus extra servicies</div>
            <div className="text-gray-400">With this plan you all services from other plans and other extra services</div>
            <div className="border text-sm border-gray-300 text-white rounded-full text-center py-2 my-8">Get started</div>
          <div className="space-y-4 ">
          {[
"Exclusive 5000TSH Designing Offer",
"Instagram Account Management",
"Facebook Page Administration",
"YouTube Channel Maintenance",
"Services from Other Plans"
].map((item)=>{
              return <div key={item} className="flex items-center ">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                   class="w-6 h-6 text-gray-500 ">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                  </div>
                  <div className="text-white text-sm pl-2">
                    {item}
                  </div>

              </div>
            })}
          </div>

          </div>
        
     </div>
      </div>
     </div>
    </div> );
}
 
export default Pricing;