import { SelectedPage } from '@/shared/types'
import Logo from "@/assets/Logo.png"

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="Logo" />
                <p className='my-5'>
                Evogym is a modern and sleek gym located in the heart of the city. With state-of-the-art equipment and 
                a variety of fitness classes, Evogym is the perfect place to get in shape and improve your 
                overall health and wellness.
                
                </p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'> Contact Information: </h4>
                <p className='my-5'>Santiago </p>
                <p className='my-5'>Rosario Argentina</p>
                <p className='my-5'> Phone: 555-555-1212</p>
                <p className='my-5'> Email: info@evogym.com.ar</p>

            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'> Membership Information: </h4>
                <p className='my-5'>  Sign up for a membership online or in-person</p>
                <p className='my-5'>  Special rates for students and military personnel</p>
                <p className='my-5'>  No long-term contracts</p>

            </div>

        </div>

    </footer>
  )
}

export default Footer