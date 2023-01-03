import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import React from 'react'
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';


const classes: Array<ClassType>=[
  {
    name:"Weight Training CLasses",
    image: image1
  },
  {
    name:" Yoga CLasses",
    description:"Looking to build strength and tone your muscles? Our weight training class is for you! In this 60-minute class, our certified personal trainer will guide you through a series of exercises using free weights, machines, and body weight to target all major muscle groups. You'll learn proper form and technique to maximize your results and reduce the risk of injury. All fitness levels are welcome, and the trainer can provide modifications and progressions to suit your needs. This class is suitable for participants age 16 and up. Please bring a water bottle and a towel, and be prepared to work hard and see results!",
    image: image2
  },
  {
    name:"Ab Core CLasses",
    image: image3
  },
  {
    name:"Adventure CLasses",
    description:"Looking to build strength and tone your muscles? Our weight training class is for you! In this 60-minute class, our certified personal trainer will guide you through a series of exercises using free weights, machines, and body weight to target all major muscle groups. You'll learn proper form and technique to maximize your results and reduce the risk of injury. All fitness levels are welcome, and the trainer can provide modifications and progressions to suit your needs. This class is suitable for participants age 16 and up. Please bring a water bottle and a towel, and be prepared to work hard and see results!",
    image: image4
  },
  {
    name:"Fitness CLasses",
    description:"Looking to build strength and tone your muscles? Our weight training class is for you! In this 60-minute class, our certified personal trainer will guide you through a series of exercises using free weights, machines, and body weight to target all major muscle groups. You'll learn proper form and technique to maximize your results and reduce the risk of injury. All fitness levels are welcome, and the trainer can provide modifications and progressions to suit your needs. This class is suitable for participants age 16 and up. Please bring a water bottle and a towel, and be prepared to work hard and see results!",
    image: image5
  },
  {
    name:"Training CLasses",
    description:"Looking to build strength and tone your muscles? Our weight training class is for you! In this 60-minute class, our certified personal trainer will guide you through a series of exercises using free weights, machines, and body weight to target all major muscle groups. You'll learn proper form and technique to maximize your results and reduce the risk of injury. All fitness levels are welcome, and the trainer can provide modifications and progressions to suit your needs. This class is suitable for participants age 16 and up. Please bring a water bottle and a towel, and be prepared to work hard and see results!",
    image: image6
  }

]







type Props = {
    setSelectedPage: (value : SelectedPage)=>void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
      onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>

<motion.div
      className="m-auto w-5/6"
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.5}}
      transition={{duration:0.5}}
      variants={{
          hidden:{opacity:0, x:-50},
          visible:{opacity:1, x:0}
      }}
      >
        <div className='md: w-3/5'>
          <Htext>
            OUR CLASSES
          </Htext>
          <p className='py-5'>Join us for our high-energy cardio kickboxing class! This 45-minute workout combines elements of boxing, 
            martial arts, and aerobics to provide a full-body, calorie-burning workout. Our certified instructors will 
            lead you through a series of punches, kicks, and combos set to upbeat music. No prior experience 
            is necessary, and modifications can be made for all fitness levels. Bring a water bottle and a towel, 
            and get ready to sweat! This class is suitable for participants age 16 and up.</p>
        </div>

      </motion.div>
      <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
        <ul className='w-[2800px] whitespace-nowrap'>
          {classes.map((item, index)=>(
            <Class/>
          ))}

        </ul>

      </div>
      </motion.div>
      
      </section>
  )
}

export default OurClasses