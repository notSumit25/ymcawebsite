import DraftsIcon from '@mui/icons-material/Drafts';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'
import {motion} from "framer-motion";
import Image from "next/image";
const  DepartmentChairperson = () => {
    return (
        <motion.div
            initial={{
                opacity:0,
                x:-100
            }}
            whileInView={{
                opacity:1,
                x:0
            }}
            transition={{
                duration:0.5,
            }}
            viewport={{
                margin:'0px 0px -50px 0px',
                once: false
            }}
            whileHover={{
                scale:1.05
            }}
            className={'flex flex-col  bg-opacity-90 px-4 items-center justify-center rounded-xl shadow-2xl h-[30rem]'}>
            <div>
                <a href={'#'}><Image src={'/assets/images/faculty/atulmishra.png'} layout={'fixed'} height={300} width={300} className={'rounded'}/></a>
            </div>
            <a href={'#'}><h1 className={'text-black font-bold text-2xl'}>Prof. Atul Mishra</h1></a>
            <a href={'#'}><h1 className={'text-black font-light mb-2'}>Chairperson</h1></a>
            <button className={' rounded-lg p-1 bg-primaryLight text-white hover:scale-105 duration-200 hover:bg-primary'} onClick={''}>Read More</button>

        </motion.div>


    );
}

export default DepartmentChairperson;