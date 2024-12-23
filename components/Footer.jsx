import { AiFillCopyrightCircle } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <div id='intro' className="mt-4 mb-10 lg:mb-0">
            <div className="flex h-10 items-center justify-between text-xs font-normal text-LightGray py-4 px-2 md:px-4 w-full bg-MidNightBlack">
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <AiFillCopyrightCircle />
                    </div>
                    <span>2024 All Rights Reserved.</span>
                </div>
                {/* <div className="flex items-center">
                    <a href='https://www.linkedin.com/in/bishal-biswas-a2560b246/' target="_blank" rel="noreferrer">Connect with me ❤️ by <span className='font-bold'>Osama</span></a>
                </div> */}
                <div className='flex items-center'>
                    <div className="mr-1 text-base">
                        <IoLogoLinkedin />
                    </div>
                    <span>
                        <a href='https://www.linkedin.com/in/bishal-biswas-a2560b246/' target="_blank" rel="noreferrer">Connect with me</a>
                    </span>
                </div>
                <div className="hidden md:flex items-center">
                    <div className="mr-1 text-base">
                        <MdMail />
                    </div>
                    <div>bishalbiswas.work@gmail.com</div>
                </div>
            </div>
        </div>
    )
}

export default Footer