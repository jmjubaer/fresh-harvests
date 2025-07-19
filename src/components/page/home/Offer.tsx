import SectionTag from "@/components/shered/ui/SectionTag";
import Image from "next/image";
import fruitImage from "@/assets/offer.png";
import { MyTimer } from "@/components/shered/ui/Timer";
const Offer = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 10); // Adds 10 days
    return (
        <div className='bg-[#eeecec] py-24 relative'>
            <div className='container z-10'>
                <SectionTag tag='Special Offer ' />
                <h2 className='lg:text-[80px] sm:text-6xl text-5xl font-medium z-10'>
                    Seasonal Fruit Bundle 
                </h2>
                <p className='sm:text-5xl text-3xl font-medium mt-2 z-10'>
                    Discount up to <span className='text-primary'>80% OFF</span>
                </p>

                <MyTimer expiryTimestamp={expiry} />

                <span className='sm:text-[32px] text-2xl px-8 py-4 font-semibold bg-[#176D38] rounded-full text-white mt-8 inline-block'>
                    CODE : <span className='text-[#FAC714]'>FRESH28</span>
                </span>
            </div>
            <Image
                src={fruitImage}
                alt='Fruit Offer'
                className='absolute right-0 bottom-0 w-[55%] hidden lg:block'
            />
        </div>
    );
};

export default Offer;
