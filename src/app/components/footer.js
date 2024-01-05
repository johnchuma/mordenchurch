const Footer = () => {
    var year = new Date().getFullYear()
    return ( <div>
     <div className="w-11/12 mx-auto mb-4 mb:mb-16">
  <div className=" text-3xl md:text-4xl font-bold">Frequently Asked Questions</div>
  <div className="w-11/12 md:w-6/12  mt-4">
    <div className="text-lg">If you can't find what you're looking for, email our support team, and if you're lucky, someone from Modern Church will get back to you.</div>
  </div>
  <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 mt-12">
    {[
      {
        title: "Does Modern Church System handle mobile app development?",
        description: "Absolutely! Our system includes a customized mobile app development with your church's name."
      },
      {
        title: "Is there a desktop-based management system included?",
        description: "Yes, Modern Church System comes with a powerful desktop-based management system for comprehensive church administration."
      },
      {
        title: "Does Modern Church System offer website development?",
        description: "Certainly! Our system includes the development of one website tailored to your church's needs."
      },
      {
        title: "Is staff and congregation training provided?",
        description: "Absolutely! Modern Church System includes training sessions for both staff and congregation members to ensure everyone is well-versed with the system."
    },
      {
        title: "Is website maintenance part of the package?",
        description: "Of course! We provide ongoing website maintenance to keep your online presence up-to-date."
      },
      
      {
        title: "How much data storage is included?",
        description: "Enjoy a generous 100GB data storage to accommodate your church's growing needs."
      },
      ].map((item) => {
        return (
          <div key={item.title} className="">
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-sm">{item.description}</div>
          </div>
        );
      })}
  </div>
</div>


     <div className=" mt-16 md:mt-40 ">
      <div className="text-center">
      <div className="font-bold text-2xl">Modern <snap className="text-indigo-600">Church</snap></div>
      <div className="text-sm py-5">+255627707434 | support@Modernchurch.com</div>
      </div>
     

      <div className="py-4 md:py-16 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2  gap-y-6">
        <div className="text-sm order-2 md:order-1 text-center md:text-start">
        {`Copyright ©️ ${year} Modern Church. All rights reserved.`}
        </div>
        <div className="flex space-x-4 justify-center md:justify-end order-1 md:order-2">
          <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-5 w-5 " width="100" height="100" viewBox="0 0 50 50">
<path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
</svg>
          </div>
          <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="h-5 w-5 " width="100" height="100" viewBox="0 0 50 50">
    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
</svg>
          </div>
        </div>
      </div>
     </div>
    </div> );
}
 
export default Footer;