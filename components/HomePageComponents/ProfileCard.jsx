import Image from "next/image"
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import Link from "next/link";


const ProfileCard = ({image, name, designation,url}) => {
    const t = useTranslations("home.profileCard");

  return (
      <motion.div
          initial={{
              opacity:0,
                y:100
          }}
          whileInView={{
                opacity:1,
                y:0
          }}
            transition={{
                duration:1,
            }}
          viewport={{
              margin:'0px 0px -50px 0px',
              once: true
          }}
          className={'flex hover:scale-105 duration-200 flex-col mx-5 border-12 rounded-xl  w-[15rem] h-[22rem] pt-4 px-2 bg-gradient-to-b from-white to-[#A9B6C9] border-neutral-50 items-center mb-2 '}>
          <div className={'px-3 flex h-full flex-col'}>
              <div className={'bg-gradient-to-t relative h-60 w-52 from-white to-secondary rounded-md'}>
                  <Image src={image ? image : "/assets/images/favicon.ico"} className={''}  alt={name} layout='fill' objectFit='contain'/>
              </div>
              <div className={'flex h-auto flex-col'}>
                    <div className={'flex flex-col font-bold text-center items-center'}>
                      <h1 className={'text-md text-primaryLight'}>{t(name)}</h1>
                      <h2 className={'text-sm text-secondary font-light  mx-auto'}>{t(designation)}</h2>
                    </div>

                </div>
              <div className={'mx-auto mt-auto flex flex-col mb-3'}>
                  <Link className={'px-1 py-0.5 mt-auto hover:scale-105  duration-200 text-sm rounded-sm bg-primaryLight text-white m'} href={url ? url : "#"}>{t('read more')}</Link>
              </div>
          </div>
      </motion.div>
  );
}
export default ProfileCard;