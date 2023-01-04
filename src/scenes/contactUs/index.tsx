import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from '@/shared/Htext'
import { useForm } from "react-hook-form";



type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}
const  inputStyle='w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5'



const ContactUs = ({setSelectedPage}: Props) => {
  const{ register, trigger, formState:{ errors }}= useForm()
  const onSubmit = async (e: any)=>{
    const isValid= await trigger()
    
    if(!isValid){
      e.preventDefault()
    }
  
  }
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div onViewportEnter={()=> setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div className='md:w-3/5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0}
        }}
        >
          <Htext>
            <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                       
          </Htext>
          <p className='my-5'>Welcome to our fitness program! Are you ready to get in shape and feel your best? Join us 
            now and start your journey towards a healthier lifestyle. Our team of experienced trainers 
            nd nutritionists will guide you every step of the way, helping you to reach your fitness goals 
            and feel confident in your own skin.</p>
        </motion.div>
          {/* FORM AND IMAGE */}
          <div className='mt-10 justify-between gap-8 md:flex'>
            <motion.div
              className='mt/10 basis-3/5 md:mt-0'
              initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount:0.5}}
              transition={{duration:0.5}}
              variants={{
                  hidden:{opacity:0, y:50},
                  visible:{opacity:1, y:0},
              }}
            >
              <form 
                target='_blank'
                onSubmit={onSubmit}
                action="https://formsubmit.co/a76ecd32de7f900e586a88d2a5183bc2"
                method="POST"              
              >
              <input 
              className={inputStyle}
              type="text"
              placeholder='NAME'
              {...register("name",{
                required:true,
                maxLength:100,
              })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type==="required" && "This field is required"}
                  {errors.name.type==="maxLength" && "The Max length is 100 "}
                </p>
              )}

              <input 
              className={inputStyle}
              type="email"
              placeholder='EMAIL'
              {...register("email",{
                required:true,
                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type==="required" && "This field is required"}
                  {errors.email.type==="pattern" && "Invalid email adress"}
                </p>
              )}

              <textarea 
              className={inputStyle}
              rows={4}
              cols={50}
              placeholder='MESSAGE'
              {...register("message",{
                required:true,
                maxLength:500,
              })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type==="required" && "This field is required"}
                  {errors.message.type==="maxLength" && "Max length is 500 caracters"}
                </p>
              )}
              <button type='submit'
              className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
              >
                SUBMIT
              </button>
              </form>            
            </motion.div>
            <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial="hidden"
              whileInView="visible"
              viewport={{once:true, amount:0.5}}
              transition={{delay:0.2, duration:0.5}}
              variants={{
                  hidden:{opacity:0, y:50},
                  visible:{opacity:1, y:0},
              }}
            >
              <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] ">
                <img src={ContactUsPageGraphic} alt={"Contact Us Page Graphic"} className="w-full"/>
              </div>
            </motion.div>

          </div>
      </motion.div>
      
    </section>
  )
}

export default ContactUs