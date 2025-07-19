
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
                <h2 className='text-[80px] font-medium z-10'>
                    Seasonal Fruit Bundle
                </h2>
                <p className='text-5xl font-medium mt-2 z-10'>
                    Discount up to <span className='text-primary'>80% OFF</span>
                </p>

                <MyTimer expiryTimestamp={expiry} />

                <span className='text-[32px] px-8 py-4 font-semibold bg-[#176D38] rounded-full text-white mt-8 inline-block'>
                    CODE : <span className='text-[#FAC714]'>FRESH28</span>
                </span>
            </div>
            <Image
                src={fruitImage}
                alt='Fruit Offer'
                className='absolute right-0 bottom-0'
            />
        </div>
    );
};

export default Offer;
