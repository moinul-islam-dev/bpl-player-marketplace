import { Images } from '../../assets/assets'
import ClaimButton from '../ClaimButton/ClaimButton'

const Banner = () => {
    return (
        /*  */
        <div className='px-4 md:px-11'>
            <div className='mx-auto max-w-300 relative mt-1.5 w-full z-10 rounded-3xl flex gap-4 flex-col items-center justify-center bg-black px-6 py-12 md:px-11 md:py-16 overflow-hidden'>

            <div className='relative z-20 flex flex-col items-center gap-4 md:gap-6 w-full'>
                {/*  */}
                <img src={Images.bannerMain} alt="bannerMain" className="w-48 md:w-auto object-contain" />

                <h1 className='text-center font-bold text-white text-[clamp(1.2rem,5vw,2.5rem)] leading-tight max-w-[90%]'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>

                <h2 className='text-center font-semibold text-white/70 text-[clamp(.85rem,3vw,1.1rem)]'>
                    Beyond Boundaries Beyond Limits
                </h2>

                <div className="mt-2">
                   <ClaimButton />
                </div>
            </div>

            {/* Background Shadow */}
            <div
                className='absolute inset-0 bg-cover bg-center z-0 opacity-60 pointer-events-none'
                style={{ backgroundImage: `url(${Images.bgShadow})` }}
            ></div>

        </div>
        </div>
    )
}

export default Banner