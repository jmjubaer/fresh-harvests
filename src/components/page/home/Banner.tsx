import Navbar from "@/components/shered/Navbar";
import Image from "next/image";
import product from "@/assets/special-product.png";
import banner from "@/assets/banner.png";
import arrow from "@/assets/arrow.png";
import playstore from "@/assets/play.png";
import applestore from "@/assets/app.png";
import SectionTag from "@/components/shered/ui/SectionTag";
const Banner = () => {
    return (
        <div className=' w-full min-h-screen banner_bg relative pb-36'>
            <Navbar home/>
            <div className='container mt-20 '>
                <div className='w-1/2'>
                    <SectionTag tag='Welcome to Fresh Harvest' />
                    <h1 className='text-[80px] font-medium leading-[100%] mt-4'>
                        Fresh Fruits and Vegetables
                    </h1>
                    <p className='mt-4 text-sm w-4/5 font-secondary'>
                        At Fresh Harvests, we are passionate about providing you
                        with the freshest and most flavorful fruits and
                        vegetables
                    </p>
                    <button className='text-white bg-primary px-8 py-4 rounded-lg mt-8'>
                        Shop Now
                    </button>
                    <Image
                        src={arrow}
                        alt='arrow '
                        className='absolute  left-[10%] '
                    />

                    {/* product card */}
                    <div className='ml-[30%]'>
                        {/* Todo: make dynamic */}
                        <Image src={product} alt='special product' />
                    </div>
                    <div className=''>
                        <p className='text-sm'>Download App:</p>
                        <div className='flex items-center'>
                            <button>
                                <Image
                                    src={applestore}
                                    alt='apple store'
                                    className='w-36'
                                />
                            </button>{" "}
                            <button>
                                <Image
                                    src={playstore}
                                    alt='play store'
                                    className='w-36'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 right-0 h-full w-[30%] bg-[#749B3F] '></div>
            <Image src={banner} alt='special product' className='absolute right-0 z-10 bottom-0 w-[45%]' />
        </div>
    );
};

export default Banner;
