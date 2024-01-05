import Image from "next/image"

const Testimonials = () => {
    return ( <div>
        <div className="pb-34 ">
      <div className=" text-3xl md:text-4xl w-11/12 md:w-7/12 mx-auto font-bold md:text-center">Adored by church leaders and members</div>
      <div className=" w-11/12 md:w-7/12 mx-auto md:text-center">
      <div className="text-lg mt-4">Our software is irresistibly simple, capturing hearts effortlessly. Simplicity, achieved by focusing on what truly matters, omitting unnecessary complexities.</div>
      </div>
      <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 py-5 mt-5">
        {
        [
          {image:"https://img.freepik.com/premium-photo/handsome-young-black-african-american-man-closeup-portrait_21730-13870.jpg",
          name:"Bakari Shabani",position:"Katibu Beroya Church",
          description:"Huu mfumo umefanya shughuli za kanisani kuwa nyepesi sana kuliko ilivyokua hapo mwanzo "
          },
          {image:"https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?size=626&ext=jpg&ga=GA1.1.915968518.1688271381&semt=ais5",
          name:"Alphonce Ezra",position:"Mchungaji Nyumba ya Mungu",
          description:"Sasa hatutumii tena madaftari kutunza taarifa za fedha, mfumo unaturahisishia mahesabu na kila kitu"
          },
          {image:"https://img.freepik.com/premium-photo/confident-young-african-man-looking-camera-smiling-while-standing-against-grey-wall_425904-1984.jpg?size=626&ext=jpg&ga=GA1.2.915968518.1688271381&semt=ais",
          name:"Tony James",position:"Katibu idara ya CA's",
          description:"Nimependa kuwa hata idara nazo tunaweza kuweka taarifa zetu za idarani kwetu "
          },
          {image:"https://img.freepik.com/free-photo/surprised-playful-touched-good-looking-african-american-woman-glasses-stylish-brown-t-shirt-clasping-hands-smiling-from-joy-excitement-liking-great-show_176420-23322.jpg?size=626&ext=jpg&ga=GA1.2.915968518.1688271381&semt=ais",
          name:"Maige Faidha",position:"Mzee wa kanisa",
          description:"Uaandaaji wa taarifa kwenye vikao umekua mwepesi kwa sababu data zote tunazo tayari"
          },
          {image:"https://img.freepik.com/premium-psd/woman-with-her-arms-crossed-yellow-shirt-front_176841-36785.jpg?size=626&ext=jpg&ga=GA1.2.915968518.1688271381&semt=ais",
          name:"Pastor Dorisi",position:"Mchungaji CEC",
          description:"Nimependa kuwa mfumo unaturuhusu kuhifadhi picha na documents mbalimbali za kanisa"
          },
          {image:"https://img.freepik.com/free-photo/young-african-american-female-gesturing-with-her-fist-female-empowerment-concept_181624-32888.jpg?size=626&ext=jpg&ga=GA1.2.915968518.1688271381&semt=ais",
          name:"Pastor Suzy",position:"Mchungaji EFC",
          description:"Calender nzima ya kanisa ipo kwenye mfumo hivyo ni rahisi sana kupanga matukio mengine ya dharura"
          }
        ].map((item)=>{
          return <div key={item.name} className=" shadow-xl py-10 px-10 rounded-2xl ">
            <div className=" text-base ">{item.description}</div>
            <div className="flex justify-between pt-8">
              <div className="  ">
                <div className="text-black font-bold">{item.name}</div>
                <div className="text-sm">{item.position}</div>
              </div>
              <div className="">
              <Image height={40} width={40} className="rounded-full object-cover  aspect-square" src={item.image}/>
              </div>
            </div>
          </div>
        })
        
        }
        <div></div>
      </div>
      </div>
     
     </div>
    </div> );
}
 
export default Testimonials;