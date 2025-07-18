import SectionHeading from "@/components/shered/ui/SectionHeading";
import Image from "next/image";
import image from "@/assets/testimonial.png";
const Testimonial = () => {
    return (
        <div className='container my-[150px]'>
            <SectionHeading
                tag='Testimonial'
                title='What Our Customers Say'
                description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"></SectionHeading>
            <div className='w-4/5 mx-auto mt-8'>
                <div className='grid grid-cols-3 items-center gap-8'>
                    <div className=''>
                        <Image src={image} alt='reviewer image' />
                    </div>
                    <div className='p-8 bg-[#F4F6F6] col-span-2 h-fit rounded-3xl'>
                        <p className='text-xl font-secondary'>
                            &quot; I absolutely love Fresh Harvest! The quality
                            of their produce is outstanding. It`s always fresh,
                            flavorful, and delicious. The convenience of
                            ordering online and having it delivered to my
                            doorstep saves me so much time. Fresh Harvest has
                            become my go-to for all my fruit and vegetable
                            needs.
                        </p>
                        <p className='mt-8 text-lg'>
                            <span className='font-medium'>Jane Doe</span> -
                            Professional chef
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
