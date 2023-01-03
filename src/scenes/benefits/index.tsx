import Htext from '@/shared/Htext';
import { BenefitType, SelectedPage } from '@/shared/types';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React from 'react'
import Benefit from './Benefit';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from '@/shared/ActionButton';

const benefits: Array<BenefitType> =[

      {
        icon:<HomeModernIcon className='h-6 w-6'/>,
        title:"State of Art Facilities",
        description:
        "The facilities at our gym are top-notch and well-maintained. Our equipment is regularly serviced and cleaned to ensure a safe and comfortable workout experience for all of our members. We have a wide variety of cardio machines, weight lifting equipment, and functional fitness areas to accommodate all types of workouts. Our spacious locker rooms are equipped with showers, towel service, and hair dryers for your convenience. We also have a sauna and steam room to help you relax and unwind after your workout. Our staff is friendly and always available to assist with any questions or needs you may have. We take pride in maintaining a clean and welcoming environment for all of our members."

      },

      {
        icon:<UserGroupIcon className='h-6 w-6'/>,
        title:"100´s of divers Classes",
        description:
        "Our gym offers a wide variety of classes to choose from, with over 100 options to fit your fitness goals and preferences. Whether you're looking for high-intensity interval training, yoga, pilates, dance, or something else entirely, we have a class for you. Our experienced and certified instructors will lead you through challenging and fun workouts in a supportive and inclusive environment. We also offer classes for different levels, so you can find the right fit whether you're a beginner or an experienced athlete. Join us for a class and discover all the ways you can move and have fun while getting fit."

      },

      {
        icon:<AcademicCapIcon className='h-6 w-6'/>,
        title:"Expert and pro trainer",
        description:
        "Our team of expert and pro trainers are highly qualified and experienced professionals who are dedicated to helping you achieve your fitness goals. With advanced degrees and certifications in a variety of fields, including exercise science, kinesiology, and personal training, they have the knowledge and skills to design safe and effective workouts tailored to your needs. Whether you're looking to lose weight, build muscle, improve your endurance, or just feel better overall, our pro trainers are here to help. They are committed to providing personalized attention and support, and will work with you to create a plan that takes into account your unique goals, abilities, and preferences. Trust our pro trainers to help you transform your health and your life."

      }

]

const container ={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}

type Props = {
    setSelectedPage: (value : SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section

    id="benefits"
    className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <motion.div className='md:my-5 md:w-3/5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0}
        }}
        >
          <Htext>More Thant just a Gym.</Htext>
          <p className='my-5 text-sm'>
            We provide world class fitness equipement, trainers and get you
            to your ultimate fitness goals with ease. we provide ture care into each
            and every menber.
          </p>
        </motion.div>
        {/*BENEFITS */}
        <motion.div className='md:flex items-center justify-between gap-8 mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType)=>(
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/*GRAPHIC AND DESCRIPTION */}

        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/*MY DREAM GIRL */}
          <img src={BenefitsPageGraphic} alt="Benefits Page Graphic" className='mx-auto'/>
          {/*DESCRIPTION */}
          <div>
            {/*TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:50},
                    visible:{opacity:1, x:0}
                }}
                
                >
                  <Htext>MILLIONS OF HAPPY MEMBERS GETTING {" "} 
                  <span className='text-primary-500'>FIT</span>
                  </Htext>
                </motion.div>

              </div>

            </div>

            {/*DESACRIPTION */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.5}}
            transition={{delay: 0.2, duration:0.5}}
            variants={{
                hidden:{opacity:0, x:-50},
                visible:{opacity:1, x:0}
            }}
            >
              <p className='my-5'>It's no secret that millions of people have achieved their fitness goals with the help of this Evo GYM. The program has proven to be highly effective in helping people get fit and stay healthy.</p>
              <p className='mb-4'>One of the reasons for its success is the comprehensive approach it takes to fitness. It not only provides exercises and workout routines, but also includes nutrition and lifestyle guidance. This holistic approach helps members make lasting changes to their habits, resulting in sustainable fitness and wellness. With a supportive community and expert guidance, it's no wonder so many people have found success with this title.</p>
            </motion.div>

            {/*BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                  </ActionButton>

              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default Benefits